import React from 'react';

import TopicList from 'components/TopicList';
import FavIcon from './FavIcon';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ displayAlert, topics, onTopicSelect }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => onTopicSelect(null)}>PhotoLabs</span>
      <TopicList topics={topics} onTopicSelect={onTopicSelect} />
      <FavIcon selected={true} displayAlert={displayAlert} />
    </div>
  );
};

export default TopNavigation;