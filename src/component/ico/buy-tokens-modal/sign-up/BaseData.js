import * as React from 'react';
import PropTypes from 'prop-types';
// import ReCAPTCHA from 'react-google-recaptcha' ;
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import contractManager from './../../../../services/web3/contract-manager';
import {getUtmParameters, getReferrerData} from './../../../../services/tracker';
import icoBackend from './../../../../services/backend-api';


class BaseData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            recaptchaSolved: false,
            validationError: {},
            submitting: false,
            formData: Object.assign({
                    name: '',
                    email: '',
                    eth_address: this.props.address,
                    approximate_eth: '',
                    utm_source: '',
                    utm_term: '',
                    utm_campaign: '',
                    utm_content: '',
                    utm_medium: '',
                    referrer_host: '',
                    referrer_path: '',
                },
                getUtmParameters(),
                getReferrerData()
            )
        };

        if (window.debug) {
            console.log(this.state.formData);
        }
        this.saleContract = contractManager.get('TokenSale');

        this.submit = this.submit.bind(this);
    }

    onCaptchaResolved(captcha) {
        this.sendData(captcha);
    }

    submit() {
        this.recaptcha.execute();
    }

    resetCaptcha() {
        if (this.recaptcha) {
            this.recaptcha.reset();
        }
    }

    trackSignUp(formData) {
        this.fullStoryIdentify(formData);

        if (window.ga !== undefined) {
            window.ga('set', 'userId', formData.eth_address.toLowerCase());
            window.ga('send', 'event', 'signup', 'success');
        }

        if (window.fbq !== undefined) {
            window.fbq('trackCustom', 'BUY-MODAL-SIGNUP-SUCCESS');
        }

        if (window.gtag !== undefined) {
            gtag('event', 'conversion', {
                'allow_custom_scripts': true,
                'send_to': 'DC-8333030/succe0/buy-m0+standard'
            });
        }

        window.dataLayer.push({event: 'buy-modal.signup.success'})
    }

    fullStoryIdentify(formData) {
        if (window.FS === undefined) {
            return;
        }

        window.FS.identify(formData.eth_address.toLowerCase(), {
            displayName: formData.name,
            email: formData.email
        });
    }

    sendData(captcha) {
        if (captcha === '') {
            alert('Please solve the captcha to proceed!');
            return;
        }
        this.setState({validationError: {}, submitting: true});

        let formData = this.state.formData;
        formData['g-recaptcha-response'] = captcha;
        icoBackend.client
            .post('/application', formData)
            .then((response) => {
                if (response.status === 200) {

                    this.props.afterSubmit(response.headers['x-token']);
                    this.trackSignUp(formData);

                } else {
                    console.log('ERROR', response);
                }
                this.resetCaptcha();
            })
            .catch((error) => {
                this.resetCaptcha();
                if (error.response.status === 422) {
                    this.setState({validationError: error.response.data.details});
                    return;
                }

                throw error;
            });
    }

    handleFormData(e) {
        let formData = this.state.formData;
        formData[e.target.name] = e.target.value;
        this.setState({formData});
    }

    hasError(name) {
        return this.state.validationError[name] !== undefined;
    }

    renderErrors(name) {
        if (!this.hasError(name)) {
            return null;
        }
        const errors = this.state.validationError[name];

        return (
            <div className="invalid-feedback">
                <ul>
                    {errors.map((message, i) =>
                        <li key={'error-' + name + '-' + i}>{message}</li>
                    )}
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="user-name">Full Name:</Label>
                        <Input type="text" name="name" required id="user-name"
                               className={this.hasError('name') ? 'is-invalid' : ''}
                               onChange={this.handleFormData.bind(this)}/>
                        {this.renderErrors('name')}
                    </FormGroup>
                    <FormGroup>
                        <Label for="user-email">E-Mail Address:</Label>
                        <Input type="email" name="email" required id="user-email"
                               className={this.hasError('email') ? 'is-invalid' : ''}
                               onChange={this.handleFormData.bind(this)}/>
                        {this.renderErrors('email')}
                    </FormGroup>
                    <FormGroup className={this.hasError('eth_address') ? 'has-danger' : ''}>
                        <Label for="user-eth-address">ETH Address:</Label>
                        <Input type="string" name="eth_address" value={this.props.address}
                               className={'mono-space ' + (this.hasError('eth_address') ? 'is-invalid' : '')}
                               required disabled={true} id="user-eth-address"/>
                        {this.renderErrors('eth_address')}
                    </FormGroup>


                    {/*<ReCAPTCHA*/}
                        {/*ref={(el) => {*/}
                            {/*this.recaptcha = el;*/}
                        {/*}}*/}
                        {/*size="invisible"*/}
                        {/*sitekey="6LfO2TwUAAAAABfdUxgNgLQPPM1WzsWyjGbGWo4P"*/}
                        {/*badge="inline"*/}
                        {/*onChange={this.onCaptchaResolved.bind(this)}*/}
                    {/*/>*/}
                </Form>

                {this.renderButton()}

            </div>
        );
    }

    renderButton() {
        if (this.state.uploading) {
            return (
                <Button disabled block>
                    <i className="fa fa-spin fa-spinner" aria-hidden="true"/>Continue
                </Button>

            )
        }
        return (
            <Button block={true} onClick={this.submit}>SIGN UP</Button>
        );
    }

}

BaseData.propTypes = {
    address: PropTypes.string.isRequired,
    afterSubmit: PropTypes.func.isRequired
};

export default BaseData;