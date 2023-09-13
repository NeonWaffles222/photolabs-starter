import React from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { hasLikedItem, onPhotoSelect, updateToFavPhotoIds, photos, topics, onTopicSelect } = props;

  return (
    <div className="home-route">
      <TopNavigation displayAlert={hasLikedItem} topics={topics} onTopicSelect={onTopicSelect} />
      <PhotoList updateToFavPhotoIds={updateToFavPhotoIds} onPhotoSelect={onPhotoSelect} photos={photos} />
    </div>
  );
};

export default HomeRoute;
