import * as actions from './action-types';
import icoApi from './../../services/ico-api';

function getProgress() {
    return icoApi.client
        .get('/progress')
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            } else {
                console.log('ERROR', response);
            }
        })
        .catch((error) => {
            throw error;
        });
}


let loading = false;

export const getTokenSaleProgress = (contract) => (dispatch) => {
    const web3 = window.web3;
    if (web3 === undefined) {
        return;
    }

    if (loading) {
        return;
    }
    loading = true;

    getProgress()
        .then((result) => {
            let data = {
                discountPercentage: result.discountPercentage,
                percentageComplete: result.percentageComplete,
                tokensPerEther: new web3.BigNumber(result.tokensPerEther),
                tokensLeft: new web3.BigNumber(result.tokensLeft),
                tokensSold: new web3.BigNumber(result.tokensSold),
                totalEthRaised: new web3.BigNumber(result.totalEthRaised),
                totalSupply: new web3.BigNumber(result.totalSupply),
                participantCount: new web3.BigNumber(result.participantCount),
            };

            const stageMax = data.totalEthRaised.div(1000).ceil().mul(1000);

            data.stage = {
                percentageComplete: data.totalEthRaised.div(stageMax).mul(100),
                current: data.totalEthRaised,
                max: stageMax
            };

            data.tokensSold = new web3.BigNumber(11540074.396187)
                .add(data.tokensSold.sub(8876980.30475926).mul(1.2));


            dispatch({
                type: actions.WEB3_CONTRACT_TOKEN_SALE_PROGRESS,
                contract,
                payload: data
            });

            loading = false;
        })
};


export const getCurrentTokensPerEther = (contract) => (dispatch) => {
    return new Promise(
        (resolve, reject) => {
            contract.getCurrentTokensPerEther.call(function (err, status) {
                (err) ? reject(err) : resolve(status);
            });
        })
        .then((tokensPerEther) => {
            dispatch({
                type: actions.WEB3_CONTRACT_TOKEN_SALE_TOKENS_PER_ETHERUM,
                payload: tokensPerEther
            })
        })

};


export const isWhitelisted = (contract, address) => (dispatch) => {
    return new Promise(
        (resolve, reject) => {
            contract.whitelist.call(address, function (err, status) {
                (err) ? reject(err) : resolve(status);
            });
        })
        .then((whitelisted) => {
            dispatch({
                type: actions.WEB3_CONTRACT_WHITELIST_ADDRESS,
                address,
                payload: whitelisted
            })
        });
};

export const getTokenBalanceOf = (contract, address) => (dispatch) => {
    return new Promise(
        (resolve, reject) => {
            contract.balanceOf.call(address, function (err, status) {
                (err) ? reject(err) : resolve(status);
            });
        })
        .then((balance) => {
            dispatch({
                type: actions.WEB3_CONTRACT_TOKEN_BALANCE_OF,
                address,
                payload: web3.fromWei(balance)
            })
        });
};