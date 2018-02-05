import * as React from 'react';
import Section from '../../component/Section';
import {Row} from 'reactstrap';


class GetInTouch extends React.Component {


    render() {
        return (
            <Section name="contact">
                <Row>
                    <div className="col-md-12 mt-5 get-in-touch">
                        <div className="social-media">

                            <a href="https://t.me/copytrackhq" target="_blank">
                                <i className="fa fa-paper-plane" />
                            </a>
                            <a href="https://steemit.com/@copytrackhq" target="_blank">
                                <img className="img-fluid"  src="/img/media-logo/eD1VHQH1_bigger.png" />
                            </a>
                            <a href="https://www.facebook.com/copytrack/" target="_blank">
                                <i className="fa fa-facebook" />
                            </a>
                            <a href="https://www.linkedin.com/company/10840600/" target="_blank">
                                <i className="fa fa-linkedin" />
                            </a>
                            <a href="https://www.instagram.com/copytrack/" target="_blank">
                                <i className="fa fa-instagram" />
                            </a>
                            <a href="https://twitter.com/copytrackhq/" target="_blank">
                                <i className="fa fa-twitter" />
                            </a>
                            <a href="mailto:tokensale@copytrack.com">
                                <i className="fa fa-envelope" />
                            </a>
                        </div>
                    </div>
                </Row>
            </Section>
        );
    }

}


export default GetInTouch;



// WEBPACK FOOTER //
// ./src/page/home/GetInTouch.js