import * as React from 'react';
import Section from '../../component/Section';
import {Row} from 'reactstrap';
import {FormattedHTMLMessage} from 'react-intl';

class ChallengesSection extends React.Component {


    render() {
        return (
            <Section name="challenges" subtitle>
                <Row>
                    <div className="col-md-6">
                        <FormattedHTMLMessage id="section.challenges.d1"/>
                    </div>
                    <div className="col-md-6">
                        <FormattedHTMLMessage id="section.challenges.d2"/>
                    </div>
                </Row>
            </Section>
        );
    }

}

export default ChallengesSection;