import * as React from 'react';
import { Header, Footer } from '../components';
import { Layout, MainLayout } from '../layouts';

interface INotFoundProps {
	children: React.ReactNode;
}

export const NotFound: React.FunctionComponent<INotFoundProps> = () => {
	return (
		<Layout>
			<Header />
			<MainLayout>Page Not Found</MainLayout>
			<Footer />
		</Layout>
	);
};
