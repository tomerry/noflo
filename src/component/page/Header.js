import * as React from 'react';
import {Collapse, Navbar, NavbarBrand, NavbarToggler,} from 'reactstrap';
import NavMain from './NavMain';
import LanguageSwitcher from './LanguageSwitcher';
import CDNImage from '../util/CDNImage';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            visible: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <header className="top-nav header">
                <Navbar color="faded" light expand="lg">
                    <div className="container">
                        <NavbarToggler onClick={this.toggle}/>
                        <NavbarBrand href="/">
                            <CDNImage path="/img/logo.png" width={228} className="logo" alt="logo"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <NavMain/>
                        </Collapse>
                        {/*<LanguageSwitcher />*/}
                    </div>
                </Navbar>
            </header>
        );
    }

}

export default Header;