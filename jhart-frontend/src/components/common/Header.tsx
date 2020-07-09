import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, Gnb } from '..';
import { FaRegUser } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

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
				<div className="header--right">
					<Link to="/login">
						<FaRegUser />
					</Link>
					<Link to="/information/map">
						<GoLocation />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Header);
