import * as React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import CDNImage from './util/CDNImage';

class SocialBanner extends React.Component {
    render() {
        return (
            <div className="social-banner">
                <h3><FormattedMessage id="section.contact.title"/></h3>
                <div className="social-media">
                    <a href="https://t.me/copytrackhq" target="_blank">
                        <i className="fa fa-paper-plane"/>
                    </a>
                    <a href="https://steemit.com/@copytrackhq" target="_blank">
                        <CDNImage path="/img/media-logo/eD1VHQH1_bigger.png"/>
                    </a>
                    <a href="https://www.facebook.com/copytrack/" target="_blank">
                        <i className="fa fa-facebook"/>
                    </a>
                    <a href="https://www.linkedin.com/company/10840600/" target="_blank">
                        <i className="fa fa-linkedin"/>
                    </a>
                    <a href="https://www.instagram.com/copytrack/" target="_blank">
                        <i className="fa fa-instagram"/>
                    </a>
                    <a href="https://twitter.com/copytrackhq/" target="_blank">
                        <i className="fa fa-twitter"/>
                    </a>
                    <a href="mailto:tokensale@copytrack.com">
                        <i className="fa fa-envelope"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default injectIntl(SocialBanner);