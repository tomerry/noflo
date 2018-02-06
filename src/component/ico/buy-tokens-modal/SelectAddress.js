import * as React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../../actions/web3/token-sale';
import {connect} from 'react-redux';

import contractManager from './../../../services/web3/contract-manager';
import {Alert, Button, FormGroup, Input, Label} from 'reactstrap';
import TokenBalanceTable from './TokenBalanceTable';

class SelectAddress extends React.Component {

    constructor(props) {
        super(props);
        let state = {
            address:      '',
            addressValid: true
        };

        this.saleContract        = contractManager.get('TokenSale');
        this.handleAddressChange = this.handleAddressChange.bind(this);

        let match = window.location.hash.match(/address=(0x[a-z0-9]{40})/i);
        if (match) {
            state.address = match[1];
            this.props.isWhitelisted(this.saleContract, state.address);
        }

        this.state = state;
    }

    componentDidMount() {
        if (this.props.currentAccount) {
            this.setNewAddress(this.props.currentAccount);
        }
    }

    setNewAddress(address) {
        switch (address.length) {
            case 0:
                break;
            case 1:
                if (address[0] !== '0') {
                    address = '0';
                }
                break;
            case 2:
                if (address[1] !== 'x') {
                    address = '0x';
                }
                break;
            default:
                address = address.match(/^0x[a-z0-9]+/i)[0];
        }

        this.setState({address: address});

        if (this.validateAddress(address) && this.state.address !== address) {
            this.props.isWhitelisted(this.saleContract, address);
        }
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.currentAccount && (this.state.address === '' || nextProps.accountChanged)) {
            this.setNewAddress(nextProps.currentAccount);
        }
    }

    handleAddressChange(e) {
        let newAddress = e.target.value;
        this.setNewAddress(newAddress);
    }

    validateAddress(address) {
        if (!address) {
            return false;
        }

        return address.match(/^0x[a-f0-9]{40}$/i) ? true : false;
    }

    renderAddressField() {
        const isValid = this.validateAddress(this.state.address);

        return (
            <FormGroup>
                <Label for="eth-address-check">ETH Address:</Label>
                <Input value={this.state.address}
                       id="eth-address-check"
                       placeholder="0x0000000000000000000000000000000000000000"
                       pattern="^0x[a-fA-F0-9]{40}$" maxLength="42"
                       name="eth_address"
                       className={'mono-space' + (!isValid ? ' is-invalid' : '')}
                       onChange={this.handleAddressChange}
                />
                {!isValid ? this.renderAddressError() : null}
            </FormGroup>
        );
    }

    renderAddressError() {
        return (
            <div className="invalid-feedback">
                <ul>
                    <li>Please enter a valid address to start the buy or whitelist process</li>
                </ul>
            </div>
        );
    }

    renderContinue() {
        if (!this.validateAddress(this.state.address)) {
            return (
                <div>
                    <Button block={true} disabled={true}>
                        GET REGISTERED / BUY TOKENS
                    </Button>
                </div>
            )
        }

        if (!this.props.addressWhitelisted) {
            return (
                <div>
                    <Alert color="warning">
                        <i className="fa fa-warning"/> Your wallet address is currently NOT registered! <i className="fa fa-warning"/>
                        <p>
                            In order to get your wallet registered for the COPYTRACK ICO, follow the next step. Please be aware that
                            you can only purchase tokens with a valid Ethereum wallet, like myetherwallet, MetaMask or Mist. Exchange
                            accounts, such as Coinbase, Binance, Bittrex & Kraken, are not accepted by our smart contract.</p>

                        <p>
                            Once your ETH wallet has been whitelisted by our team, you will receive a confirmation e-mail with further
                            instructions.
                        </p>
                    </Alert>
                    <Button block={true} onClick={() => this.props.onNewAddress(this.state.address)}>
                        GET REGISTERED
                    </Button>
                </div>
            )
        }

        return (
            <div>
                <TokenBalanceTable address={this.state.address}/>

                <Alert color="success" className="mt-5">
                    <i className="fa fa-check"/> Your wallet is registered!<br/>
                    <p>Your ETH address is whitelisted for the COPYTRACK GLOBAL COPYRIGHT REGISTER ICO. Your are
                        able to purchase CPY tokens with your whitelisted ETH address.</p>
                </Alert>
                <Button block={true} onClick={() => this.props.onWhitelistedAddress(this.state.address)}>
                    BUY TOKENS
                </Button>
            </div>
        );
    }

    render() {
        let isWeb3Browser = web3.currentProvider._fallback === undefined;
        return (
            <div>
                <div className="intro">Thank you for your interest in COPYTRACK. <br/>
                    Please enter your ETH Address:
                </div>
                {isWeb3Browser && !this.props.currentAccount ?
                    <Alert color="info" className="mt-3">
                        <i className="fa fa-info-circle"/> It looks like you're using MetaMask, unlock your account to use all
                        features!
                    </Alert>
                    : ''
                }
                {this.renderAddressField()}
                {this.renderContinue()}
            </div>
        );
    }

}

SelectAddress.propTypes = {
    onNewAddress:         PropTypes.func.isRequired,
    onWhitelistedAddress: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
    return {
        currentAccount:     state.web3.account.ethAddress,
        accountChanged:     state.web3.account.accountChanged,
        tokenBalance:       state.web3.contract.tokenBalance,
        addressWhitelisted: state.web3.contract.whitelisted,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        isWhitelisted: (contract, address) => {
            dispatch(actions.isWhitelisted(contract, address))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SelectAddress);