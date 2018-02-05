import * as React from 'react';
import { Row} from 'reactstrap';
import {FormattedMessage} from 'react-intl';
import CDNImage from '../../../component/util/CDNImage';


class Member extends React.Component {


    render() {

        let linkedIn = false;

        if (this.props.linkedIn) {
            linkedIn = <a target="_blank" href={this.props.linkedIn}>in <i className="fa fa-xing"/></a>
        }

        return (
            <div className="team-member">
                <Row className="avatar">
                    <div className="image-container col-lg-4">
                        <CDNImage width={150} path={this.props.imgSrc}/>
                    </div>
                    <div className="col-lg-8">
                        <div className="position">{this.props.position}</div>

                        <h3 className="name">{this.props.name}</h3>
                        {linkedIn}
                    </div>
                </Row>
                <p><FormattedMessage id={'member.' + this.props.ident + '.description'} /></p>
            </div>

        );
    }
}


export default Member;



// WEBPACK FOOTER //
// ./src/page/home/team/Member.js