import React from 'react';
import { Button } from '..';
import { Link } from 'react-router-dom';

const textMap = {
	login: '로그인',
	register: '회원가입',
};

type AuthFormProps = {
	type: 'login' | 'register';
	form: { username: string; password: string; passwordConfirm?: string };
	onChange: (e: React.FormEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const AuthForm = ({ type, form, onChange, onSubmit }: AuthFormProps) => {
	const text = textMap[type];
	return (
		<div className="auth-form">
			<h3>{text}</h3>
			<form onSubmit={onSubmit}>
				<input
					className="styled-input"
					autoComplete="username"
					name="username"
					placeholder="아이디"
					onChange={onChange}
					value={form.username}
				/>
				<input
					className="styled-input"
					autoComplete="new-password"
					name="password"
					placeholder="비밀번호"
					type="password"
					onChange={onChange}
					value={form.password}
				/>
				{type === 'register' && (
					<input
						className="styled-input"
						name="passwordConfirm"
						placeholder="비밀번호 확인"
						type="password"
						onChange={onChange}
						value={form.passwordConfirm}
					/>
				)}
				<Button className="full-width cyan">{text}</Button>
			</form>
			<div className="footer">
				{type === 'login' ? (
					<Link to="/register">회원가입</Link>
				) : (
					<Link to="/login">로그인</Link>
				)}
			</div>
		</div>
	);
};

export default AuthForm;
