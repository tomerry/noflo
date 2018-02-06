import * as React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import {FormattedMessage} from 'react-intl';

class NavMain extends React.Component {
    render() {
        return (
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/#section-challenges"><FormattedMessage id="header.project"/></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/#section-token"><FormattedMessage id="header.token"/></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/#section-team"><FormattedMessage id="header.team"/></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/#section-roadmap"><FormattedMessage id="header.roadmap"/></NavLink>
                </NavItem>
                {/*<NavItem>*/}
                    {/*<NavLink href="/bounty"><FormattedMessage id="header.bounty"/></NavLink>*/}
                {/*</NavItem>*/}
                <NavItem>
                    <NavLink href="/#section-faq"><FormattedMessage id="header.help"/></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/#section-contact"><FormattedMessage id="header.contact"/></NavLink>
                </NavItem>
            </Nav>
        );
    }
}

export default NavMain;
