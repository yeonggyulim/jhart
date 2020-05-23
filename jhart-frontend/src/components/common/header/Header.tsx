import React from 'react';
import { Logo, Gnb } from '../..';
import { Navigation } from '../../../constants/navigation';

type HeaderProps = {
	activeGnb: Navigation;
	onChangeNavigation: (navigation: Navigation) => void;
};

const Header = ({ activeGnb, onChangeNavigation }: HeaderProps) => {
	return (
		<div className="outer-layout header">
			<div className="inner-layout header">
				<div className="header--left">
					<Logo onChangeNavigation={onChangeNavigation} />
				</div>
				<div className="header--center">
					<Gnb activeGnb={activeGnb} onChangeNavigation={onChangeNavigation} />
				</div>
				<div className="header--right" />
			</div>
		</div>
	);
};

export default React.memo(Header);
