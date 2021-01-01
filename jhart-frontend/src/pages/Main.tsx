import * as React from 'react';
import { useHistory } from 'react-router-dom';

interface IMainProps {
	children: React.ReactNode;
}

export const Main: React.FunctionComponent<IMainProps> = () => {
	const history = useHistory();
	return <div onClick={() => history.push('/admin')}>Hello</div>;
};
