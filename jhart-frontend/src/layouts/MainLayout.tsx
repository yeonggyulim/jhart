import * as React from 'react';
import styled from 'styled-components';

const MainLayoutBlock = styled.div`
	margin: 2rem auto;
	height: calc(100% - 120px);
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
        margin: 1rem auto;
        height: calc(100% - 120px + 2rem);
        width: calc(100% - 2rem);
        ${() => `&::before{
            content:"태블릿"
        }`}
    `}
    ${({ theme }) => theme.media.mobile`
        margin: 0.5rem auto;
        height: calc(100% - 120px + 3rem);
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
