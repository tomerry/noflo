import * as React from 'react';
// import './progress-bar.css'
import {Row} from 'reactstrap';
import contractManager from './../../services/web3/contract-manager';
import {connect} from 'react-redux';
import * as actions from './../../actions/web3/token-sale';
import bonus from '../../services/bonus';
import CountUp from '../util/CountUp';

const refreshInterval = 16000;
class Progress extends React.Component {
    constructor() {
        super();
        this.state = {
            percentage: null,
            tokensSold: null,
            tokensLeft: null,
            totalSupply: null
        };
        this.web3 = window.web3;
    }

    componentDidMount() {
        let saleContract = contractManager.get('TokenSale');

        this.props.getTokenSaleProgress(saleContract);
        setInterval(() => {
            this.props.getTokenSaleProgress(saleContract);
        }, refreshInterval);
    }

    render() {

        const {progress} = this.props;
        if (progress.tokensLeft === null) {
            return (<div className="loader"><i className="fa fa-spin fa-spinner" aria-hidden="true"/></div>);
        }


        return (
            <div className="tokensale-progress">
                <Row>
                    <div className="col-md-6">
                        <Row className="info-top">
                            <div className="col-6" style={{textAlign: 'left'}}>
                                <div>RAISED</div>
                                <div><strong>Ξ <CountUp ident='totalEthRaised' number={progress.totalEthRaised}
                                                        duration={refreshInterval - 1000} decimals={2}/></strong></div>
                            </div>
                            <div className="col-6" style={{textAlign: 'right'}}>
                                <div>NEXT MILESTONE</div>
                                <div><strong>Ξ {progress.stage.max.toFormat(0)}</strong></div>
                            </div>
                        </Row>
                        <div className="progress mt-3">
                            <div id="progress" className="progress-bar progress-bar-striped progress-bar-animated"
                                 role="progressbar"
                                 style={{width: progress.stage.percentageComplete.toFixed(2) + '%'}}
                                 aria-valuenow="0"
                                 aria-valuemin="0"
                                 aria-valuemax="100">
                                <strong>
                                    <CountUp ident='percentageComplete' number={progress.stage.percentageComplete}
                                             duration={refreshInterval - 1000} decimals={1}/>%
                                </strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Row className="info-top">
                            <div className="col-6" style={{textAlign: 'left'}}>
                                <div>CURRENT RATE</div>
                                <div><strong>{progress.tokensPerEther.toFormat(0)} CPY/ETH</strong></div>
                            </div>
                            <div className="col-6" style={{textAlign: 'right'}}>
                                <div>CURRENT BONUS</div>
                                <div><strong>+ {bonus.getBonusCpy()} CPY/ETH</strong></div>
                            </div>
                        </Row>

                        <Row className="info-bottom mt-3">
                            <div className="col-6" style={{textAlign: 'left'}}>
                                SOLD <br />
                                <strong><CountUp ident='tokensSold' number={progress.tokensSold}
                                                 duration={refreshInterval - 1000}/> CPY</strong>
                            </div>
                            <div className="col-6" style={{textAlign: 'right'}}>
                                PARTICIPANTS<br/>
                                <strong><CountUp ident='participantCount' number={progress.participantCount}
                                                 duration={refreshInterval - 1000}/></strong>
                            </div>
                        </Row>
                    </div>
                </Row>

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const tokenSaleProgress = state.web3.contract.tokenSaleProgress;
    return {
        progress: tokenSaleProgress
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTokenSaleProgress: (contract) => {
            dispatch(actions.getTokenSaleProgress(contract))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Progress);