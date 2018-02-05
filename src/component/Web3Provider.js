import * as React from 'react';

import web3Service from './../services/web3';

class Web3Provider extends React.Component {

    constructor() {
        super();
        this.state = {
            loaded: false
        }
    }

    setLoaded() {
        const format = {
            decimalSeparator: '.',
            groupSeparator: ' ',
            groupSize:      3,
            secondaryGroupSize: 0,
            fractionGroupSeparator: ' ',
            fractionGroupSize: 0
        };

        window.web3.BigNumber.config({FORMAT: format});


        this.setState({loaded: window.Web3 !== undefined})
    }

    render() {
        if (this.state.loaded === true) {
            return (
                <div>
                    {this.props.children}
                </div>
            )
        }
        web3Service.getWeb3()
            .then(() => {
                this.setLoaded();
            });

        if (this.props.noLoader) {
            return null
        }
        return (<div className="loader"><i className="fa fa-spin fa-spinner" aria-hidden="true"/></div>);
    }
}

export default Web3Provider;