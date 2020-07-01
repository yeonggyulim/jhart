import React from 'react';
import { AuthTemplate, AuthForm } from '../components';

const LoginPage = () => {
	return (
		<AuthTemplate>
			<AuthForm type="login" />
		</AuthTemplate>
	);
};

export default LoginPage;
