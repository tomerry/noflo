import * as React from 'react';
import Section from '../../component/Section';
import {Row} from 'reactstrap';
import Member from './team/Member';


const members = [{
    name: 'D. EIBA ',
    ident: 'eiba',
    position: 'Advisor Business Model, Marketing & Sales',
    imgSrc: '/img/team/advisor/daniel-eiba.png',
    linkedIn: '//www.xing.com/profile/Daniel_Eiba'
},
    {
        name: 'S. MANNSFELD',
        ident: 'mannsfeld',
        position: 'Advisor Intl. Finance, Tax',
        imgSrc: '/img/team/advisor/sebastian-mannsfeld.png',
        linkedIn: '//www.xing.com/profile/Sebastian_Mannsfeld'
    },
    {
        name: 'S. SCHUMANN',
        ident: 'schumann',
        position: 'Advisor IT-Security',
        imgSrc: '/img/team/advisor/sascha-schumann.png',
        linkedIn: 'https://www.linkedin.com/in/sascha-schumann-41792a5b/'
    },
    {
        name: 'N. OKUBO',
        ident: 'okubo',
        position: 'Advisor Investments & Investor',
        imgSrc: '/img/team/advisor/noriaki-okubo.png',
        linkedIn: 'https://www.linkedin.com/in/noriaki-okubo-5494654/'
    },
    {
        name: 'K. SHISHIDO',
        ident: 'shishido',
        position: 'Advisor Cryptocurrency',
        imgSrc: '/img/team/advisor/ken-shishido.png',
        linkedIn: 'https://www.linkedin.com/in/ken-shishido-419690a2/'
    },
    {
        name: 'A. KOENIG',
        ident: 'koenig',
        position: 'Advisor Cryptocurrency',
        imgSrc: '/img/team/advisor/aaron-koenig.png',
        linkedIn: 'https://www.aaron-koenig.com/'
    }
];

class AdvisoryTeamSection extends React.Component {
    render() {
        return (
            <Section name="advisory">

                <Row>
                    {members.map(function (member, i) {
                        return (<div className="col-md-6 text-justify" key={i}><Member {...member} /></div>);
                    })}
                </Row>

            </Section>
        );
    }

}

export default AdvisoryTeamSection;