import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';



const App = () => {

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onTopicSelect
  } = useApplicationData();

  // If likedList is not empty the alert in the header will display.
  const hasLikedItem = (state.likedList.length) ? true : false;

  return (
    <div className="App">

      <HomeRoute
        onPhotoSelect={onPhotoSelect}
        updateToFavPhotoIds={updateToFavPhotoIds}
        hasLikedItem={hasLikedItem}
        photos={state.photos}
        topics={state.topics}
        onTopicSelect={onTopicSelect} />

      {state.modal.isOpen === true && <PhotoDetailsModal
        onPhotoSelect={onPhotoSelect}
        id={state.modal.photoId}
        updateToFavPhotoIds={updateToFavPhotoIds}
        photos={state.photos} />}

    </div>
  );
};

export default App;
