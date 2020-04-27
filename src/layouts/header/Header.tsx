import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, Gnb } from '../../components';

const Header = () => {
	return (
		<div className="outer-layout header">
			<div className="inner-layout header">
				<div className="header--left">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				<div className="header--center">
					<Gnb active={3} />
				</div>
				<div className="header--right" />
			</div>
		</div>
	);
};

export default React.memo(Header);
