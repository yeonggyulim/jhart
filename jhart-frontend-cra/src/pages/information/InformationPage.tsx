import React from 'react';
import information from '../../images/information.gif';
import { Header, Footer, Navigation, Center } from '../../components';

const InformationPage = () => {
	return (
		<>
			<Header />
			<Navigation />
			<Center>
				<img src={information} alt="information" />
			</Center>
			<Footer />
		</>
	);
};

export default InformationPage;
