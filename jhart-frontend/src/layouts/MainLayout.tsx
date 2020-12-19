import * as React from 'react';
import styled from 'styled-components';

const MainLayoutBlock = styled.div`
	margin: 0 auto;
	margin-top: 2rem;
	width: 1200px;
	transition: all 0.3s;
	position: relative;
	background-color: yellow;

	${({ theme }) => theme.media.desktop`        
        width: 990px;
        ${() => `&::before{
            content:"데스크톱"
        }`};
    `}
	${({ theme }) => theme.media.tablet`
        margin-top: 1rem;
        width: calc(100% - 2rem);
        ${() => `&::before{
            content:"태블릿"
        }`}
    `}
    ${({ theme }) => theme.media.mobile`
        margin-top: 0.5rem;
        width: calc(100% - 1rem);
        ${() => `&::before{
            content:"모바일"
        }`}
    `}
`;

interface IMainLayoutProps {
	children?: React.ReactNode;
}

export const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({
	children,
}) => {
	return <MainLayoutBlock>{children}</MainLayoutBlock>;
};
