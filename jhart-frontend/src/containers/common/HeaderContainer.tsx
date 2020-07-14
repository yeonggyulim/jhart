import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../components';
import { RootState } from '../../modules';

const HeaderContainer = () => {
	const { user } = useSelector(({ user }: RootState) => ({ user: user.user }));
	return <Header user={user} />;
};

export default HeaderContainer;
