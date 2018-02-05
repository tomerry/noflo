import * as React from 'react';
import {Alert} from 'reactstrap';
import CurrencyConverter from '../../../component/CurrencyConverter';


class Facebook extends React.Component {


    render() {
        return (
            <div>

                <h4>FACEBOOK FOLLOW & SHARES (15%)</h4>
                <h6>150 000 CPY = 202.70 ETH = <CurrencyConverter amount={202.7}/></h6>

                <ol className="mt-3">
                    <li>
                        Like at least one of our official Facebook pages:
                        <ul>
                            <li><a href="https://www.facebook.com/COPYTRACK/" target="_blank"> German</a></li>
                            <li><a href="https://www.facebook.com/COPYTRACKcom/" target="_blank">English</a></li>
                            <li><a href="https://www.facebook.com/COPYTRACKjp" target="_blank">Japanese</a></li>
                        </ul>
                    </li>

                    <li><a href="https://bounty.copytrack.io" target="_blank">Register in our bounty portal</a></li>
                    <li>Apply for the facebook campaign</li>
                </ol>

                <p>
                    You share posts marked with <strong>#copytrackico</strong> from our official account no later than 5 days
                    after publication (do not delete until the ICO ends on February 10).
                </p>

                <div className="reward mt-5">
                    <h6>Each share will earn you:</h6>
                    <strong>1 stake for each of your Facebook friends. For example,
                        if you have 100 friends each post share will be rewarded with 100 stakes.</strong>
                </div>


                <div className="mt-5">
                    <h6>Conditions to earn stakes in this category:</h6>
                    <ul>
                        <li>
                            The account must be at least 4 months old. The number of friends is fixed from the moment you apply
                            to the campaign and does not change during the campaign.
                        </li>
                    </ul>
                </div>
                <Alert color="info">
                    NOTE: All post shares must be public and we ONLY count the posts that were tagged
                    with <strong>#copytrackico</strong> by our team.
                    If you are adding our hashtag to any of your other posts, it will not be rewarded with bounty-stakes.
                </Alert>

            </div>
        );
    }

}


export default Facebook;



// WEBPACK FOOTER //
// ./src/page/bounty/reward/Facebook.js