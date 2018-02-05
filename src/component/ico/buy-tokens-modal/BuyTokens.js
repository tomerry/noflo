import {connect} from 'react-redux';
import * as React from 'react';
import PropTypes from 'prop-types';
import * as actions from './../../../actions/web3/token-sale';
import QRCode from 'qrcode.react';
import {
    Alert, Button, Input, InputGroup, InputGroupAddon, Label, Row
} from 'reactstrap';
import contractManager from './../../../services/web3/contract-manager';
import config from './../../../config';
import bonus from '../../../services/bonus';

const transactionData = {
    to: config.contracts.TokenSale,
    gas: 150000,
    gasPrice: 60
};

function buildQueryString(params) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}

class BuyTokens extends React.Component {
    constructor() {
        super();
        this.state = {
            etherToSpend: 1,
        };
        this.saleContract = contractManager.get('TokenSale');
    }

    componentDidMount() {
        this.props.getCurrentTokensPerEther(this.saleContract);
    }

    handleEtherAmount(e) {
        let value = e.target.value;

        this.setState({etherToSpend: value})
    }

    getQrCodeValue(etherToSpend) {
        let query = buildQueryString({
            value: etherToSpend,
            amount: etherToSpend, //for jaxx
            gas: transactionData.gas,
        });

        return 'ethereum:' + transactionData.to + '?' + query;
    }

    getMyEtherWalletLink(etherToSpend) {
        let query = buildQueryString({
            to: transactionData.to,
            value: etherToSpend,
            //gas:      transactionData.gasPrice,
            gaslimit: transactionData.gas,
        });

        return 'https://www.myetherwallet.com/?' + query + '#send-transaction'
    }


    buyTokens() {
        let transactionObject = {
            value: window.web3.toWei(this.state.etherToSpend, 'ether'),
            to: transactionData.to,
            gas: transactionData.gas,
            gasPrice: window.web3.toWei(transactionData.gasPrice, 'gwei')
        };

        window.web3.eth.sendTransaction(transactionObject, (err, txId) => {
            if (err) {
            } else {
                this.props.onSuccess(txId);
            }
        });
    }

    calculateExpectedTokens() {
        if (!this.props.currentTokensPerEther || !this.state.etherToSpend) {
            return new window.web3.BigNumber(0);
        }

        return this.props.currentTokensPerEther.mul(this.state.etherToSpend);
    }

    renderAddress() {
        return (
            <div>
                <Label>
                    Whitelisted Address <a href="#" onClick={this.props.onBack}><i className="fa fa-edit"/></a>
                </Label>
                <Input className="address" value={this.props.address} disabled={true}/>
                <Alert color="warning">
                    <i className="fa fa-warning"/>&nbsp;
                    Please make sure to contribute ONLY from this account&nbsp;
                    <i className="fa fa-warning"/> <br/>
                    Do not transfer funds from an exchange directly!
                </Alert>
            </div>
        )
    }

    renderCalculator() {
        return (
            <div>
                <InputGroup>
                    <InputGroupAddon>ETH</InputGroupAddon>
                    <Input type="number" min="0" max="2500" value={this.state.etherToSpend}
                           onChange={this.handleEtherAmount.bind(this)}/>
                    <InputGroupAddon>≙</InputGroupAddon>
                    <Input value={this.calculateExpectedTokens().toFixed(2)} disabled={true}/>
                    <InputGroupAddon>CPY</InputGroupAddon>
                </InputGroup>
                {this.renderWarning()}
            </div>
        )
    }


    renderWarning() {
        if (this.state.etherToSpend < 0.1) {
            return (
                <Alert color="warning">
                    <i className="fa fa-warning"/>&nbsp;
                    The minimum contribution amount is 0.1 ETH&nbsp;
                    <i className="fa fa-warning"/>
                </Alert>
            )
        }

        if (this.state.etherToSpend > 2500) {
            return (
                <Alert color="warning">
                    <i className="fa fa-warning"/>&nbsp;
                    The maximum contribution amount is 2500 ETH&nbsp;
                    <i className="fa fa-warning"/>
                </Alert>
            )
        }

        return null;
    }

