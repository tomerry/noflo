import * as React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler
} from 'reactstrap';
import NavMain from './NavMain';
import LanguageSwitcher from './LanguageSwitcher';

class HeaderFixed extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state  = {
            isOpen:  false,
            visible: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        document.body.addEventListener('touchmove', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
        document.body.removeEventListener('touchmove', this.handleScroll.bind(this));
    }

    handleScroll() {
        let scrollTop = window.scrollY,
            visible   = scrollTop > 100;

        if (this.state.visible != visible) {
            this.setState({
                visible: visible
            });
        }
    }

    render() {
        let visibleClass = this.state.visible ? 'visible' : '';

        return (
            <header className='top-nav header-fixed'>
                <Navbar color="faded" light expand="md" fixed="top" className={visibleClass}>
                    <div className='container'>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <NavMain/>
                        </Collapse>
                        <LanguageSwitcher/>
                    </div>
                </Navbar>
            </header>
        );
    }

}

export default HeaderFixed;