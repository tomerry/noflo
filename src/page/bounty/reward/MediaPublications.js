import * as React from 'react';
import CurrencyConverter from '../../../component/CurrencyConverter';


class MediaPublications extends React.Component {
    render() {
        return (
            <div>

                <h4>MEDIA PUBLICATION (15%)</h4>
                <h6>150 000 CPY = 202.70 ETH = <CurrencyConverter amount={202.7}/></h6>
                <p className="mt-3">
                    If you are a private user, please refer to Blog Article Campaign. This option is for big media and trendsetters.
                </p>
                <p>
                    You can help us create an article or video blog on a popular media website or outlet?
                    If you for example can write an article about the COPYTRACK ICO in Forbes, Coindesk, Bitcoinist
                    or in any other finances and cryptocurrency relevant media.
                </p>


                <p className="mt-5">
                    <strong>Send your article through <a href="https://copytrack.typeform.com/to/OvfJyz" target="_blank">this form</a></strong>
                </p>
                {/*
                 <ol>
                 <li><strong>Send your article through <a href="https://copytrack.typeform.com/to/OvfJyz" target="_blank">this form</a></strong></li>
                 <li>Check your rewards here: <a
                 href="https://docs.google.com/spreadsheets/d/1gAZpknPeRVEw0Rcc1Rm7gxXZ-bmQ0iSJ2oF2azG2iQI/edit?usp=sharing"
                 target="_blank">media publications spreadsheet</a></li>
                 </ol>
                 */}
                <div className="reward mt-5">
                    <h6>Rewards:</h6>
                    <p>We will class each article depending on the media outlet and its reach and give away stakes accordingly</p>
                </div>
            </div>
        );
    }

}


export default MediaPublications;



// WEBPACK FOOTER //
// ./src/page/bounty/reward/MediaPublications.js