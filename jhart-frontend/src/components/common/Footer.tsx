import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p className="title">전흥공예</p>
      <p className="information">대표: 임병시 Tel: 031-989-2344</p>
      <p className="copyright">
				COPYRIGHT &copy; {new Date().getFullYear()} 田興工藝 ALL RIGHTS RESERVED
      </p>
    </footer>
  );
};

export default Footer;
