import React from 'react';
import { BsXDiamond } from 'react-icons/bs';

const Logo = () => {
  return (
    <div className="logo">
      <BsXDiamond className="logo--icon" />
      <div className="logo--text">
        <div className="logo--text--title">전흥공예</div>
        <div className="logo--text--sub-title">Total Art Company</div>
      </div>
    </div>
  );
};

export default Logo;
