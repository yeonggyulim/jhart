import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { Spin } from 'antd';
import * as Pages from '../pages';
import * as Layouts from '../layouts';

const LazyAdmin = loadable(() => import('../pages/Admin'));

const Router: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/admin">
					<Layouts.SideLayout>
						<LazyAdmin fallback={<Spin tip="Loading..." />} />
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
