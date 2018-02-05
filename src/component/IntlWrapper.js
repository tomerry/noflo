import * as React from 'react';
import {IntlProvider} from 'react-intl';
import {connect} from 'react-redux';

class IntlWrapper extends React.Component {
    render() {
        return (
            <IntlProvider locale={this.props.code} messages={this.props.translations}>
                {this.props.children}
            </IntlProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return state.locale;
};

export default connect(mapStateToProps)(IntlWrapper);