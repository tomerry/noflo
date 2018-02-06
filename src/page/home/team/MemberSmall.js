import * as React from 'react';
import {Card, CardBody,  CardSubtitle, CardTitle} from 'reactstrap';
import CDNImage from '../../../component/util/CDNImage';

class MemberSmall extends React.Component {

    render() {
        return (
            <Card>
                <div className="image-container">
                    <CDNImage width={150} path={this.props.imgSrc}/>
                </div>
                <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardSubtitle>{this.props.position}</CardSubtitle>
                </CardBody>
            </Card>
        );
    }

}

export default MemberSmall;