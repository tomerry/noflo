import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/bounty';

class CurrencyConverter extends Component {

    constructor() {
        super();

    }

    componentDidMount() {
        this.props.convertCurrency();
    }

    render() {

        const {rate, amount} = this.props;
        if (rate === null) {
            return null;
        }

        const usd = Math.round(amount * rate);
        const int = usd.toLocaleString('en-US').replace(/,/g, ' ');

        return (
            <span>{usd ? `${int} USD` : 'loading'}</span>
        );
    };
}


const mapStateToProps = (state) => {
    return {
        payload: state.bounty.payload,
        rate: state.bounty.rate
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        convertCurrency: (amount) => {
            dispatch(actions.convertCurrency(amount))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);