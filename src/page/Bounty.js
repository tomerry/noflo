import React, {Component} from 'react';
// import 'font-awesome/css/font-awesome.css';

import ParticlesBackground from '../component/ParticlesBackground';
import HeroSection from './bounty/HeroSection';
import TermsSection from './bounty/TermsSection';
import RewardSection from './bounty/RewardSection';
import ReceiveReward from './bounty/ReceiveReward';
import ApplyBountyProgram from './bounty/ApplyBountyProgram';


class Bounty extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="bounty">
                <div className="hero-background">
                    <ParticlesBackground/>
                    <div className="container">
                        <HeroSection/>
                    </div>
                </div>

                <div className="container mt-5">
                    <TermsSection/>
                    <RewardSection />
                </div>
                <ApplyBountyProgram/>
                <div className="container mt-5">
                    <ReceiveReward />
                </div>
            </div>
        );
    }
}

export default Bounty;



// WEBPACK FOOTER //
// ./src/page/Bounty.js