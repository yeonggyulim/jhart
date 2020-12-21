import * as React from 'react';
import styled from 'styled-components';

interface IResponsiveBlockProps {
	center: boolean;
}

const ResponsiveBlock = styled.div`
	width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: ${(props: IResponsiveBlockProps) =>
		props.center ? 'center' : ''};
	align-items: center;

	${({ theme }) => theme.media.desktop`        
        width: 990px;
        ${() => `&::before{
            content:"데스크톱"
        }`};
    `}
	${({ theme }) => theme.media.tablet`
        width: calc(100% - 2rem);
        ${() => `&::before{
            content:"태블릿"
        }`}
    `}
    ${({ theme }) => theme.media.mobile`
        width: calc(100% - 1rem);
        ${() => `&::before{
            content:"모바일"
        }`}
    `}
`;

interface IResponsiveProps {
	children?: React.ReactNode;
	center?: boolean;
}

export const Responsive: React.FunctionComponent<IResponsiveProps> = ({
	children,
	center,
}) => {
	return <ResponsiveBlock center={center}>{children}</ResponsiveBlock>;
};
