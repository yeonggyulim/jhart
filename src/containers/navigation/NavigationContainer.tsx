import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { Navigation } from '../../layouts';

const NavigationContainer = () => {
  const navigations = [
    [],
    [
      { title: '회사 소개', link: '/information' },
      { title: '찾아오시는 길', link: '/information/map' },
      { title: '연혁', link: '/information/career' },
    ],
    [
      { title: '대불 조성', link: '/processing/probuddha' },
      { title: '유지 보수', link: '/processing/probequest' },
      { title: '캐릭터', link: '/procssing/procha' },
    ],
    [
      { title: '전시 미술', link: '/modeling/art-exhibition' },
      { title: '디오라마', link: '/modeling/diorama' },
      { title: '유물 복제', link: '/modeling/antique-reproduction' },
      { title: '문화재', link: '/modeling/cultural-assets' },
      { title: '인물', link: '/modeling/statue' },
      { title: '조형물', link: '/modeling/sculpture' },
      { title: '캐릭터', link: '/modeling/character' },
      { title: '모형', link: '/modeling/model' },
    ],
    [
      { title: '대불 조성', link: '/buddhism-art/buddha-statue' },
      { title: '불교 조각', link: '/buddhism-art/buddhist-sculpture' },
      { title: '불교 건축', link: '/buddhism-art/buddhist-architecture' },
      { title: '불교 용품', link: '/buddhism-art/buddhist-goods' },
      { title: '3D Data', link: '/buddhism-art/3d-data' },
    ],
    [],
  ];

  const gnb = useSelector((state: RootState) => state.navigation.navigation);
  return <Navigation navigations={navigations[gnb]} />;
};

export default NavigationContainer;
