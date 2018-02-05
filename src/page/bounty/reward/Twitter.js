import * as React from 'react';
import {Alert} from 'reactstrap';
import CurrencyConverter from '../../../component/CurrencyConverter';


class Twitter extends React.Component {


    render() {
        return (
            <div>
                <h4>TWITTER FOLLOW & RETWEETS (15%)</h4>
                <div>
                    <h6>150 000 CPY = 202.70 ETH = <CurrencyConverter amount={202.7}/></h6>
                </div>
                <ol  className="mt-3">
                    <li><a href="https://twitter.com/copytrackhq" target="_blank">Follow the Official COPYTRACK Twitter
                        (https://twitter.com/copytrackhq)</a></li>
                    <li><a href="https://bounty.copytrack.io" target="_blank">Register in our bounty portal</a></li>
                    <li>Apply for the twitter campaign</li>
                </ol>

                <p>
                    You retweet news marked with <strong>#copytrackico</strong> from our official account no later than 5 days after publication.
                    Do not delete the retweet until our ICO ends on February 10th.

                </p>
                <div className="reward mt-5">
                    <h6>Each retweet will earn you:</h6>
                    <strong>1 stake for each follower you have. For example, if you have 100 follower each retweet will be rewarded with 100 stakes</strong>
                </div>

                <h6 className="mt-5">Conditions to earn stakes in this category:</h6>
                <ul>
                    <li>Your Twitter account must be at least 4 months old.</li>
                    <li>Your number of followers is fixed from the moment you connect your account to the
                        COPYTRACK ICO bounty program and does not change during the campaign.</li>
                </ul>

                <Alert color="info">
                    NOTE: We ONLY count the posts that are tagged with <strong>#copytrackico</strong> by our team.
                    If you are adding our hashtag to any of your other tweets, it will not be rewarded with bounty-stakes.
                </Alert>

            </div>
        );
    }

}


export default Twitter;



// WEBPACK FOOTER //
// ./src/page/bounty/reward/Twitter.js