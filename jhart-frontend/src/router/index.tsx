import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage } from '../pages';

const Router: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={MainPage}></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
