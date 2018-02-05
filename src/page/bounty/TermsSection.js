import * as React from 'react';
import Section from '../../component/Section';
import {Row} from 'reactstrap';
import {FormattedHTMLMessage} from 'react-intl';

class TermsSection extends React.Component {


    render() {
        return (
            <Section name="terms" hideHeader>
                <header>
                    <h2>Campaign Terms</h2>
                </header>

                <p>
                    We believe in a decentralized economy and cryptocurrency community. We are now starting a bounty campaign so
                    participants can help introduce COPYTRACK to the community, and get free tokens as a bounty reward. In the
                    COPYTRACK ICO there will be 100 000 000 CPY tokens issued in total. As a bounty reward, we will distribute 1
                    000 000 CPY tokens, which equals to 1% of all CPY tokens issued in the ICO.
                </p>
                <p>
                    You can participate in our bounty program by signing up with your e-mail and wallet address.
                    As soon as you are registered you can start earning bounty-steaks.
                    Your earned bounty reward CPY tokens will be send to your registered wallet at the end of the ICO.
                </p>

            </Section>
        );
    }

}


export default TermsSection;



// WEBPACK FOOTER //
// ./src/page/bounty/TermsSection.js