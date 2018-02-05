const config = require('./../config');

class Web3Service {
    constructor() {
        this.loaded = window.web3 === undefined;

        this.store = null;
        this.currentAccount = null;
        this.accountPollInverval = null;
        this.httpFallbackProvider = null;

    }

    setup(store, httpFallbackProvider = config.infuraUrl) {
        this.store = store;
        this.httpFallbackProvider = httpFallbackProvider;
        this.listeners = [];
    }

    initAccountCheck() {
        this.getWeb3()
            .then((web3) => {
                if (web3.currentProvider && web3.currentProvider._fallback === true) {
                    console.log('fallback web3 provider dont poll for accounts')
                } else {
                    this.startAccountPoll();
                }
            })
    }

    startAccountPoll() {
        this.getWeb3()
            .then(() => {
                if (this.accountPollInverval) {
                    return;
                }
                //@TODO check if we can monkeypatch here
                this.fetchAccounts();
                this.accountPollInverval = setInterval(this.fetchAccounts.bind(this), 1000);
            });
    }

    fetchAccounts() {
        const {web3} = window;
        const ethAccounts = this.getAccounts();

        if (ethAccounts.length === 0) {
            web3 && web3.eth && web3.eth.getAccounts((err, accounts) => {
                if (err) {
                    console.log(err);
                } else {
                    this.handleAccounts(accounts);
                }
            });
        } else {
            this.handleAccounts(ethAccounts);
        }
    }

    getAccounts() {
        try {
            const {web3} = window;
            // throws if no account selected
            return web3.eth.accounts;
        } catch (e) {
            return [];
        }
    }


    handleAccounts(accounts) {
        let nextAccount = accounts[0];
        let currentAccount = this.currentAccount;

        if (currentAccount === null && nextAccount) {
            this.currentAccount = nextAccount;
            this.store.dispatch({
                type: 'web3.receive_account',
                address: nextAccount
            });
        } else if (currentAccount !== nextAccount) {
            this.currentAccount = nextAccount;
            this.store.dispatch({
                type: 'web3.change_account',
                address: nextAccount ? nextAccount : null
            })
        }

    }

    loadScript() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');

            script.src = '/vendor/web3.min.js';
            script.async = true;
            script.onload = function () {
                let provider = new Web3.providers.HttpProvider(this.httpFallbackProvider);
                provider._fallback = true;
                window.web3 = new Web3(provider);
                resolve();
            }.bind(this);

            document.body.appendChild(script);
        });
    }


    getWeb3() {
        if (this.store == null) {
            throw 'need to call setup before'
        }
        return new Promise((resolve, reject) => {
            if (window.web3) {
                return resolve(window.web3);
            }

            this.listeners.push(resolve);
            if (this.loading) {
                return;
            }
            this.loading = true;
            this.loadScript()
                .then(() => {
                    if (window.web3) {
                        resolve(window.web3);
                        this.listeners.forEach((cb) => cb());
                    } else {
                        throw 'Could not load web3';
                    }
                })
                .catch(reject)
        });
    };
}

const web3Service = new Web3Service();

export default web3Service;