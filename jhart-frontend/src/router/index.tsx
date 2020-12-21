import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Pages from '../pages';
import * as Layouts from '../layouts';

const Router: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Layouts.MainLayout>
				<Switch>
					<Route exact path={'/'} component={Pages.Main} />
					<Route component={Pages.NotFound} />
				</Switch>
			</Layouts.MainLayout>
		</BrowserRouter>
	);
};

export default Router;
