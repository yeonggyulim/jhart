import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage } from '../pages';

// interface IRouterProps {}

const Router: React.FunctionComponent = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={MainPage}></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
