import * as React from 'react';
import {Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {connect} from 'react-redux';
import * as actions from '../../actions/locale';
import CDNImage from '../util/CDNImage';

const languages = {
    'en': 'English',
    'zh-hans': '简体中文'
};

class LanguageSwitcher extends React.Component {

    constructor() {
        super();
    }

    renderLanguageOptions() {
        const currentLocale = this.props.currentLocale;
        return Object.keys(languages).map((key, i) => {
            if (key === currentLocale) {
                return null;
            }
            return (
                <DropdownItem key={i} onClick={() => this.props.switchLocale(key)}>
                    {languages[key]}
                </DropdownItem>
            )
        });
    }

    render() {
        return (
            <Nav className="language-switcher" navbar>
                <UncontrolledDropdown nav>
                    <DropdownToggle nav caret>
                        <span className="d-none d-sm-inline">{languages[this.props.currentLocale]}</span>
                        <CDNImage width={40} path={"/img/locale/flag/" + this.props.currentLocale + '.svg' }
                                  className="d-sm-none img-fluid"/>
                    </DropdownToggle>
                    <DropdownMenu right={true}>
                        {this.renderLanguageOptions()}
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentLocale: state.locale.code
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchLocale: (contract) => {
            dispatch(actions.switchLocale(contract))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);