import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { authActions, KeyType } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { userActions } from '../../modules/user';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { form, auth, authError, user } = useSelector(
		({ auth, user }: RootState) => ({
			form: auth.register,
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
				form: 'register',
				key: name as KeyType,
				value,
			}),
		);
	};

	// 폼 등록 이벤트 핸들러
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { username, password, passwordConfirm } = form;
		if (password !== passwordConfirm) {
			// TODO: 오류 처리
			return;
		}
		dispatch(authActions.register({ username, password }));
	};

	// 컴포넌트가 처음 렌더링될 때 form을 초기화
	useEffect(() => {
		dispatch(authActions.initializeForm('register'));
	}, [dispatch]);

	// 회원가입 성공/실패 처리
	useEffect(() => {
		if (authError) {
			console.log('오류 발생');
			console.log(authError);
			return;
		}
		if (auth) {
			console.log('회원가입 성공');
			console.log(auth);
			dispatch(userActions.check());
		}
	}, [auth, authError, dispatch]);

	// user 값이 잘 설정되었는지 확인
	useEffect(() => {
		if (user) {
			history.push('/');
		}
	}, [user]);

	return (
		<AuthForm
			type="register"
			form={form}
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
};

export default RegisterForm;
