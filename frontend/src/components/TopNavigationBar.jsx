import React from 'react';

import TopicList from 'components/TopicList';
import FavIcon from './FavIcon';
import '../styles/TopNavigationBar.scss';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavIcon selected={true} />
    </div>
  );
};

export default TopNavigation;