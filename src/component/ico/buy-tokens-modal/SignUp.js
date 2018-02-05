import * as React from 'react';
import PropTypes from 'prop-types';
import BaseData from './sign-up/BaseData';
import {Alert} from 'reactstrap';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            token: null
        };
    }

    renderStep() {
        if (!this.state.token || this.state.step === 'base-data') {
            return (
                <div>
                    <p>
                        Please sign up for the COPYTRACK Token Sale Whitelist. Once you've have been whitelisted by our
                        staff you can proceed with the purchase process.
                    </p>
                    <BaseData
                        address={this.props.address}
                        afterSubmit={(token) => this.setState({
                            token: token
                        })}/>
                </div>
            )
        }

        return (
            <div className="success-page">
                <div className="success-icon">
                    <i className="fa fa-check"> </i>
                </div>


                <Alert color="success">
                    Thank you for your signup, you will receive an email as soon as you are whitelisted
                </Alert>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderStep()}
            </div>
        );
    }

}


SignUp.propTypes = {
    address: PropTypes.string.isRequired,
    afterSignUp: PropTypes.func.isRequired
};


export default SignUp;