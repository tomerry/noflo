import { combineReducers } from 'redux';
import web3  from './web3/index';
import locale  from './locale';
import modal from './modal';
import bounty from './bounty';

export default combineReducers({
    web3, locale, modal, bounty
});