    renderPaymentInfo() {
        return (
            <div className="payment-info">
                <p>Send your contribution to the following address:</p>
                <h5><a href="https://etherscan.io/address/copytrack.eth" target="_blank">copytrack.eth</a></h5>
                <small className="contract-address">({transactionData.to})</small>

                <Row className="mt-3">
                    <div className="col-sm-4 d-none d-sm-block">
                        {this.renderQrCode()}
                    </div>
                    <div className="col-sm-8">
                        <h6 className="mt-1">Recommended settings</h6>
                        <table className="table">
                            <tbody>
                            <tr>
                                <td>Gas Limit</td>
                                <td>{new web3.BigNumber(transactionData.gas).toFormat(0)}</td>
                            </tr>
                            <tr>
                                <td>Gas Price</td>
                                <td>>= <strong>{transactionData.gasPrice} GWEI</strong></td>
                            </tr>
                            <tr>
                                <td>Contribution Limits</td>
                                <td>0.1 - 2,500 ETH</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Row>
                <div className="alert alert-warning fade show" role="alert">
                    <i className="fa fa-warning"/>
                    &nbsp;Make sure you set the gas price to at least {transactionData.gasPrice} GWEI&nbsp;
                    <i className="fa fa-warning"/>
                </div>
            </div>
        );
    }

    renderMyEtherWalletLink() {
        let amount = this.state.etherToSpend ? this.state.etherToSpend : 1;

        return (
            <div>
                <a target="_blank" className="nowrap btn btn-secondary btn-block"
                   href={this.getMyEtherWalletLink(amount)}>
                    myetherwallet.com
                </a>

            </div>
        )
    }


    renderBuyButton() {
        return (
            <div>
                <Button block
                        disabled={this.state.etherToSpend === 0 || !this.props.web3Address}
                        onClick={this.buyTokens.bind(this)}>
                    MetaMask
                </Button>
            </div>
        )
    }

    renderBonus() {
        const stage = bonus.getStage();
        if (!stage) {
            return null;
        }

        const bonusTokens = new window.web3.BigNumber(this.calculateExpectedTokens()).mul(stage.bonus);

        return (
            <div className="col-12">
                <Alert color="success" className="mb-0">
                    <div className="small">
                        Buy {this.calculateExpectedTokens().toFormat(2)} CPY Tokens and
                        receive <strong>{bonusTokens.toFormat(2)} CPY Tokens as a Bonus</strong><br />
                        Bonus Tokens will be distributed mid-February
                    </div>
                </Alert>
            </div>
        )
    }


    renderQrCode() {
        let amount = this.state.etherToSpend ? this.state.etherToSpend : 1;

        return (<QRCode value={this.getQrCodeValue(amount)}/>)
    }

    renderButtons() {
        let isWeb3Browser = web3.currentProvider._fallback === undefined;

        if (isWeb3Browser) {
            return (
                <Row className="buy-buttons">
                    {this.renderBonus()}
                    <div className="col-12 mb-3 mt-3">
                        Buy <strong>{this.calculateExpectedTokens().toFormat(2)}</strong> Tokens directly through:
                    </div>
                    <div className="col-sm-6">
                        {this.renderMyEtherWalletLink()}
                    </div>
                    <div className="col-sm-6">
                        {this.renderBuyButton()}
                    </div>
                </Row>
            )
        }

        return (
            <Row className="buy-buttons">
                {this.renderBonus()}
                <div className="col-12 mb-3 mt-3">
                    Buy <strong>{this.calculateExpectedTokens().toFormat(2)}</strong> Tokens directly through:
                </div>
                <div className="col-12">
                    {this.renderMyEtherWalletLink()}
                </div>
            </Row>
        )
    }

    render() {


        return (
            <div className="buy-tokens-step">
                {this.renderAddress()}
                {this.renderPaymentInfo()}

                {this.renderCalculator()}
                {this.renderButtons()}
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        web3Address: state.web3.account.ethAddress,
        accountWhitelisted: state.web3.contract.whitelisted,
        currentTokensPerEther: state.web3.contract.currentTokensPerEther,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        isWhitelisted: (contract, address) => {
            dispatch(actions.isWhitelisted(contract, address))
        },
        getCurrentTokensPerEther: (contract) => {
            dispatch(actions.getCurrentTokensPerEther(contract))
        }
    };
};

BuyTokens.propTypes = {
    address: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(BuyTokens);