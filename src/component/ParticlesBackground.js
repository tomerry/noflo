import * as React from 'react';
import Particles from 'react-particles-js';

const particles = {
    startSlide: 'first', endSlide: 'last', zIndex: '1',
    particles: {
        number: {value: 40}, color: {value: '#9dc1eb'},
        shape: {
            type: 'circle', stroke: {width: 0, color: '#ffffff', opacity: 1},
            image: {src: ''}
        },
        opacity: {value: 0.25, random: false, min: 0.1, anim: {enable: false, speed: 3, opacity_min: 0, sync: false}},
        size: {value: 5, random: false, min: 0.5, anim: {enable: false, speed: 40, size_min: 1, sync: false}},
        line_linked: {enable: true, distance: 150, color: '#9dc1eb', opacity: 0.25, width: 2},
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            min_speed: 1,
            straight: false,
            out_mode: 'out'
        }
    },
    interactivity: {
        events: {onhover: {enable: true, mode: 'repulse'}, onclick: {enable: true, mode: 'repulse'}},
        modes: {
            grab: {distance: 400, line_linked: {opacity: 0.5}},
            bubble: {distance: 400, size: 40, opacity: 0.4},
            repulse: {distance: 100}
        }
    }
};


class ParticlesBackground extends React.Component {
    constructor() {
        super();
        this.state = {
            render: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({render: true});
        }, 1000);
    }

    render() {
        if (!this.state.render) {
            return null;
        }
        return (
            <div className="particles-background">
                <Particles params={particles}/>
            </div>
        );
    }

}

export default ParticlesBackground;