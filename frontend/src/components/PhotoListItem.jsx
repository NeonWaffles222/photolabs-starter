import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { profile, username } = props.user;
  const { regular } = props.urls;
  const { city, country } = props.location;
  const useModal = props.useModal;
  return (
    <li className="photo-list__item">
      <PhotoFavButton id={props.id} useLiked={props.useLiked} />
      <img className="photo-list__image" src={regular} onClick={() => useModal(props.id)} />
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
