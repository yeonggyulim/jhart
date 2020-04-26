import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, Information, Career, Map, Contact } from './pages';
import { Header, Footer } from './layouts';

const App = () => {
  return (
    <div id="page">
      <Header />
      <Switch>
        <Route path="/information/map" component={Map} />
        <Route path="/information/career" component={Career} />
        <Route path="/information" exact component={Information} />
        {/* TODO: change name to buddha-statue, antique, character */}
        <Route path="/processing/probuddha" />
        <Route path="/processing/probequest" />
        <Route path="/processing/procha" />
        <Route path="/processing" />
        <Route path="/gallery/art-exhibition" />
        <Route path="/gallery/diorama" />
        <Route path="/gallery/antique-reproduction" />
        <Route path="/gallery/cultural-assets" />
        <Route path="/gallery/statue" />
        <Route path="/gallery/sculpture" />
        <Route path="/gallery/character" />
        <Route path="/gallery/model" />
        <Route path="/gallery" />
        <Route path="/buddhism-art/buddha-statue" />
        <Route path="/buddhism-art/buddhist-sculpture" />
        <Route path="/buddhism-art/buddhist-architecture" />
        <Route path="/buddhism-art/buddhist-goods" />
        <Route path="/buddhism-art/3d-data" />
        <Route path="/buddhism-art" />
        <Route path="/contact-us" component={Contact} />
        <Route path="/" exact component={Main} />
        {/* TODO: Error Page */}
        <Route />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
