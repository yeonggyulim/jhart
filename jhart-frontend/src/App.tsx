import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Main,
  Information,
  Career,
  Map,
  Processing,
  Modeling,
  Contact,
  BuddhismArt,
} from './pages';
import { Footer } from './layouts';
import { HeaderContainer, NavigationContainer } from './containers';

type PageRouteProps = {
	component: any;
	path: string;
	exact?: boolean;
};

const PageRoute = ({
  component: Component,
  path,
  exact,
  ...rest
}: PageRouteProps) => (
  <Route
    path={path}
    exact={exact}
    {...rest}
    render={props => (
      <div id="page">
        <HeaderContainer />
        <NavigationContainer />
        <Component {...props} />
        <Footer />
      </div>
    )}
  />
);

const App = () => {
  return (
  // <div id="page">
  //   <HeaderContainer />
  //   <Navigation />
    <Switch>
      <PageRoute path="/information/map" component={Map} />
      <PageRoute path="/information/career" component={Career} />
      <PageRoute path="/information" exact={true} component={Information} />
      {/* TODO: change name to buddha-statue, antique, character */}
      <Route path="/processing/probuddha" />
      <Route path="/processing/probequest" />
      <Route path="/processing/procha" />
      <PageRoute path="/processing" exact={true} component={Processing} />
      <Route path="/modeling/art-exhibition" />
      <Route path="/modeling/diorama" />
      <Route path="/modeling/antique-reproduction" />
      <Route path="/modeling/cultural-assets" />
      <Route path="/modeling/statue" />
      <Route path="/modeling/sculpture" />
      <Route path="/modeling/character" />
      <Route path="/modeling/model" />
      <PageRoute path="/modeling" exact={true} component={Modeling} />
      <Route path="/buddhism-art/buddha-statue" />
      <Route path="/buddhism-art/buddhist-sculpture" />
      <Route path="/buddhism-art/buddhist-architecture" />
      <Route path="/buddhism-art/buddhist-goods" />
      <Route path="/buddhism-art/3d-data" />
      <PageRoute path="/buddhism-art" exact={true} component={BuddhismArt} />
      <PageRoute path="/contact-us" component={Contact} />
      <PageRoute path="/" exact component={Main} />
      {/* TODO: Error Page */}
      <Route />
    </Switch>
  //   <Footer />
  // </div>
  );
};

export default App;
