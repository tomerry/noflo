import * as React from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import {Row} from 'reactstrap';

class Countdown extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    calculateTimeRemaining() {
        let t = this.props.endTime - (Date.now() / 1000);
        if (t < 0) {
            t = 0;
        }
        let seconds = Math.floor(t % 60);
        let minutes = Math.floor((t / 60) % 60);
        let hours   = Math.floor((t / (60 * 60)) % 24);
        let days    = Math.floor(t / (60 * 60 * 24));

        this.setState({
            'total':   t,
            'days':    days,
            'hours':   hours,
            'minutes': minutes,
            'seconds': seconds
        });
    }

    componentDidMount() {
        this.calculateTimeRemaining();
        this.clockInterval = setInterval(() => {
            this.calculateTimeRemaining();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockInterval);
    }

    render(props) {
        if (this.state.total === undefined) {
            return null;
        }

        return (
            <div className="countdown">
                <Row>
                    <div className="col-3">
                        <span className="days">{this.state.days.toFixed(0).padStart(2, 0)}</span>
                        <div className="smalltext"><FormattedMessage id='section.countdown.days'/></div>
                    </div>
                    <div className="col-3">
                        <span className="hours">{this.state.hours.toFixed(0).padStart(2, 0)}</span>
                        <div className="smalltext"><FormattedMessage id='section.countdown.hours'/></div>
                    </div>
                    <div className="col-3">
                        <span className="minutes">{this.state.minutes.toFixed(0).padStart(2, 0)}</span>
                        <div className="smalltext"><FormattedMessage id='section.countdown.minutes'/></div>
                    </div>
                    <div className="col-3">
                        <span className="seconds">{this.state.seconds.toFixed(0).padStart(2, 0)}</span>
                        <div className="smalltext"><FormattedMessage id='section.countdown.seconds'/></div>
                    </div>
                </Row>
            </div>
        )
    }
}


Countdown.propTypes = {
    endTime: PropTypes.number.isRequired
};


export default Countdown;