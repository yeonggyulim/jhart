import React from 'react';

type NavigationProps = {
	navigations: string[];
};

const Navigation = ({ navigations }: NavigationProps) => {
  return (
    <div className="outer-layout navigation">
      <div className="inner-layout navigation">
        <nav>
          {navigations.map((navigation, i) => {
            return <a key={i}>{navigation}</a>;
          })}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
