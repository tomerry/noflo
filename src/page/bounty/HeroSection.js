import * as React from 'react';
import Section from '../../component/Section';
import {FormattedMessage, injectIntl} from 'react-intl';
import {Row, Button} from 'reactstrap';


class HeroSection extends React.Component {

    render() {
        return (
            <Section name="hero" hideHeader noTextJustify className="bounty-hero">
                <header>
                    <h1><FormattedMessage id="section.hero.title"/></h1>
                    <h2>
                        Bounty Program<br />
                        <small>Help us tackle the Challenges of Digital Content Management</small>
                    </h2>
                </header>


                <Row className="mt-5">
                    <div className="col-md-5 offset-md-1 col-lg-4 offset-lg-2">
                        <a href="#section-terms" className="btn btn-primary btn-block">
                            Terms
                        </a>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <a href="#section-rewards" className="btn btn-primary btn-block">
                            Rewards
                        </a>
                    </div>
                </Row>

                <Row>
                    <div className="col-md-4 offset-md-4">
                        <a  href="#section-terms">
                            <div  className="btn-triangle"></div>
                        </a>
                    </div>
                </Row>

            </Section>
        );
    }

}



export default HeroSection;



// WEBPACK FOOTER //
// ./src/page/bounty/HeroSection.js