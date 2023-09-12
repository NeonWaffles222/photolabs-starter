import React, { useState, useCallback } from 'react';

//import PhotoListItem from './components/PhotoListItem';
//import TopicListItem from 'components/TopicListItem';
//import TopicList from 'components/TopicList';
// import TopNavigation from 'components/TopNavigationBar';
// import PhotoList from 'components/PhotoList';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    useModal,
    useLiked
  } = useApplicationData();

  const hasLikedItem = (state.likedList.length) ? true : false;

  return (
    <div className="App">
      <HomeRoute useModal={useModal} useLiked={useLiked} hasLikedItem={hasLikedItem} />
      {state.modal.isOpen === true && <PhotoDetailsModal useModal={useModal} id={state.modal.photoId} useLiked={useLiked} />}
    </div>
  );
};

export default App;
