import styled from 'styled-components';
import { Flex, Image } from 'captalys-core';
import { Link } from 'react-router-dom';
import { LinkProps } from 'react-router-dom';
import { DefaultMenuInterface } from './interface';

export const MenuStyle = styled(Flex).attrs<DefaultMenuInterface>({
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
	height: '100%',
	direction: 'row'
})`
	background-color: white;
	padding:5px;
	box-shadow: 1px 1px 10px 5px #ccc
`;

export const MenuContainer = styled(Flex).attrs<DefaultMenuInterface>(props => ({
	height: '100%',
	width: '100%',
	direction: 'row',
	justifyContent: props.start ? props.start : 'space-between',
	alignItems: 'center',
	padding: '20px'
}))``;

export const MenuLink = styled(Link) <LinkProps>`
	padding-left: 20px;
	color: #333;
	text-decoration: none;
	&:hover{
		color: #F9C7B4;
	}
`;

export const MenuImg = styled(Image).attrs({
	width: '70x'
})``;

export const MenuText = styled.p<DefaultMenuInterface>`
	color: #333;
	margin: 0px;
	padding: 20px;
`;

export const MenuTextSimple = styled.span<DefaultMenuInterface>`
font-size: ${({ size }) => size ? size : '16px'}
`;
