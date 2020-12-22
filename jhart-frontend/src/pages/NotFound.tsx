import * as React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const NotFoundBlock = styled.div`
	font-size: 220px;
	color: ${oc.gray[8]};
`;
interface INotFoundProps {
	children?: React.ReactNode;
}

export const NotFound: React.FunctionComponent<INotFoundProps> = () => {
	return <NotFoundBlock>404</NotFoundBlock>;
};
