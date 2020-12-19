import * as React from 'react';
import { Header } from '../components';
import { Layout, MainLayout } from '../layouts';

interface IMainPageProps {
	children: React.ReactNode;
}

export const MainPage: React.FunctionComponent<IMainPageProps> = () => {
	return (
		<Layout>
			<Header />
			<MainLayout>Hello</MainLayout>
		</Layout>
	);
};
