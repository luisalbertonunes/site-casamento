import styled from 'styled-components';
import { Flex } from '@captalys-platform/core';

export const FooterStyle = styled(Flex).attrs({
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
	height: '100%',
	direction: 'row'
})`
	background-color: #333;
	padding:5px;
`;