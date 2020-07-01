import React from 'react';

type ButtonProps = {
	className?: string;
	children: React.ReactNode;
};

const Button = ({ children, className }: ButtonProps) => {
	return <button className={`button ${className}`}>{children}</button>;
};

export default Button;
