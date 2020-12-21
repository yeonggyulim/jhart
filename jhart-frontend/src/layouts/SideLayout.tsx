import * as React from 'react';
import styled from 'styled-components';
import { Layout, Responsive } from '.';

const SideLayoutBlock = styled.div`
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

interface ISideLayoutProps {
	children?: React.ReactNode;
}

export const SideLayout: React.FunctionComponent<ISideLayoutProps> = ({
	children,
}) => {
	return (
		<Layout>
			<SideLayoutBlock>
				<Responsive center={true}>{children}</Responsive>
			</SideLayoutBlock>
		</Layout>
	);
};
