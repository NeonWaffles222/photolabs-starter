import React from "react";

import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const allPhotos = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        id={photo.id}
        location={photo.location}
        urls={photo.urls}
        user={photo.user}
        addLiked={props.addLiked}
        switchModal={props.switchModal}
      />
    );
  });
  return (
    <ul className="photo-list">
      {allPhotos}
    </ul>
  );
};

export default PhotoList;
