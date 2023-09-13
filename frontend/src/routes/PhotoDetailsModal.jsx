import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onPhotoSelect, id, updateToFavPhotoIds, photos }) => {

  // Gets the photo that was clicked on
  const filteredPhoto = photos.filter(photo => photo.id === id);
  const [photo] = filteredPhoto;

  // Creates an array of similar photos
  const similarPhotos = Object.keys(photo.similar_photos).map(key => photo['similar_photos'][key]);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={onPhotoSelect} />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton id={photo.id} updateToFavPhotoIds={updateToFavPhotoIds} />
        <img src={photo.urls.regular} className='photo-details-modal__image' />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" src={photo.user.profile} />
          <div className="photo-list__user-info">
            {photo.user.username}
            <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
          </div>
        </div>
        <div className='photo-details-modal__header'>Similar Photos</div>
      </div>
      <div className='photo-details-modal__top-bar'>
        <PhotoList photos={similarPhotos} updateToFavPhotoIds={updateToFavPhotoIds} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
