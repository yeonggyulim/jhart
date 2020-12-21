import * as React from 'react';
import { Header, Footer } from '../components';
import { Layout, MainLayout } from '../layouts';

interface IMainProps {
	children: React.ReactNode;
}

export const Main: React.FunctionComponent<IMainProps> = () => {
	console.log({ history });
	return (
		<Layout>
			<Header />
			<MainLayout>Hello</MainLayout>
			<Footer />
		</Layout>
	);
};
