import React from 'react';
import { useHistory } from 'react-router-dom';

type NavigationProps = {
	navigations: {
		title: string;
		link: string;
	}[];
};

const Navigation = ({ navigations }: NavigationProps) => {
  const history = useHistory();
  return (
    <div className="outer-layout navigation">
      <div className="inner-layout navigation">
        <nav>
          {navigations.map((navigation, i) => {
            return (
              <a key={i} onClick={() => history.push(navigation.link)}>
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
