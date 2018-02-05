import * as React from 'react';
import {Button, Col, Row} from 'reactstrap';
import {connect} from 'react-redux';
import * as actions from '../actions/modal';
import {FormattedMessage, injectIntl} from 'react-intl';

import config from './../config'

class BuyTokenBanner extends React.Component {

    endDateMessage() {
        if (config.publicSaleStartDate < (Date.now() / 1000)) {
            return (<span>Sale Ends February 09, 2018 23:59 UTC</span>);
        } else {
            return (<FormattedMessage id="section.presale.sale"/>);
        }
    }

    render() {
        return (
            <div className="presale-banner">
                {/* <h3><FormattedMessage id="section.presale.title"/></h3>*/}
                <Row>
                    <div className="col-md-4 offset-md-4">
                        <Button color="secondary" size="lg" block onClick={this.props.openBuyTokenModal}>
                            <FormattedMessage id="section.presale.button"/>
                        </Button>
                    </div>
                </Row>
                <div className="mt-5">
                    {this.endDateMessage()}
                </div>
            </div>
        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        openBuyTokenModal: () => {
            dispatch(actions.openModal('buyTokens'))
        },
    };
};


export default injectIntl(connect(null, mapDispatchToProps)(BuyTokenBanner));



// WEBPACK FOOTER //
// ./src/component/BuyTokenBanner.js