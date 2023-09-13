import React from "react";

import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const photos = props.photos;
  const allPhotos = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        id={photo.id}
        location={photo.location}
        urls={photo.urls}
        user={photo.user}
        updateToFavPhotoIds={props.updateToFavPhotoIds}
        onPhotoSelect={props.onPhotoSelect}
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
