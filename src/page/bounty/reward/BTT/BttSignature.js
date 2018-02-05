import * as React from 'react';
import {Alert} from 'reactstrap';
import CurrencyConverter from '../../../../component/CurrencyConverter';

class BttSignature extends React.Component {


    render() {
        return (
            <div>
                <h4>BITCOINTALK SIGNATURE CAMPAIGN (25%)</h4>
                <h6>250 000 CPY = 337.84 ETH = <CurrencyConverter amount={337.84}/></h6>

                <p className="mt-3">
                    We are happy to invite you to COPYTRACK Bitcointalk signature campaign.
                    Simple upload the signature and avatar provided by us, and write at least 15 constructive posts a week.
                    The total amount of CPY tokens distributed for this category is 250 000 CPY.
                </p>

                <ol className="mt-3">
                    <li><a href="https://bounty.copytrack.io" target="_blank">Register in our bounty portal</a></li>
                    <li>Apply for the bitcointalk signature campaign </li>
                    <li>Follow the guide how to set up your signature</li>
                </ol>


                <div className="reward mt-5">
                    <h6>Each post will earn you the following stakes:</h6>
                    Every post will earn you at least 5 stakes. <br /> <br />

                    <p>
                        Bonus per post:<br />
                        <small><strong>Avatar on: +1 Stakes</strong></small>
                    </p>
                    <table className="btc-stake-table table table-responsive table-sm">
                        <tbody>
                        <tr>
                            <td>Member</td>
                            <td>+0</td>
                        </tr>
                        <tr>
                            <td>Full Member</td>
                            <td>+1</td>
                        </tr>
                        <tr>
                            <td>Sr. Member</td>
                            <td>+2</td>
                        </tr>
                        <tr>
                            <td>Hero Member</td>
                            <td>+4</td>
                        </tr>
                        <tr>
                            <td>Legendary</td>
                            <td>+8</td>
                        </tr>
                        </tbody>
                    </table>

                    <p>
                        If you post in our <a target="_blank" href="https://bitcointalk.org/index.php?topic=2618918.0">COPYTRACK ANN</a> topic you will earn twice as many stakes than posting in any other topic
                    </p>
                </div>

                <h6 className="mt-5">Conditions to earn stakes in this category:</h6>
                <ul>
                    <li>As you apply, we define your rank, and it will not be changed</li>
                    <li>To get signature rewards, you need at least 50 posts written</li>
                    <li>We will ban and will not send CPY coins to spammers and multi accounts</li>
                    <li>We don’t reward avatars, only as an addition to signatures</li>
                    <li>Receiving negative trust or ban during your participation in our campaign will result in you being disqualified from our campaign receiving nothing</li>
                    <li>If we feel there's a lot of spam posts you're making you will be removed from the campaign and receive no payment</li>
                    <li>Do not change signature during campaign</li>
                </ul>

                <Alert color="info">
                    Discussion Boards we do not count:<br/>
                    Games and round, Micro earnings, Politics and Society, Off-topic, Archival, Posts in "tipster" threads, Auctions, Lending, Beginners and help, Press, Investor based games
                </Alert>
            </div>
        );
    }

}


export default BttSignature;



// WEBPACK FOOTER //
// ./src/page/bounty/reward/BTT/BttSignature.js