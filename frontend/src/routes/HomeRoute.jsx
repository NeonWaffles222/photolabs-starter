import React, { useState, useCallback } from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ switchModal }) => {
  const [likedList, setLikedList] = useState([]);
  const addLiked = useCallback((id) => {
    setLikedList((liked) => (likedList.includes(id)) ? likedList.filter(likedId => id !== likedId) : [...liked, id]);
  }, [likedList]);
  const hasLikedItem = (likedList.length) ? true : false;
  return (
    <div className="home-route">
      <TopNavigation displayAlert={hasLikedItem} />
      <PhotoList addLiked={addLiked} switchModal={switchModal} />
    </div>
  );
};

export default HomeRoute;
