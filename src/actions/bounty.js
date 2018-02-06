import axios from 'axios';
import * as actions from './action-types';

let running = false;
export const convertCurrency = (amount) => (dispatch) => {
    if (running === true) {
        return;
    }
    running = true;
    axios.get('https://api.etherscan.io/api?module=stats&action=ethprice')
        .then((response) => {
                dispatch({
                    type: actions.CURRENCY_CONVERTER,
                    payload: response,
                    rate: response.data.result.ethusd
                })
            }
        );
};