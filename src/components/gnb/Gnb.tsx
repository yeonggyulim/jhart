import React from 'react';
import { Nav } from 'react-bootstrap';

const Gnb = () => {
  return (
    <Nav className="justify-content-center" activeKey="/information">
      <Nav.Item>
        <Nav.Link href="/information">회사 소개</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/processing" eventKey="link-1">
					작업 공정
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/gallery" eventKey="link-2">
					조형 작업
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="buddhism-art" eventKey="disabled">
					불교 미술
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="contact-us" eventKey="disabled">
					고객 센터
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Gnb;
