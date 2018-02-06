import * as React from 'react';
import Section from '../../component/Section';
import ChiefSection from './team/ChiefSection';
import HeadSection from './team/HeadSection';
import MembersSection from './team/MembersSection';

class TeamSection extends React.Component {

    render() {
        return (
            <Section name="team">
                <ChiefSection />
                <HeadSection/>
                <MembersSection/>
            </Section>
        );
    }

}

export default TeamSection;