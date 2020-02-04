import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GridInitial, FlexInitial } from './style';
import { HomePage, CheckInPage, LocalPage } from '../pages';
import { Menu, Footer } from '../components';

export const Routes = () => {
	return (
		<BrowserRouter>
			<GridInitial>
				<FlexInitial area='Header'>
					<Menu />
					{/* <Link to="/about">teste</Link> */}
				</FlexInitial>
				<FlexInitial area='Content'>
					<p>Content</p>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/checkin' component={CheckInPage} />
						<Route path='/local' component={LocalPage} />
					</Switch>
				</FlexInitial>
				<FlexInitial area='Footer'>
					<Footer />
				</FlexInitial>
			</GridInitial>
		</BrowserRouter>
	);
};
