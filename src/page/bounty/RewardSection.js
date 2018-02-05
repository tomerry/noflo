import * as React from 'react';
import Section from '../../component/Section';
import {Nav, NavItem, NavLink, Row, TabContent, Table, TabPane} from 'reactstrap';
import CDNImage from '../../component/util/CDNImage';
import classnames from 'classnames';
import Twitter from './reward/Twitter';
import Facebook from './reward/Facebook';
import Telegram from './reward/Telegram';
import BTT from './reward/BTT/BttNav';
import CurrencyConverter from '../../component/CurrencyConverter';



import Blog from './reward/Blog';
import MediaPublications from './reward/MediaPublications';

class RewardSection extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: 'twitter',
        };
    }


    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Section name="rewards" hideHeader>
                <header>
                    <h2>Rewards</h2>
                </header>


                <Row>
                    <div className="col-md-6">
                        <p>By completing bounty tasks, you will receive bounty-stakes which are divided into the following categories:
                            twitter, facebook, bitcointalk signature campaign, bitcointalk translation and moderation, writing blog
                            posts and posting articles in popular media. At the end of ICO we will distribute 1 000 000 CPY tokens
                            proportionally to your bounty stakes in each category.
                        </p>

                    </div>
                    <div className="col-md-6">

                        <Table bordered className="text-left">
                            <tbody>
                            <tr>
                                <td>Token name</td>
                                <td>CPY</td>
                            </tr>

                            <tr>
                                <td>Total bounty budget</td>
                                <td>
                                    1 000 000 CPY tokens = 1351.35 ETH <br />
                                    <small><CurrencyConverter amount={1351.35}/> (ICO price)</small>
                                </td>
                            </tr>

                            <tr>
                                <td>Exchange rate</td>
                                <td>740 CPY = 1 ETH (ICO price)</td>
                            </tr>

                            <tr>
                                <td>Sale Begin</td>
                                <td>December 10, 2017 00:00 UTC</td>
                            </tr>
                            <tr>
                                <td>Sale End</td>
                                <td>February 10, 2018 23:59 UTC</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </Row>


                <Row className="mt-5">
                    <div className="col-md-6">
                        <Table>
                            <thead>
                            <tr>
                                <th>CAMPAIGN</th>
                                <th>CPY Token</th>
                                <th>Percent</th>
                                <th>ETH</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Twitter Retweets</td>
                                <td>150 000</td>
                                <td>15</td>
                                <td>202.70</td>
                            </tr>
                            <tr>
                                <td>Facebook Shares</td>
                                <td>150 000</td>
                                <td>15</td>
                                <td>202.70</td>
                            </tr>
                            <tr>
                                <td>Telegram</td>
                                <td>50 000</td>
                                <td>5</td>
                                <td>67.57</td>
                            </tr>
                            <tr>
                                <td>BCT Signature</td>
                                <td>250 000</td>
                                <td>25</td>
                                <td>337.84</td>
                            </tr>
                            <tr>
                                <td>BCT Translation & Moderation</td>
                                <td>150 000</td>
                                <td>15</td>
                                <td>202.70</td>
                            </tr>
                            <tr>
                                <td>Blog Articles</td>
                                <td>100 000</td>
                                <td>10</td>
                                <td>135.14</td>
                            </tr>
                            <tr>
                                <td>Media Publications</td>
                                <td>150 000</td>
                                <td>15</td>
                                <td>202.70</td>
                            </tr>
                            </tbody>
                        </Table>

                    </div>

                    <div className="col-md-6">
                        <CDNImage path="/img/bounty/distribution-pie.png"/>
                    </div>
                </Row>

                <Nav tabs className="mt-5">
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === 'twitter'})}
                            onClick={() => {
                                this.toggle('twitter');
                            }}
                        >
                            Twitter
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === 'facebook'})}
                            onClick={() => {
                                this.toggle('facebook');
                            }}
                        >
                            Facebook
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === 'telegram'})}
                            onClick={() => {
                                this.toggle('telegram');
                            }}
                        >
                            Telegram
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === 'btt'})}
                            onClick={() => {
                                this.toggle('btt');
                            }}
                        >
                            BCT
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === 'blog'})}
                            onClick={() => {
                                this.toggle('blog');
                            }}
                        >
                            Blog Articles
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === 'media-publications'})}
                            onClick={() => {
                                this.toggle('media-publications');
                            }}
                        >
                            Media Publications
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="twitter">
                        <Twitter />
                    </TabPane>
                    <TabPane tabId="facebook">
                        <Facebook />
                    </TabPane>
                    <TabPane tabId="telegram">
                        <Telegram />
                    </TabPane>
                    <TabPane tabId="btt">
                        <BTT />
                    </TabPane>

                    <TabPane tabId="blog">
                        <Blog />
                    </TabPane>
                    <TabPane tabId="media-publications">
                        <MediaPublications />
                    </TabPane>
                </TabContent>
            </Section>
        );
    }
}

export default RewardSection;



// WEBPACK FOOTER //
// ./src/page/bounty/RewardSection.js