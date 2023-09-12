import React from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { hasLikedItem, useModal, useLiked } = props;
  return (
    <div className="home-route">
      <TopNavigation displayAlert={hasLikedItem} />
      <PhotoList useLiked={useLiked} useModal={useModal} photos={photos} />
    </div>
  );
};

export default HomeRoute;
