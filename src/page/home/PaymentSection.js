import * as React from 'react';
import Section from '../../component/Section';
import {Row} from 'reactstrap';
import {FormattedHTMLMessage} from 'react-intl';
import CDNImage from '../../component/util/CDNImage';


class PaymentSection extends React.Component {


    render() {
        return (
            <Section name="token">
                <Row>
                    <div className="col-md-6">
                        <CDNImage width={530} path="payment-and-licensing.png" localized />
                    </div>
                    <div className="col-md-6">
                        <FormattedHTMLMessage id="section.token.d1"/>
                    </div>
                </Row>
            </Section>
        );
    }

}


export default PaymentSection;



// WEBPACK FOOTER //
// ./src/page/home/PaymentSection.js