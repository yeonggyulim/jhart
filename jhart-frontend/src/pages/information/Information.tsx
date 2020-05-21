import React from 'react';
import information from '../../images/information.gif';

const Information = () => {
  return (
    <div className="outer-layout information">
      <div className="inner-layout">
        <img
          src={information}
          alt="information"
        />
      </div>
    </div>
  );
};

export default Information;
