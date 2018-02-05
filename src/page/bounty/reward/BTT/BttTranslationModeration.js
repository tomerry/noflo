import * as React from 'react';
import {Alert} from 'reactstrap';
import CurrencyConverter from '../../../../component/CurrencyConverter';


class BttTranslationModeration extends React.Component {


    render() {
        return (
            <div>
                <h4>BCT TRANSLATION AND THREAD MODERATION (15%)</h4>
                <h6>150 000 CPY = 202.70 ETH = <CurrencyConverter amount={202.7}/></h6>

                <ol className="mt-3">
                    <li><a href="https://bounty.copytrack.io" target="_blank">Register in our bounty portal</a></li>
                    <li>Apply for the bitcointalk translation and moderation campaign </li>
                    <li>Follow the guide to register you work</li>
                </ol>

                <div className="reward mt-5">
                    <h6>Rewards:</h6>
                    <ul>
                        <li>
                            20 stakes for a translation of our <a href="https://bitcointalk.org/index.php?topic=2618918.0" target="_bank">Announcement</a><br />
                            + 20 stakes if you create a new topic for your translation<br />
                            + 5 stakes per page in your thread.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}


export default BttTranslationModeration;



// WEBPACK FOOTER //
// ./src/page/bounty/reward/BTT/BttTranslationModeration.js