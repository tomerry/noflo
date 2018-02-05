import * as React from 'react';
import CDNImage from '../util/CDNImage';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-background">
                    <CDNImage width={250} path="/img/copyright-logo.png"/>
                </div>
            </footer>
        );
    }
}

export default  Footer;