import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { GridInitial, FlexInitial } from './style.routes';
import { Home, About } from '../pages';
import { Menu } from '../components';

export const Routes = () => {
	return (
		<BrowserRouter>
			<GridInitial>
				<FlexInitial area='Header'>
					Header
					<Menu />
					<Link to="/about">teste</Link>
				</FlexInitial>
				<FlexInitial area='Content'>
					<p>Content</p>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/about' component={About} />
					</Switch>
				</FlexInitial>
				<FlexInitial area='Footer'>
					Footer
				</FlexInitial>
			</GridInitial>
		</BrowserRouter>
	);
};