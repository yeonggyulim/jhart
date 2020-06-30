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
	LoginPage,
	RegisterPage,
} from './pages';

const App = () => {
	return (
		<Switch>
			<Route path="/information/map" component={MapPage} />
			<Route path="/information/career" component={CareerPage} />
			<Route path="/information" exact={true} component={InformationPage} />
			{/* TODO: change name to buddha-statue, antique, character */}
			<Route path="/processing/probuddha" />
			<Route path="/processing/probequest" />
			<Route path="/processing/procha" />
			<Route path="/processing" exact={true} component={ProcessingPage} />
			<Route path="/modeling/art-exhibition" />
			<Route path="/modeling/diorama" />
			<Route path="/modeling/antique-reproduction" />
			<Route path="/modeling/cultural-assets" />
			<Route path="/modeling/statue" />
			<Route path="/modeling/sculpture" />
			<Route path="/modeling/character" />
			<Route path="/modeling/model" />
			<Route path="/modeling" exact={true} component={ModelingPage} />
			<Route path="/buddhism-art/buddha-statue" />
			<Route path="/buddhism-art/buddhist-sculpture" />
			<Route path="/buddhism-art/buddhist-architecture" />
			<Route path="/buddhism-art/buddhist-goods" />
			<Route path="/buddhism-art/3d-data" />
			<Route path="/buddhism-art" exact={true} component={BuddhismArtPage} />
			<Route path="/contact-us" component={ContactPage} />
			<Route path="/login" component={LoginPage} />
			<Route path="/register" component={RegisterPage} />
			<Route path="/" exact component={MainPage} />
			{/* TODO: Error Page */}
			<Route />
		</Switch>
	);
};

export default App;
