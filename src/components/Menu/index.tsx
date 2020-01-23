import React from 'react';
import { MenuStyle, MenuContainer, MenuLink, MenuImg } from './style';

export const Menu = () => {
	return (
		<MenuStyle>
			<MenuContainer start='flex-start'>
				<MenuLink to='/'>Home</MenuLink>
				<MenuLink to='/'>Confirmar Presença</MenuLink>
				<MenuLink to='/'>Localização</MenuLink>
			</MenuContainer>
			<MenuContainer start='center'>
				<MenuImg src='https://i.ibb.co/cwmjzBG/brasao.png' />
			</MenuContainer>
			<MenuContainer start='flex-end'>
				Faltam X dias!
			</MenuContainer>
		</MenuStyle>
	);
};
