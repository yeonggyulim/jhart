import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Switch>
          <Route path="/information/map" />
          <Route path="/information/career" />
          <Route path="/information" />
        </Switch>
        <Switch>
          {/* TODO: change name to buddha-statue, antique, character */}
          <Route path="/processing/probuddha" />
          <Route path="/processing/probequest" />
          <Route path="/processing/procha" />
          <Route path="/processing" />
        </Switch>
        <Switch>
          <Route path="/gallery/art-exhibition" />
          <Route path="/gallery/diorama" />
          <Route path="/gallery/antique-reproduction" />
          <Route path="/gallery/cultural-assets" />
          <Route path="/gallery/statue" />
          <Route path="/gallery/sculpture" />
          <Route path="/gallery/character" />
          <Route path="/gallery/model" />
          <Route path="/gallery" />
        </Switch>
        <Switch>
          <Route path="/buddhism-art/buddha-statue" />
          <Route path="/buddhism-art/buddhist-sculpture" />
          <Route path="/buddhism-art/buddhist-architecture" />
          <Route path="/buddhism-art/buddhist-goods" />
          <Route path="/buddhism-art/3d-data" />
          <Route path="/buddhism-art" />
        </Switch>
        <Route path="/contact" />
        <Route path="/" />
        {/* TODO: Error Page */}
        <Route />
      </Switch>
    </>
  );
}

export default App;
