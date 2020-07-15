import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from '../../components';
import { RootState } from '../../modules';
import { userActions } from '../../modules/user';

const HeaderContainer = () => {
	const { user } = useSelector(({ user }: RootState) => ({ user: user.user }));
	const dispatch = useDispatch();
	const onLogout = () => {
		dispatch(userActions.logout());
	};
	return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
