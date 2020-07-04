import React from 'react';
import { AuthTemplate } from '../components';
import { RegisterForm } from '../containers';

const RegisterPage = () => {
	return (
		<AuthTemplate>
			<RegisterForm />
		</AuthTemplate>
	);
};

export default RegisterPage;
