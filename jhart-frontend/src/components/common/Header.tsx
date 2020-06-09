import React from 'react';
import { Logo, Gnb } from '..';

const Header = () => {
    return (
        <div className="outer-layout header">
            <div className="inner-layout header">
                <div className="header--left">
                    <Logo />
                </div>
                <div className="header--center">
                    <Gnb />
                </div>
                <div className="header--right" />
            </div>
        </div>
    );
};

export default React.memo(Header);
