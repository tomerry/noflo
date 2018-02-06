import * as React from 'react';
import {Row} from 'reactstrap';

import Section from '../../component/Section';


class Faq extends React.Component {

    render() {
        return (
            <Section name="faq" hideHeader>
                <header>
                    <h2>FAQ</h2>
                </header>

                <Row className="mt-4">
                    <div className="col-md-6">
                        <a href="https://intercom.help/copytrack-ico/cpy-token-sale/how-can-i-buy-cpy-tokens" target="_blank">
                            How can I buy CPY Tokens?
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a
                            href="https://intercom.help/copytrack-ico/cpy-token-sale/can-i-send-eth-from-an-exchange-what-kind-of-wallet-do-i-need-to-participate"
                            target="_blank">
                            What kind of wallet do I need to participate?
                        </a>
                    </div>
                </Row>
                <Row className="mt-4">
                    <div className="col-md-6">
                        <a href="https://intercom.help/copytrack-ico/cpy-token-sale/how-can-i-check-my-cpy-token-balance"
                           target="_blank">
                            How can I check my CPY token balance?
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a
                            href="https://intercom.help/copytrack-ico/cpy-token-sale/when-will-the-cpy-token-sale-start-when-will-it-end"
                            target="_blank">
                            When will the CPY Token Sale start when will it end?
                        </a>
                    </div>
                </Row>
                <Row className="mt-4">
                    <div className="col-md-6">
                        <a href="https://intercom.help/copytrack-ico/cpy-token-sale/what-is-the-hard-cap-for-the-cpy-token-sale"
                           target="_blank">
                            What is the hard cap for the CPY token sale?
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a href="https://intercom.help/copytrack-ico/cpy-token-sale/when-will-i-receive-my-cpy-tokens"
                           target="_blank">
                            When will I receive my CPY Tokens?
                        </a>
                    </div>
                </Row>
                <Row className="mt-4">
                    <div className="col-md-6">
                        <a
                            href="https://intercom.help/copytrack-ico/cpy-token-sale/what-are-the-minimum-and-maximum-amounts-of-eth-to-participate-in-the-cpy-token-sale"
                            target="_blank">
                            What are the minimum and maximum amounts of ETH to participate in the CPY Token Sale?
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a href="https://intercom.help/copytrack-ico/cpy-token-sale/how-many-cpy-tokens-were-created"
                           target="_blank">
                            How​​ many ​​CPY tokens​​ were created?
                        </a>
                    </div>
                    <div className="col-md-4 offset-md-4 mt-5">
                        <a href="https://intercom.help/copytrack-ico/cpy-token-sale"
                           target="_blank" className="btn btn-block btn-lg btn-secondary">
                            Read more FAQ here!
                        </a>
                    </div>


                </Row>
            </Section>
        )
    }
}

export default Faq;