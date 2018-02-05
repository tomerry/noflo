import * as React from 'react';
import Section from '../../component/Section';
import {Row} from 'reactstrap';
import {FormattedHTMLMessage} from 'react-intl';
import CDNImage from '../../component/util/CDNImage';


class BusinessModelSection extends React.Component {


    render() {
        return (
            <Section name="business-model" subtitle>
                <Row>
                    <div className="col-md-6">
                        <FormattedHTMLMessage id="section.business-model.d1"/>
                    </div>
                    <div className="col-md-6">
                        <FormattedHTMLMessage id="section.business-model.d2"/>
                    </div>
                </Row>

                <CDNImage className="mt-5" width={1100} path="businessmodell.png" localized />
            </Section>
        );
    }

}


export default BusinessModelSection;



// WEBPACK FOOTER //
// ./src/page/home/BusinessModelSection.js