import React from 'react';
import { useDispatch } from 'react-redux';
import { changeNavigation } from '../../modules/navigation';
import { Header } from '../../layouts';
import { Navigation } from '../../constants/navigation';
import { useHistory } from 'react-router-dom';

const HeaderContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onChangeNavigation = (navigation: Navigation) => {
    dispatch(changeNavigation(navigation));
    switch (navigation) {
    case Navigation.Home:
      history.push('/');
      break;
    case Navigation.Information:
      history.push('/information');
      break;
    case Navigation.Processing:
      history.push('/processing');
      break;
    case Navigation.Modeling:
      history.push('/modeling');
      break;
    case Navigation.BuddhismArt:
      history.push('/buddhism-art');
      break;
    case Navigation.ContactUs:
      history.push('/contact-us');
      break;
    }
  };

  return <Header onChangeNavigation={onChangeNavigation} />;
};

export default HeaderContainer;
