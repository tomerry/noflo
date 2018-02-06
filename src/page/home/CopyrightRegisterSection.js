import * as React from 'react';
import Section from '../../component/Section';
import {Row} from 'reactstrap';
import {FormattedHTMLMessage} from 'react-intl';
import CDNImage from '../../component/util/CDNImage';


class CopyrightRegisterSection extends React.Component {

    render() {
        return (
            <Section name="copyright-register" subtitle>
                <Row>
                    <div className="col-md-6">
                        <CDNImage width={530} path="new-customers.png" localized />
                    </div>
                    <div className="col-md-6">
                        <FormattedHTMLMessage id="section.copyright-register.d1"/>
                    </div>
                </Row>
            </Section>
        );
    }

}


export default CopyrightRegisterSection;