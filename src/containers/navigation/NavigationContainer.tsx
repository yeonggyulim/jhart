import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { Navigation } from '../../layouts';

const NavigationContainer = () => {
  const navigations = [
    [],
    ['회사 소개', '찾아오시는 길', '연혁'],
    ['대불 조성', '유지 보수', '캐릭터'],
    [
      '전시 미술',
      '디오라마',
      '유물 복제',
      '문화재',
      '인물',
      '조형물',
      '캐릭터',
      '모형',
    ],
    ['대불 조성', '불교 조각', '불교 건축', '불교 용품', '3D Data'],
    [],
  ];

  const gnb = useSelector((state: RootState) => state.navigation.navigation);
  return <Navigation navigations={navigations[gnb]} />;
};

export default NavigationContainer;
