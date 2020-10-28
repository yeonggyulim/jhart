import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

interface IRouterProps {}

const Router: React.FunctionComponent<IRouterProps> = (props) => {
	return (
		<BrowserRouter>
			<Switch>{/* <Route  */}</Switch>
		</BrowserRouter>
	);
};

export default Router;
