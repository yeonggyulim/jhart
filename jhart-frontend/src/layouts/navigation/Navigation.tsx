import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

type NavigationProps = {
	navigations: {
		title: string;
		link: string;
	}[];
};

const Navigation = ({ navigations }: NavigationProps) => {
  const [activeNav, setActiveNav] = useState(0);

  const history = useHistory();
  return (
    <div className="outer-layout navigation">
      <div className="inner-layout navigation">
        <nav>
          {navigations.map((navigation, i) => {
            return (
              <a
                key={i}
                className={activeNav === i ? 'active' : ''}
                onClick={() => {
                  history.push(navigation.link);
                  setActiveNav(i);
                }}
              >
                {navigation.title}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
