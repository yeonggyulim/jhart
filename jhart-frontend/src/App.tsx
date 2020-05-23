import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  MainPage,
  InformationPage,
  CareerPage,
  MapPage,
  ProcessingPage,
  ModelingPage,
  ContactPage,
  BuddhismArtPage,
} from './pages';
import { Footer } from './components';
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
      <PageRoute path="/information/map" component={MapPage} />
      <PageRoute path="/information/career" component={CareerPage} />
      <PageRoute path="/information" exact={true} component={InformationPage} />
      {/* TODO: change name to buddha-statue, antique, character */}
      <Route path="/processing/probuddha" />
      <Route path="/processing/probequest" />
      <Route path="/processing/procha" />
      <PageRoute path="/processing" exact={true} component={ProcessingPage} />
      <Route path="/modeling/art-exhibition" />
      <Route path="/modeling/diorama" />
      <Route path="/modeling/antique-reproduction" />
      <Route path="/modeling/cultural-assets" />
      <Route path="/modeling/statue" />
      <Route path="/modeling/sculpture" />
      <Route path="/modeling/character" />
      <Route path="/modeling/model" />
      <PageRoute path="/modeling" exact={true} component={ModelingPage} />
      <Route path="/buddhism-art/buddha-statue" />
      <Route path="/buddhism-art/buddhist-sculpture" />
      <Route path="/buddhism-art/buddhist-architecture" />
      <Route path="/buddhism-art/buddhist-goods" />
      <Route path="/buddhism-art/3d-data" />
      <PageRoute path="/buddhism-art" exact={true} component={BuddhismArtPage} />
      <PageRoute path="/contact-us" component={ContactPage} />
      <PageRoute path="/" exact component={MainPage} />
      {/* TODO: Error Page */}
      <Route />
    </Switch>
  //   <Footer />
  // </div>
  );
};

export default App;
