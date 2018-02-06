import * as React from 'react';
import Section from '../../component/Section';
import {Row} from 'reactstrap';
import {FormattedHTMLMessage} from 'react-intl';
import CDNImage from '../../component/util/CDNImage';


class FutureSection extends React.Component {

    render() {
        return (
            <Section name="future">
                <Row>
                    <div className="col-md-6">
                        <FormattedHTMLMessage id="section.future.d1"/>
                    </div>
                    <div className="col-md-6">
                        <CDNImage width={530} path="process.png" localized />
                    </div>
                </Row>
            </Section>
        );
    }

}

export default FutureSection;