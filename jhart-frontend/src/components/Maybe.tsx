import * as React from 'react';

interface IMaybeProps {
	condition: boolean;
	children: React.ReactNode;
}

export const Maybe: React.FunctionComponent<IMaybeProps> = ({
	condition,
	children,
}) => {
	return <>{condition ? children : null}</>;
};
