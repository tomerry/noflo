import React, {Component} from 'react';
// import 'font-awesome/css/font-awesome.css';

import BuyTokenBanner from './../component/BuyTokenBanner';
import HeroSection from './home/HeroSection';
import ExlpainerVideoSection from './home/ExlainerVideoSection';
import ChallengesSection from './home/ChallengesSection';
import CopyrightRegisterSection from './home/CopyrightRegisterSection';
import FutureSection from './home/FutureSection';
import PaymentSection from './home/PaymentSection';
import BusinessModelSection from './home/BusinessModelSection';
import OpenRegisterSection from './home/OpenRegisterSection';
import TokenAllocation from './home/TokenAllocation';
import TeamSection from './home/TeamSection';
import AdvisoryTeamSection from './home/AdvisoryTeamSection';
import RoadmapSection from './home/RoadmapSection';
import PressMediaSection from './home/PressMediaSection';
import GetInTouch from './home/GetInTouch';
import Faq from './home/Faq';

import BuyTokensModal from './../component/ico/BuyTokenModal';
import Web3Provider from './../component/Web3Provider';
import SocialBanner from './../component/SocialBanner';
import ParticlesBackground from './../component/ParticlesBackground';
import Facts from './home/Facts';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="hero-background">
                    <ParticlesBackground/>
                    <div className="container">
                        <HeroSection/>
                    </div>
                </div>

                <SocialBanner/>

                <div className="container">
                    <Facts />
                </div>

                <BuyTokenBanner/>

                <div className="container">
                    <ChallengesSection/>
                    <ExlpainerVideoSection/>
                </div>

                <BuyTokenBanner/>

                <div className="container">
                    <CopyrightRegisterSection/>
                    <FutureSection/>
                    <PaymentSection/>
                </div>


                <BuyTokenBanner/>

                <div className="container">
                    <BusinessModelSection/>
                    <OpenRegisterSection/>
                </div>

                <BuyTokenBanner/>

                <div className="container">
                    <TokenAllocation/>
                    <Faq/>
                </div>

                <BuyTokenBanner/>

                <div className="container">
                    <TeamSection/>
                    <AdvisoryTeamSection/>
                </div>

                <BuyTokenBanner/>

                <div className="container">
                    <RoadmapSection/>
                </div>

                <BuyTokenBanner/>

                <div className="container">
                    <PressMediaSection/>
                </div>

                <div className="container">
                    <GetInTouch/>
                </div>



                <Web3Provider noLoader>
                    <BuyTokensModal/>
                </Web3Provider>

            </div>
        );
    }
}

export default Home;



// WEBPACK FOOTER //
// ./src/page/Home.js