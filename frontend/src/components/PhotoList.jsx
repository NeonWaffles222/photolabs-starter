import React from "react";

import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";
import "../styles/PhotoList.scss";

const PhotoList = () => {
  const allPhotos = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        location={photo.location}
        urls={photo.urls}
        user={photo.user}
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
