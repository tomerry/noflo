import * as React from 'react';
import {Nav, NavItem, NavLink, Row, TabContent, Table, TabPane} from 'reactstrap';
import classnames from 'classnames';
import BttSignature from './BttSignature';
import BttTranslationModeration from './BttTranslationModeration';

class BTT extends React.Component {

    constructor(props) {
        super(props);

        this.toggleSubTab = this.toggleSubTab.bind(this);
        this.state = {
            activeSubTab: 'btt-signature',
        };
    }

    toggleSubTab(subtab) {
        if (this.state.activeSubTab !== subtab) {
            this.setState({
                activeSubTab: subtab
            })
        }
    }

    render() {
        return (
            <div>

                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeSubTab === 'btt-signature'})}
                                 onClick={() => {
                                     this.toggleSubTab('btt-signature');
                                 }}>
                            BCT Signature
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeSubTab === 'btt-translation-moderation'})}
                                 onClick={() => {
                                     this.toggleSubTab('btt-translation-moderation');
                                 }}>
                            BCT Translation and Moderation
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeSubTab}>
                    <TabPane tabId='btt-signature'>
                        <BttSignature />
                    </TabPane>

                    <TabPane tabId="btt-translation-moderation">
                        <BttTranslationModeration />
                    </TabPane>

                </TabContent>
            </div>
        )
            ;
    }
}

export default BTT;



// WEBPACK FOOTER //
// ./src/page/bounty/reward/BTT/BttNav.js