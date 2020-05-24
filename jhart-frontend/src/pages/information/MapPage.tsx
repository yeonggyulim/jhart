import React from 'react';
import map from '../../images/map.jpg';
// import map2 from '/images/map.jpg';
import { Footer } from '../../components';
import { HeaderContainer, NavigationContainer } from '../../containers';

const MapPage = () => {
  return (
    <>
      <HeaderContainer />
      <NavigationContainer />
      <div className="outer-layout map">
        <div className="inner-layout">
          <img src={map} alt="map" />
          <div className="details">
            <div>주소: 경기도 김포시 대곶면 율생리 252-5번지 전흥공예</div>
            <div>연락처: 031-989-2344</div>
            <div>이메일: art2333@daum.net</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MapPage;
