import React from 'react';
import { Link } from 'react-router-dom';

const Gnb = () => {
    const gnbs = [
        {
            title: '회사 소개',
            link: '/information'
        },
        {
            title: '작업 공정',
            link: '/processing'
        },
        {
            title: '조형 작업',
            link: '/modeling'
        },
        {
            title: '불교 미술',
            link: '/buddhism-art'
        },
        {
            title: '고객 센터',
            link: '/contact-us'
        },
    ];

    return (
        <div className='gnb'>
            {gnbs.map(gnb => {
                return (
                    <Link to={gnb.link}>
                        {gnb.title}
                    </Link>
                )
            })}
        </div>
    );
};

export default Gnb;
