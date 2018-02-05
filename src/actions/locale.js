import * as actions from './action-types';
import axios from 'axios';
import localeData from '../locale/en.json';
let cache = {};
export const switchLocale = (localeCode) => (dispatch) => {
    cache[localeCode] = {
        type: actions.SWITCH_LANGUAGE,
        locale: localeCode,
        messages: localeData
    };
    dispatch(cache[localeCode]);
};