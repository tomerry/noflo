import {connect} from 'react-redux';
import * as React from 'react';
import {Alert, Modal, ModalBody, ModalHeader} from 'reactstrap';

import SignUp from './buy-tokens-modal/SignUp';
import * as actions from '../../actions/modal';
import BuyTokens from './buy-tokens-modal/BuyTokens';
import SelectAddress from './buy-tokens-modal/SelectAddress';
import SuccessMessage from './buy-tokens-modal/SuccessMessage';

let initialState = {
    message: null,
    signedUp: null,
    documentUploaded: null,

    selectedAddress: null,
    whitelisted: null,
    txId: null,
};

class BuyTokenModal extends React.Component {
    constructor(props) {
        super(props);
        let state = Object.assign({}, initialState);
        this.close = this.close.bind(this);

        this.registerSignUp = this.registerSignUp.bind(this);
        this.afterDocumentUpload = this.afterDocumentUpload.bind(this);

        this.state = state;
    }

    reset() {
        this.setState(initialState)
    }

    close() {
        this.props.close();
        this.setState(initialState)
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.accountChanged && nextProp.web3Address && this.state.selectedAddress) {
            if (this.state.selectedAddress !== nextProp.web3Address) {
                this.reset();
                this.setState({message: 'You changed your account, please start over!'})
            }
        }
    }

    registerSignUp() {
        this.setState({signedUp: true, message: null});
    }


    afterDocumentUpload() {
        this.setState({documentUploaded: true, message: null});
    }

    renderBody() {
        if (this.state.txId) {
            return this.renderSuccess();
        }

        if (!this.state.selectedAddress) {
            return this.renderSelectAddress();
        }

        if (this.state.selectedAddress && this.state.whitelisted) {
            return this.renderBuyTokens();
        }

        return this.renderSignUp();
    }

    renderSelectAddress() {
        return (<SelectAddress
                onNewAddress={(address) => this.setState({selectedAddress: address, whitelisted: false})}
                onWhitelistedAddress={(address) => this.setState({selectedAddress: address, whitelisted: true})}
            />
        )
    }


    renderSignUp() {
        return (<SignUp afterSignUp={this.registerSignUp} address={this.state.selectedAddress}/>)
    }


    renderBuyTokens() {
        if (!this.state.selectedAddress) {
            return null;
        }

        return (<BuyTokens
                address={this.state.selectedAddress}
                onSuccess={(txId) => this.setState({txId: txId})}
                onBack={() => this.reset()}/>
        )
    }

    renderSuccess() {
        if (this.state.txId == null) {
            return null;
        }


        return (
            <SuccessMessage txHash={this.state.txId}/>
        )
    }

    render() {
        if (!this.props.open) {
            return null;
        }
        return (
            <Modal isOpen={this.props.open} toggle={this.close}>
                <ModalHeader toggle={this.close}>
                    BUY TOKENS
                </ModalHeader>
                <ModalBody>
                    {this.state.message ? (<Alert color="info">{this.state.message}</Alert>) : ''}
                    {this.renderBody()}
                </ModalBody>
            </Modal>
        );
    }

    componentDidMount() {
        if (window.web3 !== undefined) {

            let web3Fallback = window.web3.currentProvider._fallback === true;
            if (window.FS !== undefined) {
                FS.setUserVars({web3Fallback_bool: web3Fallback});
            }

            if (window.ga !== undefined) {
                ga('set', 'dimension2', web3Fallback === true ? 'no' : 'yes');
            }
        }
    }

}

const mapStateToProps = (state) => {
    return {
        open: state.modal.buyTokens.open,
        message: state.modal.buyTokens.message,
        web3Address: state.web3.account.ethAddress,
        accountChanged: state.web3.account.accountChanged,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => {
            dispatch(actions.closeModal('buyTokens'))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyTokenModal);