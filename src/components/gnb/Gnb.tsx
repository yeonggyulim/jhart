import React from 'react';
import { Nav } from 'react-bootstrap';

type Props = {
	active: string | number;
};

const Gnb = ({ active }: Props) => {
  return (
    <Nav className="justify-content-center" variant="pills" activeKey={active}>
      <Nav.Item>
        <Nav.Link href="/information" eventKey={0}>
					회사 소개
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/processing" eventKey={1}>
					작업 공정
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/gallery" eventKey={2}>
					조형 작업
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/buddhism-art" eventKey={3}>
					불교 미술
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="contact-us" eventKey={4}>
					고객 센터
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Gnb;
