import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="outer-layout header">
      <div className="inner-layout">
          <nav>
            <ul>
                <li>
                    <Link to ='/information'>회사 소개</Link>
                </li>
                <li>
                    <Link to ='/processing'>작업 공정</Link>
                </li>
                <li>
                    <Link to ='/gallery'>조형 작업</Link>
                </li>
                <li>
                    <Link to ='/buddhism-art'>불교 미술</Link>
                </li>
                <li>
                    <Link to ='/contact-us'>고객 센터</Link>
                </li>
            </ul>
          </nav>
      </div>
    </div>
  );
};

export default Header;
