import styled from 'styled-components';
import { Flex, Image, Button } from '@captalys-platform/core';
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
	font-size: 16px;
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
	font-size: 16px;
`;

export const MenuTextSimple = styled.span<DefaultMenuInterface>`
	font-size: ${({ size }) => size ? size : '16px'};
`;

export const MenuLinkButton = styled.button`
	border:1px solid  #F9C7B4;
	border-radius: 5px;
	padding: 10px;
	color: #333;
	font-family: Fabada;
	font-size: 15px;
	background-color: white;
	cursor: pointer;
	outline: none;
	transition: .3s;

	&:hover{
		color: white;
		background-color:  #F9C7B4;
	}


`;