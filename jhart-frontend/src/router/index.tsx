import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Pages from '../pages';
import * as Layouts from '../layouts';

const Router: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/admin">
					<Layouts.SideLayout>
						<Pages.NotFound />
					</Layouts.SideLayout>
				</Route>
				<Layouts.MainLayout>
					<Switch>
						<Route exact path="/" component={Pages.Main} />
						<Route component={Pages.NotFound} />
					</Switch>
				</Layouts.MainLayout>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
