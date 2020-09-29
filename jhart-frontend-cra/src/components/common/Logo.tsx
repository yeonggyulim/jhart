import React from 'react';
import { Link } from 'react-router-dom';
import { BsXDiamond } from 'react-icons/bs';

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/" >
                <BsXDiamond className="logo--icon" />
                <div className="logo--text">
                    <div className="logo--text--title">전흥공예</div>
                    <div className="logo--text--sub-title">Total Art Company</div>
                </div>
            </Link>
        </div>
    );
};

export default Logo;
