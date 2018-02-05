import * as React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../../actions/web3/token-sale';
import {connect} from 'react-redux';
import contractManager from './../../../services/web3/contract-manager';
import {Alert} from 'reactstrap';

class SuccessMessage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            blockNumber: null
        }
    }

    componentDidMount() {

        this.checkTxInterval = setInterval(() => {
            web3.eth.getTransaction(this.props.txHash, (err, data) => {
                if (data.blockNumber) {
                    this.setState({blockNumber: data.blockNumber});
                    clearInterval(this.checkTxInterval);
                }
            });
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.checkTxInterval);
    }

    renderStatus() {


        if (this.state.blockNumber) {
            return (
                <div className="transaction-successful">
                    <div className="success-icon">
                        <i className="fa fa-thumbs-up"/>
                    </div>
                    <Alert color="success">Your transaction has been successfully processed.</Alert>
                </div>
            );
        }

        return (
            <div className="transaction-pending">
                <div className="success-icon">
                    <i className="fa fa-cog fa-spin"/>
                </div>
                <Alert color="info">Your transaction has been sent successfully and will be confirmed shortly.</Alert>
            </div>
        );
    }


    render() {
        if (this.props.txHash === null) {
            return null;
        }


        return (
            <div className="success-page">
                <div className="transaction-status">
                    {this.renderStatus()}
                </div>
                <h5>Thank you for your confidence in COPYTRACK</h5>

                <div className="text-center">
                    <a className="btn btn-secondary btn-block" target="_black"
                       href={'https://etherscan.io/tx/' + this.props.txHash}>
                        View on etherscan.io</a>
                </div>
            </div>
        )
    }


}


SuccessMessage.propTypes = {
    txHash: PropTypes.string.isRequired,
};


export default SuccessMessage;