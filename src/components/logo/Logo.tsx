import React from 'react';
import { Link } from 'react-router-dom';
import { BsXDiamond } from 'react-icons/bs';
import { Navigation } from '../../constants/navigation';

type LogoProps = {
	onChangeNavigation: (navigation: Navigation) => void;
};

const Logo = ({ onChangeNavigation }: LogoProps) => {
  return (
    <div className="logo">
      <Link to="/" onClick={() => onChangeNavigation(Navigation.Home)}>
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
