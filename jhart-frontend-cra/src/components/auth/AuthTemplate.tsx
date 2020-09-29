import React from 'react';
import { Link } from 'react-router-dom';

type AuthTemplateProps = {
	children: React.ReactNode;
};

const AuthTemplate = ({ children }: AuthTemplateProps) => {
	return (
		<div className="auth-template">
			<div className="white-box">
				<div className="logo-area">
					<Link to="/">전흥공예</Link>
				</div>
				{children}
			</div>
		</div>
	);
};

export default AuthTemplate;
