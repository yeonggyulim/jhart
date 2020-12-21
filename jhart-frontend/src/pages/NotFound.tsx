import * as React from 'react';

interface INotFoundProps {
	children?: React.ReactNode;
}

export const NotFound: React.FunctionComponent<INotFoundProps> = () => {
	return <div>Page Not Found</div>;
};
