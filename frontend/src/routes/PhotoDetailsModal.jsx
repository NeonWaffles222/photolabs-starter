import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import photos from 'mocks/photos';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ useModal, id, useLiked }) => {
  const filteredPhoto = photos.filter(photo => photo.id === id);
  const [photo] = filteredPhoto;
  const similarPhotos = Object.keys(photo.similar_photos).map(key => photo['similar_photos'][key]);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={useModal} />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton id={photo.id} useLiked={useLiked} />
        <img src={photo.urls.regular} onClick={() => useModal(photo.id)} className='photo-details-modal__image' />
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
        <PhotoList photos={similarPhotos} useLiked={useLiked} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
