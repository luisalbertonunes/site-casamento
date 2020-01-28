import React from 'react';
import { MenuStyle, MenuContainer, MenuLink, MenuImg, MenuText, MenuTextSimple } from './style';
import Logo from '../../images/logo.svg';

const calcDaysBetweenDates = () => {

	const date = new Date();
	const dd = date.getDate();
	const mm = date.getMonth();
	const yyyy = date.getFullYear();

	const today = new Date(yyyy, mm, dd);
	const weddingDay = new Date(2020, 7 - 1, 4);

	const days = Math.round((weddingDay - today) / (1000 * 60 * 60 * 24));

	return days;

};

export const Menu = () => {
	return (
		<MenuStyle>
			<MenuContainer start='flex-start'>
				<MenuLink to='/'>Home</MenuLink>
				<MenuLink to='/'>Confirmar Presença</MenuLink>
				<MenuLink to='/'>Localização</MenuLink>
			</MenuContainer>
			<MenuContainer start='center'>
				<MenuImg src={Logo} />
			</MenuContainer>
			<MenuContainer start='flex-end'>
				<MenuText>Faltam <MenuTextSimple size='25px'>{calcDaysBetweenDates()}</MenuTextSimple> dias!</MenuText>
			</MenuContainer>
		</MenuStyle>
	);
};
