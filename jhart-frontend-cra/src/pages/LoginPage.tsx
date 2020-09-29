import React from 'react';
import { AuthTemplate } from '../components';
import { LoginForm } from '../containers';

const LoginPage = () => {
	return (
		<AuthTemplate>
			<LoginForm />
		</AuthTemplate>
	);
};

export default LoginPage;
