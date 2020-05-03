import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navigation } from '../../constants/navigation';

type GnbProps = {
	activeGnb: Navigation;
	onChangeNavigation: (navigation: Navigation) => void;
};

const Gnb = ({ activeGnb, onChangeNavigation }: GnbProps) => {
  const gnbs = [
    {
      title: '회사 소개',
      nav: Navigation.Information,
    },
    {
      title: '작업 공정',
      nav: Navigation.Processing,
    },
    {
      title: '조형 작업',
      nav: Navigation.Modeling,
    },
    {
      title: '불교 미술',
      nav: Navigation.BuddhismArt,
    },
    {
      title: '고객 센터',
      nav: Navigation.ContactUs,
    },
  ];

  return (
    <Nav className="justify-content-center">
      {gnbs.map(gnb => {
        return (
          <Nav.Item key={gnb.nav}>
            <Nav.Link
              className={activeGnb === gnb.nav ? 'active' : ''}
              onClick={() => {
                onChangeNavigation(gnb.nav);
              }}
            >
              {gnb.title}
            </Nav.Link>
          </Nav.Item>
        );
      })}
      {/* <Nav.Item>
        <Nav.Link
          // eventKey={0}
          onClick={() => {
            onChangeNavigation(Navigation.Information);
            // history.pushState()
          }}
        >
					회사 소개
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          // eventKey={1}
          onClick={() => onChangeNavigation(Navigation.Processing)}
        >
					작업 공정
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          // eventKey={2}
          onClick={() => onChangeNavigation(Navigation.Modeling)}
        >
					조형 작업
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          // eventKey={3}
          onClick={() => onChangeNavigation(Navigation.BuddhismArt)}
        >
					불교 미술
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          // eventKey={4}
          onClick={() => onChangeNavigation(Navigation.ContactUs)}
        >
					고객 센터
        </Nav.Link>
      </Nav.Item> */}
    </Nav>
  );
};

export default Gnb;
