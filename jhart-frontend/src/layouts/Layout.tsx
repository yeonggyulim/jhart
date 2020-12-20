import * as React from 'react';
import styled from 'styled-components';

const LayoutBlock = styled.div`
	padding-top: 60px; /* 헤더 높이 */
	height: 100%;
`;

interface ILayoutProps {
	children?: React.ReactNode;
}

export const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
	return <LayoutBlock>{children}</LayoutBlock>;
};
