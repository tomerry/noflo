import * as React from 'react';
import Section from '../../component/Section';

class ExlpainerVideoSection extends React.Component {


    render() {
        return (
            <Section name="explainer-video" hideHeader>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src='https://player.vimeo.com/video/246804994?color=8db6d2&title=0&byline=0&portrait=0'
                            frameBorder='0' allowFullScreen />
                </div>
            </Section>
        );
    }

}

export default ExlpainerVideoSection;