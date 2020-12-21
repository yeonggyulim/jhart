import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Pages from '../pages';

const Router: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={'/'} component={Pages.Main} />
				<Route component={Pages.NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
