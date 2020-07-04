import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { changeField, initializeForm, KeyType } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {
	const dispatch = useDispatch();
	const { form } = useSelector(({ auth }: RootState) => ({
		form: auth.login,
	}));
	// 인풋 변경 이벤트 핸들러
	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		const { value, name } = e.currentTarget;
		dispatch(
			changeField({
				form: 'login',
				key: name as KeyType,
				value,
			}),
		);
	};

	// 폼 등록 이벤트 핸들러
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// 구현 예정
	};

	// 컴포넌트가 청므 렌더링될 때 form 초기화
	useEffect(() => {
		dispatch(initializeForm('login'));
	}, [dispatch]);

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
