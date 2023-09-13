import React from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { hasLikedItem, onPhotoSelect, updateToFavPhotoIds, photos, topics, onTopicSelect, likedList, onViewFavPhotos } = props;

  return (
    <div className="home-route">
      <TopNavigation displayAlert={hasLikedItem} topics={topics} onTopicSelect={onTopicSelect} onViewFavPhotos={onViewFavPhotos} />
      <PhotoList updateToFavPhotoIds={updateToFavPhotoIds} onPhotoSelect={onPhotoSelect} photos={photos} likedList={likedList} />
    </div>
  );
};

export default HomeRoute;
