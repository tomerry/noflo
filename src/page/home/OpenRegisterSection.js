import * as React from 'react';
import Section from '../../component/Section';
import {Row} from 'reactstrap';
import {FormattedHTMLMessage} from 'react-intl';
import CDNImage from '../../component/util/CDNImage';


class OpenRegisterSection extends React.Component {


    render() {
        return (
            <Section name="registration" subtitle>
                <Row>
                    <div className="col-md-6">
                        <FormattedHTMLMessage id="section.registration.d1"/>
                    </div>
                    <div className="col-md-6">
                        <FormattedHTMLMessage id="section.registration.d2"/>
                    </div>
                </Row>

                <CDNImage className="mt-5" width={1100} path="short-process.png" localized />
            </Section>
        );
    }

}


export default OpenRegisterSection;



// WEBPACK FOOTER //
// ./src/page/home/OpenRegisterSection.js