import Token from './contracts/Token.json';
import TokenSale from './contracts/TokenSale.json';
import config from './../../config';

const contracts = {
    Token, TokenSale
};

let contractsCache = {};

class ContractManager {

    get(name) {
        if (contractsCache[name] === undefined) {
            let address = config.contracts[name];
            if (address === undefined) {
                throw 'unknown contract ' + name;
            }

            let Contract         = this.getContract(name);
            contractsCache[name] = Contract.at(address);
        }

        return contractsCache[name];
    }

    getContract(name) {
        return window.web3.eth.contract(contracts[name]);
    }

}

export default new ContractManager();