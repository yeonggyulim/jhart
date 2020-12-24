import * as React from 'react';
import { Responsive } from '../layouts';
import styled from 'styled-components';
import oc from 'open-color';

const FooterBlock = styled.div`
	/* 레이아웃 */
	display: flex;
	align-items: center;
	height: 60px;
	width: 100vw;
	top: 0px;
	z-index: 5;
	margin-top: auto;

	/* 색상 */
	background: ${oc.indigo[6]};
	color: white;
	border-bottom: 1px solid ${oc.indigo[7]};
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.2);

	/* 폰트 */
	font-size: 2.5rem;
`;

interface IFooterProps {
	children?: React.ReactNode;
}

export const Footer: React.FunctionComponent<IFooterProps> = () => {
	return (
		<FooterBlock>
			<Responsive center={true}>Footer</Responsive>
		</FooterBlock>
	);
};
