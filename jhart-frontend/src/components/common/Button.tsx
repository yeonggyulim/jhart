import React from 'react';

type ButtonProps = {
	children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
	return <button className="button">{children}</button>;
};

export default Button;
