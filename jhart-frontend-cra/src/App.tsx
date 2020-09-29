import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
	MainPage,
	InformationPage,
	CareerPage,
	MapPage,
	ProcessingPage,
	BuddhaStatuePage,
	AntiquePage,
	BuddhaCharacterPage,
	ModelingPage,
	ContactPage,
	BuddhismArtPage,
	BuddhismStatuePage,
	BuddhistArchitecturePage,
	BuddhistGoodsPage,
	BuddhistSculpturePage,
	ThreedDataPage,
	LoginPage,
	RegisterPage,
	AntiqueReproductionPage,
	ArtExhibitionPage,
	CharacterPage,
	CulturalAssetsPage,
	DioramaPage,
	ModelPage,
	SculpturePage,
	StatuePage,
} from './pages';

const App = () => {
	return (
		<Switch>
			<Route path="/information/map" component={MapPage} />
			<Route path="/information/career" component={CareerPage} />
			<Route path="/information" exact={true} component={InformationPage} />
			{/* TODO: change name to buddha-statue, antique, character */}
			<Route path="/processing/buddha-statue" component={BuddhaStatuePage} />
			<Route path="/processing/antique" component={AntiquePage} />
			<Route path="/processing/character" component={BuddhaCharacterPage} />
			<Route path="/processing" exact={true} component={ProcessingPage} />
			<Route path="/modeling/art-exhibition" component={ArtExhibitionPage} />
			<Route path="/modeling/diorama" component={DioramaPage} />
			<Route
				path="/modeling/antique-reproduction"
				component={AntiqueReproductionPage}
			/>
			<Route path="/modeling/cultural-assets" component={CulturalAssetsPage} />
			<Route path="/modeling/statue" component={StatuePage} />
			<Route path="/modeling/sculpture" component={SculpturePage} />
			<Route path="/modeling/character" component={CharacterPage} />
			<Route path="/modeling/model" component={ModelPage} />
			<Route path="/modeling" exact={true} component={ModelingPage} />
			<Route
				path="/buddhism-art/buddhism-statue"
				component={BuddhismStatuePage}
			/>
			<Route
				path="/buddhism-art/buddhist-sculpture"
				component={BuddhistSculpturePage}
			/>
			<Route
				path="/buddhism-art/buddhist-architecture"
				component={BuddhistArchitecturePage}
			/>
			<Route
				path="/buddhism-art/buddhist-goods"
				component={BuddhistGoodsPage}
			/>
			<Route path="/buddhism-art/3d-data" component={ThreedDataPage} />
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
