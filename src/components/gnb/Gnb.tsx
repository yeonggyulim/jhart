import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navigation } from '../../constants/navigation';

type GnbProps = {
	active: string | number;
	onChangeNavigation: (navigation: Navigation) => void;
};

const Gnb = ({ active, onChangeNavigation }: GnbProps) => {
  return (
    <Nav className="justify-content-center" variant="pills" activeKey={active}>
      <Nav.Item>
        <Nav.Link
          eventKey={0}
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
          eventKey={1}
          onClick={() => onChangeNavigation(Navigation.Processing)}
        >
					작업 공정
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey={2}
          onClick={() => onChangeNavigation(Navigation.Modeling)}
        >
					조형 작업
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey={3}
          onClick={() => onChangeNavigation(Navigation.BuddhismArt)}
        >
					불교 미술
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey={4}
          onClick={() => onChangeNavigation(Navigation.ContactUs)}
        >
					고객 센터
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Gnb;
