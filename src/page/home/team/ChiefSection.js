import * as React from 'react';
import {Row} from 'reactstrap';
import Member from './Member';

const members = [
    {
        name: 'Marcus Schmitt',
        ident: 'schmitt',
        position: 'CHIEF EXECUTIVE OFFICER',
        imgSrc: '/img/team/chief/marcus-schmitt.png',
        linkedIn: '//www.linkedin.com/in/marcusmschmitt/'
    },
    {
        name: 'Stefan Bär',
        ident: 'baer',
        position: 'CHIEF TECHNOLOGY OFFICER',
        imgSrc: '/img/team/chief/stefan-baer.png',
        linkedIn: '//www.xing.com/profile/Stefan_Baer5'
    }
];

class ChiefSection extends React.Component {
    render() {

        return (

            <Row>
                {members.map(function (member, i) {
                    return (<div className="col-md-6" key={i}><Member {...member} /></div>);
                })}
            </Row>
        );
    }
}

export default ChiefSection;