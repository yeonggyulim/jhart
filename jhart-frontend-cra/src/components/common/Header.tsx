import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, Gnb } from '..';
import { FiUser, FiUserCheck } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

type HeaderProps = {
	user?: any;
	onLogout?: () => void;
};

const Header = ({ user, onLogout }: HeaderProps) => {
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
					{user ? (
						<>
							<div className="user-info">{user.username}</div>
							<div onClick={onLogout}>
								<FiUserCheck />
							</div>
						</>
					) : (
						<Link to="/login">
							<FiUser />
						</Link>
					)}
					<Link to="/information/map">
						<GoLocation />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Header);
