import * as React from 'react';
import {Row} from 'reactstrap';
import Member from './Member';

const members = [
    {
        name: 'Sandro Mäder',
        ident: 'maeder',
        position: 'HEAD OF OPERATIONS',
        imgSrc: '/img/team/head/sandro-maeder.png',
        linkedIn: '//www.xing.com/profile/Sandro_Maeder'
    },
    {
        name: 'Marie Slowioczek-Mannsfeld',
        ident: 's-l',
        position: 'HEAD OF LEGAL',
        imgSrc: '/img/team/head/marie-slowioczek-mannsfeld.png',
        linkedIn: '//www.xing.com/profile/Marie_SlowioczekMannsfeld'
    }
];

class HeadSection extends React.Component {
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

export default HeadSection;