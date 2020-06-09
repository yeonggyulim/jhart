import React from 'react';
import information from '../../images/information.gif';
import { Header, Footer, Navigation } from '../../components';
import { HeaderContainer, NavigationContainer } from '../../containers';

const InformationPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div className="outer-layout information">
        <div className="inner-layout">
          <img src={information} alt="information" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InformationPage;
