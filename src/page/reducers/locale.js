// In your reducer:

let english = require('../../locale/en');
const initialState = {
    code: 'en',
    translations: english
};

import {addLocaleData} from 'react-intl';

import zh from 'react-intl/locale-data/zh';
import ja from 'react-intl/locale-data/ja';

addLocaleData(zh);
addLocaleData(ja);

function accountReducer(state = initialState, action) {
    switch (action.type) {
        case 'switch_language':

            return {
                code: action.locale,
                //merge english as default
                translations: Object.assign({}, english, action.messages)
            };

        default:
            return state;
    }
}

export default accountReducer;