import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { authActions, KeyType } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { userActions } from '../../modules/user';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { form, auth, authError, user } = useSelector(
		({ auth, user }: RootState) => ({
			form: auth.login,
			auth: auth.auth,
			authError: auth.authError,
			user: user.user,
		}),
	);
	// 인풋 변경 이벤트 핸들러
	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		const { value, name } = e.currentTarget;
		dispatch(
			authActions.changeField({
				form: 'login',
				key: name as KeyType,
				value,
			}),
		);
	};

	// 폼 등록 이벤트 핸들러
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { username, password } = form;
		dispatch(authActions.login({ username, password }));
	};

	// 컴포넌트가 처음 렌더링될 때 form 초기화
	useEffect(() => {
		dispatch(authActions.initializeForm('login'));
	}, [dispatch]);

	useEffect(() => {
		if (authError) {
			console.log('오류 발생');
			console.log(authError);
			return;
		}
		if (auth) {
			console.log('로그인 성공');
			dispatch(userActions.check());
		}
	}, [auth, authError, dispatch]);

	useEffect(() => {
		if (user) {
			history.push('/');
		}
	}, [history, user]);

	return (
		<AuthForm
			type="login"
			form={form}
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
};

export default LoginForm;
