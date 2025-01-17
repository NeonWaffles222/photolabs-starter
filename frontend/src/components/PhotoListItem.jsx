import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { profile, username } = props.user;
  const { regular } = props.urls;
  const { city, country } = props.location;
  const onPhotoSelect = props.onPhotoSelect;
  return (
    <li className="photo-list__item">
      <PhotoFavButton id={props.id} updateToFavPhotoIds={props.updateToFavPhotoIds} />
      <img className="photo-list__image" src={regular} onClick={() => onPhotoSelect(props.id)} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          {username}
          <div className="photo-list__user-location">{city}, {country}</div>
        </div>
      </div>
    </li>

  );
};

export default PhotoListItem;
