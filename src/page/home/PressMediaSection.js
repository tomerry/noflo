import * as React from 'react';
import Section from '../../component/Section';
import CDNImage from '../../component/util/CDNImage';

class PressMediaSection extends React.Component {


    render() {
        return (
            <Section name="media">
                <div className="media-logos">
                    <a href="https://www.pdnonline.com/business-marketing/legal/copyright/three-stolen-images-reported-copytrack/"
                       target="_blank">
                        <CDNImage width={160} path="/img/logo/pdn-logo.png" className="img-fluid"/>
                    </a>
                    <a href="http://nlab.itmedia.co.jp/nl/articles/1710/23/news132.html" target="_blank">
                        <CDNImage width={215} path="/img/logo/130_nl_bgw.gif"/>
                    </a>
                    <a href="https://www.oxfordprospect.com/uncategorized/image-comparison-peek-behind-curtain/"
                       target="_blank">
                        <CDNImage width={632} path="/img/logo/oxfordprospect.jpg" className="img-fluid"/>
                    </a>
                    <a href="https://www.ephotozine.com/article/the-biggest-excuses-for-image-theft-are----30830" target="_blank">
                        <CDNImage width={206} path="/img/logo/ephotozine-logo.png" className="img-fluid"/>
                    </a>
                    <a>
                        <CDNImage width={271} path="/img/logo/WELT_Logo_2016.png" className="img-fluid"/>
                    </a>
                    <a href="https://petapixel.com/2017/07/28/china-biggest-photo-copyright-abusing-country-study-finds/"
                       target="_blank">
                        <CDNImage width={180} path="/img/logo/petapixel.jpg" className="img-fluid"
                        />
                    </a>
                    <a href="http://www.photopresse.de/8-magazine/news/433-chinesen-sind-spitzenreiter-beim-bilderklau"
                       target="_blank">
                        <CDNImage width={235} path="/img/logo/logos_fotogra_and_photopresse.png" className="img-fluid"
                        />
                    </a>
                    <a href="http://www.profifoto.de/neuheiten/business/2017/03/09/komfortable-bildrechtrecherche-ueber-api/"
                       target="_blank">
                        <CDNImage width={356} path="/img/logo/profifoto-logo.jpg" className="img-fluid"/>
                    </a>
                    <a href="http://dpnow.com/us-image-copyright-advice-from-copytrack/" target="_blank">
                        <CDNImage width={618} path="/img/logo/dpno_logo.png" className="img-fluid"/>
                    </a>
                    <a href="https://www.thetimes.co.uk/article/copyrighted-memes-prove-you-cant-laugh-away-thelaw-2pjn39993"
                       target="_blank">
                        <CDNImage width={506} path="/img/logo/times-logo.png" className="img-fluid"/>
                    </a>
                    <a href="http://www.jps.gr.jp/wp-content/uploads/2017/11/jps_166_30-31.pdf"
                       target="_blank">
                        <CDNImage width={430} path="/img/logo/jps_kaiho.png" className="img-fluid"/>
                    </a>
                    <a>
                        <CDNImage width={130} path="/img/logo/aera.png" className="img-fluid"/>
                    </a>
                    <a href="https://www.heise.de/ct/ausgabe/2016-11-Bildersuche-3200829.html"
                       target="_blank">
                        <CDNImage width={219} path="/img/logo/1200px-Ct_logo.svg.png" className="img-fluid"/>
                    </a>
                    <a href="https://www.startupvalley.news/de/copytrack-bilder/" target="_blank">
                        <CDNImage width={210} path="/img/logo/LOGO-Startup-Magazin.jpg" className="img-fluid"/>
                    </a>
                    <a
                        href="http://www.computerwelt.at/news/detail/artikel/119567-copytrack-chinesen-sind-spitzenreiter-beim-bilderklau/"
                        target="_blank">
                        <CDNImage width={403} path="/img/logo/Computerwelt.png" className="img-fluid"/>
                    </a>
                </div>
            </Section>
        );
    }

}


export default PressMediaSection;



// WEBPACK FOOTER //
// ./src/page/home/PressMediaSection.js