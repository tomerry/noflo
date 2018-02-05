// In your reducer:
import * as actions from '../../../actions/web3/action-types';

const initialState = {
    whitelisted: null,
    currentTokensPerEther: null,
    tokenBalance: null,
    tokenSaleProgress: {
        percentage: null,
        tokensSold: null,
        tokensLeft: null,
        totalSupply: null
    }
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.WEB3_CONTRACT_TOKEN_SALE_PROGRESS:
            return {
                ...state,
                tokenSaleProgress: action.payload
            };
        case actions.WEB3_CONTRACT_WHITELIST_ADDRESS:
            return {
                ...state,
                whitelisted: action.payload
            };
        case actions.WEB3_CONTRACT_TOKEN_SALE_TOKENS_PER_ETHERUM:
            return {
                ...state,
                currentTokensPerEther: action.payload
            };

        case actions.WEB3_CONTRACT_TOKEN_BALANCE_OF:
            return {
                ...state,
                tokenBalance: action.payload
            };


        default:
            return state;
    }
}

export default reducer;