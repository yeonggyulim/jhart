import React from 'react';

type ButtonProps = {
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
};

const Button = ({ children, className, onClick }: ButtonProps) => {
	return <button className={`button ${className}`} onClick={onClick}>{children}</button>;
};

export default Button;
