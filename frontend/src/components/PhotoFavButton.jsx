import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [liked, setLiked] = useState(false);
  const handleClick = () => { setLiked((liked === true) ? false : true); };
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <div onClick={handleClick}>
          <FavIcon displayAlert={false} selected={liked} />
        </div>
      </div>
    </div>
  );
}

export default PhotoFavButton;