import * as React from 'react';
import Section from '../../component/Section';
import {Col, Row, Table} from 'reactstrap';
import CDNImage from '../../component/util/CDNImage';

class RoadmapSection extends React.Component {

    render() {
        return (
            <Section name="roadmap" subtitle>
                <CDNImage className="mt-5" width={1100} path="roadmap.png" localized/>
            </Section>
        );
    }

}

export default RoadmapSection;