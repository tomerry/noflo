import * as React from 'react';
import Section from '../../component/Section';
import {Button, Row} from 'reactstrap';
import Progress from '../../component/ico/Progress';
import Countdown from '../../component/countdown/Countdown';
import Web3Provider from '../../component/Web3Provider';
import {FormattedMessage, injectIntl} from 'react-intl';
import {connect} from 'react-redux';

import * as actions from './../../actions/modal';
import CDNImage from '../../component/util/CDNImage';


import bonus from '../../services/bonus';
import config from '../../config';


class HeroSection extends React.Component {

    renderBonus() {
        const bonusStage = bonus.getStage();

        if (!bonusStage) {
            return null;
        }

        return (
            <div className="bonus-section">
                <div className="bonus-banner ">
                    <Row>
                        <div className="col-4 col-md-3">
                            <CDNImage width={250} path={bonusStage.img}/>
                        </div>
                        <div className="col-8 col-md-9">
                            <div className="bonus-countdown">
                                <h3 className="mb-3">Limited time only</h3>
                                <Countdown endTime={bonusStage.endTime}/>
                            </div>
                        </div>
                    </Row>
                </div>
                {/*<div className="boxed">*/}
                {/*{bonusStage.text}<br/>*/}
                {/*Bonus tokens will be distributed mid February.*/}
                {/*</div>*/}
            </div>
        )
    }

    render() {

        return (
            <Section name="hero" hideHeader noTextJustify>
                {/*<a className="copytrack-business-badge d-lg-block" href="https://www.copytrack.com" target="_blank">
                 VISIT OUR<br/>
                 BUSINESS<br/>
                 WEBSITE
                 </a>*/}
                <Row>
                    <div className="col-md-6">
                        <header className="mt-5">
                            <h1 className="text-left"><FormattedMessage id="section.hero.title"/></h1>
                            <h2 className="text-left mt-3"><FormattedMessage id="section.hero.subtitle"/></h2>
                        </header>

                        <div className="">
                            <Button color="secondary" className="mt-3" block onClick={this.props.openBuyTokenModal}>
                                <FormattedMessage id='section.hero.button'/>
                            </Button>

                            <a href="/pdf/Copytrack_ICO_Whitepaper.pdf" target="_blank" className="btn btn-primary btn-block mt-3">
                                <FormattedMessage id='section.hero.businessWhitepaper'/>
                            </a>
                            <a href="/pdf/Copytrack_ICO_Technical_Whitepaper.pdf" target="_blank"
                               className="btn btn-primary btn-block mt-3">
                                <FormattedMessage id='section.hero.technicalWhitepaper'/>
                            </a>

                            {/*<div className="col-md-6 col-lg-3 mt-3">*/}
                            {/*<a href="https://t.me/copytrackhq" target="_blank" className="btn btn-primary btn-block">*/}
                            {/*JOIN TELEGRAM GROUP*/}
                            {/*</a>*/}
                            {/*</div>*/}
                            <a className="btn btn-primary btn-block mt-3" href="https://www.copytrack.com" target="_blank">
                                BUSINESS WEBSITE
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {this.renderBonus()}

                        <div className="main-countdown boxed mb-3">
                            <h3 className="mb-3"><FormattedMessage id='section.countdown.title'/></h3>
                            <Countdown endTime={config.publicSaleEndDate}/>
                        </div>

                        <div className="exchanges text-center boxed">
                            <Row>
                                <div className="col-8 offset-2 mt-3">
                                    <CDNImage path="/img/logo/hitbtc.png" height={75}/>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <CDNImage path="/img/logo/tdax.png" height={75}/>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <CDNImage path="/img/logo/binance-application.png" height={75}/>
                                </div>
                            </Row>
                        </div>

                    </div>

                    <div className="col-md-12 mt-3">
                        <Web3Provider>
                            <Progress/>
                        </Web3Provider>
                    </div>
                </Row>


            </Section>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        openBuyTokenModal: () => {
            dispatch(actions.openModal('buyTokens'))
        },
    };
};


export default injectIntl(connect(null, mapDispatchToProps)(HeroSection));



// WEBPACK FOOTER //
// ./src/page/home/HeroSection.js