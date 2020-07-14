import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { authActions, KeyType } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { userActions } from '../../modules/user';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
	const [error, setError] = useState<string | null>(null);
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
		// 하나라도 비어 있다면
		if ([username, password, passwordConfirm].includes('')) {
			setError('빈 칸을 모두 입력하세요.');
			return;
		}
		// 비밀번호 일치하지 않는다면
		if (password !== passwordConfirm) {
			setError('비밀번호가 일치하지 않습니다.');
			authActions.changeField({ form: 'register', key: 'password', value: '' });
			authActions.changeField({
				form: 'register',
				key: 'passwordConfirm',
				value: '',
			});
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
			// 계정명이 이미 존재할 때
			if ((authError.response.status = 409)) {
				setError('이미 존재하는 계정명입니다.');
				return;
			}
			// 기타 이유
			setError('회원가입 실패');
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
			try {
				localStorage.setItem('user', JSON.stringify(user));
			} catch (e) {
				console.log('localStorage is not working');
			}
		}
	}, [history, user]);

	return (
		<AuthForm
			type="register"
			form={form}
			onChange={onChange}
			onSubmit={onSubmit}
			error={error}
		/>
	);
};

export default RegisterForm;
