import * as React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../../actions/web3/token-sale';
import {connect} from 'react-redux';

import contractManager from './../../../services/web3/contract-manager';

class TokenBalanceTable extends React.Component {

    componentDidMount() {
        this.props.getTokenBalanceOf(
            contractManager.get('Token'),
            this.props.address
        );
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.address !== '' && nextProps.address !== this.props.address) {
            this.props.getTokenBalanceOf(
                contractManager.get('Token'),
                nextProps.address
            );
        }
    }

    render() {
        return (
            <div className="text-center mt-5">
                <div><strong>Current CPY balance: </strong></div>
                <div className="mt-2">
                    <img height="30" src="https://copytrack.io/img/cpy_28.png"/>
                    <h4 className="account-balance">
                        {this.props.tokenBalance ? this.props.tokenBalance.toFormat() : 0}
                    </h4>
                </div>
            </div>
        );
    }


}


TokenBalanceTable.propTypes = {
    address: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
    return {
        tokenBalance: state.web3.contract.tokenBalance,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        getTokenBalanceOf: (contract, address) => {
            dispatch(actions.getTokenBalanceOf(contract, address))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TokenBalanceTable);