import * as React from 'react';
import {Button, Col, Row} from 'reactstrap';

class ApplyBountyProgram extends React.Component {
    render() {
        return (
            <div className="presale-banner">
                <h3>Apply to the Bounty Program</h3>
                <Row>
                    <div className="col-md-4 offset-md-4">
                        <Button color="secondary" size="lg" block target="_blank" href="https://bounty.copytrack.io/">
                            REGISTER HERE
                        </Button>
                    </div>
                </Row>
                <div className="mt-5">
                    Sale Ends February 09, 2018 23:59 UTC
                </div>
            </div>
        );
    }
}



export default ApplyBountyProgram;



// WEBPACK FOOTER //
// ./src/page/bounty/ApplyBountyProgram.js