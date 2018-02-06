import * as React from 'react';
import {Row} from 'reactstrap';
import MemberSmall from './MemberSmall';

const members = [
    {
        name: 'J. Krapp',
        position: 'Head of Software Development',
        imgSrc: '/img/team/member/justus-krapp.png'
    },
    {
        name: 'G. Peter',
        position: 'Senior Software Development',
        imgSrc: '/img/team/member/george-peter.png'
    },
    {
        name: 'D. Skodawessely',
        position: 'Head of QA',
        imgSrc: '/img/team/member/david-skodawessely.png'
    },
    {
        name: 'F. Stachowiak',
        position: 'Controlling & Business Intelligence',
        imgSrc: '/img/team/member/fabian-stachowiak.png'
    },
    {
        name: 'N. Hartmann',
        position: 'Team Lead USA',
        imgSrc: '/img/team/member/nick-hartmann.png'
    },
    {
        name: 'S. Nakano',
        position: 'Team Lead JAPAN',
        imgSrc: '/img/team/member/shiori-nakano.png'
    },
    {
        name: 'Yi-An Ko',
        position: 'Team Lead APAC',
        imgSrc: '/img/team/member/yi-an-ko.png'
    },
    {
        name: 'J. Groh',
        position: 'Team Lead Online Marketing',
        imgSrc: '/img/team/member/jannis-groh.png'
    },
    {
        name: 'P Teske',
        position: 'Team Lead Customer Service',
        imgSrc: '/img/team/member/philipp-teske.png'
    },
    {
        name: 'M. Eising',
        position: 'Team Lead Content Marketing',
        imgSrc: '/img/team/member/mary-eising.png'
    },
    {
        name: 'S. Dahmen',
        position: 'Team Lead Legal Research',
        imgSrc: '/img/team/member/sophie-dahmen.png'
    },
    {
        name: 'P. Reichel',
        position: 'Team Lead Legal Collection',
        imgSrc: '/img/team/member/philip-reichel.png'
    },
    {
        name: 'J. Appleby',
        position: 'Community Manager UK/US',
        imgSrc: '/img/team/member/jonathan-appleby.png'
    },
    {
        name: 'C. Briese',
        position: 'Image Agencies and Publishers',
        imgSrc: '/img/team/member/carola-briese.png'
    },
    {
        name: 'L. Boueres',
        position: 'Case Management',
        imgSrc: '/img/team/member/ligia-boueres.png'
    },
    {
        name: 'S. Höttinger',
        position: 'Case Management',
        imgSrc: '/img/team/member/sophia-hoettinger.png'
    }
];

class MembersSection extends React.Component {

    render() {
        return (

            <Row>
                {members.map(function (member, i) {
                    return (<div key={i} className="col-sm-6 col-md-4 col-lg-3"><MemberSmall {...member} /></div>);
                })}
            </Row>
        );
    }

}

export default MembersSection;