import * as React from 'react';
import {Alert} from 'reactstrap';
import CurrencyConverter from '../../../component/CurrencyConverter';


class Telegram extends React.Component {


    render() {
        return (
            <div>
                <h4>TELEGRAM CAMPAIGN (5%)</h4>
                <h6>50 000 CPY = 67.57 ETH = <CurrencyConverter amount={67.57}/></h6>
                <ol  className="mt-3">
                    <li><a href="https://bounty.copytrack.io" target="_blank">Register in our bounty portal</a></li>
                    <li>Apply for the telegram campaign</li>
                </ol>


                <p>
                    Join our Telegram today and be a part of our project and earn CPY tokens as reward.
                    Each day you are staying in our Telegram Group will earn you 1 bounty-stake.</p>

                <div className="reward mt-5">
                    <h6>Staying in the Telegram Group will earn you:</h6>
                    <strong>1 stake for each day between the  January 4, 2018 and February 10, 2018</strong>
                </div>

                <p className="mt-3">
                    If you are already a moderator of a native language group, please redeem your stakes as part of the
                    "Translations Campaign" for setting up the local telegram group.
                </p>

            </div>
        );
    }

}


export default Telegram;



// WEBPACK FOOTER //
// ./src/page/bounty/reward/Telegram.js