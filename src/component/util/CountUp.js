import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CountUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.props.number,
            number: this.props.number
        };
    }

    getDecimals() {
        return this.props.decimals || 0;
    }

    componentWillReceiveProps(nextProp) {
        if (this.state.number.lessThan(nextProp.number)) {
            this.setTimer(nextProp.number.sub(this.state.number).toNumber());
            this.setState({
                number: nextProp.number,
            })
        } else {
            this.clearTimer();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const current = this.state.current.toFormat(this.getDecimals()),
            next = nextState.current.toFormat(this.getDecimals());
        return current !== next;
    }

    componentWillUnmount() {
        this.clearTimer();
    }

    setTimer(diff) {
        if (this.timer) {
            this.clearTimer();
        }
        let renderInterval = 100;
        let incPerFrame = Math.ceil(diff / (this.props.duration / renderInterval) * 100) / 100;


        this.timer = setInterval(() => {
            let current = this.state.current.add(incPerFrame);
            if (current.greaterThanOrEqualTo(this.state.number)) {
                this.clearTimer();
                current = this.state.number;
            }
            this.setState({current: current});
        }, renderInterval);
    }

    clearTimer() {
        clearInterval(this.timer);
        this.timer = null;
    }


    render() {
        return (
            <span>{this.state.current.toFormat(this.getDecimals())}</span>
        );
    }
}

CountUp.propTypes = {
    number: PropTypes.object.isRequired,
    ident: PropTypes.string,
    duration: PropTypes.number.isRequired,
    decimals: PropTypes.number
};

export default CountUp;