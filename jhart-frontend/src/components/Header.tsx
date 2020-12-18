import * as React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
	color: red;
`;

interface IHeaderProps {
	children?: React.Component;
}

export const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	return <HeaderBlock>Header</HeaderBlock>;
};
