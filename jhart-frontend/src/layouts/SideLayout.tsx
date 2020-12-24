import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar, Responsive } from '.';
import { Layout } from 'antd';

interface ISideLayoutProps {
	children?: React.ReactNode;
}

export const SideLayout: React.FunctionComponent<ISideLayoutProps> = ({
	children,
}) => {
	const location = useLocation();

	return (
		<Layout style={{ height: '100vh' }}>
			<Sidebar location={location} />
			<Responsive center={true}>{children}</Responsive>
		</Layout>
	);
};
