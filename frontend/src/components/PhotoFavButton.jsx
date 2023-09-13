import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { id, updateToFavPhotoIds, likedList } = props;

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <div onClick={() => {
          updateToFavPhotoIds(id);
        }}>
          <FavIcon displayAlert={false} selected={likedList.includes(id)} />
        </div>
      </div>
    </div>
  );
}

export default PhotoFavButton;