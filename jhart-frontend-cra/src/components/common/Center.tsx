import React from 'react';

type CenterProps = {
    children: React.ReactNode;
    // className?: string;
};

const Center = ({ children }: CenterProps) => {
	return <div className="center">{children}</div>;
};

export default Center;
