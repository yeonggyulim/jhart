import React from 'react';
import { Logo, Gnb } from '../../components';
import { Navigation } from '../../constants/navigation';

type HeaderProps = {
	onChangeNavigation: (navigation: Navigation) => void;
};

const Header = ({ onChangeNavigation }: HeaderProps) => {
	return (
		<div className="outer-layout header">
			<div className="inner-layout header">
				<div className="header--left">
					<Logo onChangeNavigation={onChangeNavigation} />
				</div>
				<div className="header--center">
					<Gnb onChangeNavigation={onChangeNavigation} active={3} />
				</div>
				<div className="header--right" />
			</div>
		</div>
	);
};

export default React.memo(Header);
