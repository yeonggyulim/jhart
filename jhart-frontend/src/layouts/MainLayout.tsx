import * as React from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../components';
import { Responsive } from './';

const LayoutBlock = styled.div`
	padding-top: 60px; /* 헤더 높이 */
	height: 100vh;
`;

const MainLayoutBlock = styled.div`
	margin: 2rem auto;
	height: calc(100% - 120px);
	transition: all 0.3s;
	position: relative;
	background-color: yellow;

	${({ theme }) => theme.media.tablet`
        margin: 1rem auto;
        height: calc(100% - 120px + 2rem);
    `}
	${({ theme }) => theme.media.mobile`
        margin: 0.5rem auto;
        height: calc(100% - 120px + 3rem);
    `}
`;

interface IMainLayoutProps {
	children?: React.ReactNode;
}

export const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({
	children,
}) => {
	return (
		<LayoutBlock>
			<Header />
			<MainLayoutBlock>
				<Responsive center={true}>{children}</Responsive>
			</MainLayoutBlock>
			<Footer />
		</LayoutBlock>
	);
};
