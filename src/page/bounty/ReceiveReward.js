import * as React from 'react';
import Section from '../../component/Section';

class ReceiveReward extends React.Component {


    render() {
        return (
            <Section name="receive-rewards" hideHeader>
                <header>
                    <h2>HOW AND WHEN YOU CAN RECEIVE YOUR BOUNTIES</h2>
                </header>

                <p>
                    We will distribute 1 000 000 CPY tokens based on the number of stakes earned in each campaign category.
                    The available CPY tokens for each category will be divided by the total numbers of
                    stakes collected in each category.
                </p>
                <p>For example, 150 000 CPY tokens are dedicated to the Twitter category.
                    These tokens will be divided by the total number of stakes earned by retweeting our ICO content.
                    If the total number of stakes collected in this category would be 30 000 000,
                    each stake would be worth 0,005 CPY tokens.
                    Each member participating in the Twitter bounty campaign will then receive
                    CPY tokens based on the number of stakes they have earned in this category.
                    The same process applies to the remaining campaign categories.</p>
                <p>
                    Once all of the stakes are counted and the CPY distribution has been calculated, you receive your CPY tokens
                    onto your wallet. These tokens will be distributed 7 days after the ICO ends.
                </p>
                <p>
                    To summarize:
                    <ul>
                        <li>How many stakes you earned is determined by the terms of each bounty campaign.</li>
                        <li>The stakes earned in each campaign will NOT be pooled together, but rather will be rewarded separately
                            in each campaign itself.
                        </li>
                        <li>The distribution of the free CPY tokens will be calculated at the end of the ICO on the 10th of February
                            2018.
                        </li>
                        <li>Your rewarded CPY tokens will be sent to your wallet 7 days after the ICO has finished</li>
                    </ul>
                </p>
                <p>
                    If you have any questions regarding the bounty campaign or need assistance, feel free to contact us at any
                    time using our chat program on our website. We will be glad to help you.
                </p>
            </Section>
        );
    }

}


export default ReceiveReward;



// WEBPACK FOOTER //
// ./src/page/bounty/ReceiveReward.js