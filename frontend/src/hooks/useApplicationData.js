
import { useReducer, useEffect } from 'react';

function useApplicationData() {

  const inital = {
    modal: {
      isOpen: false,
      photoId: null
    },
    viewFav: {
      isOpen: false,
      saveList: []
    },
    likedList: [],
    photos: [],
    topics: [],
    topicId: null
  };

  const [state, dispatch] = useReducer(reducer, inital);

  // When a photo is clikced it will open the modal.
  // The close button uses the same function so only one modal is open at a time.
  const onPhotoSelect = (id) => {
    (state.modal.isOpen) ?
      dispatch({ type: ACTIONS.SELECT_PHOTO, value: { isOpen: false, photoId: null } }) :
      dispatch({ type: ACTIONS.SELECT_PHOTO, value: { isOpen: true, photoId: id } });
  };

  // When the favorite icon is clicked the photo id is added to the likedList array.
  // If that id is already in the array it will be removed instead.
  const updateToFavPhotoIds = (id) => {
    (state.likedList.includes(id)) ?
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, value: id }) :
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, value: id });
  };

  // When a topic is clicked useEffect will fetch new photo data for that topic.
  // If the same topic is clicked again the filter will be removed.
  const onTopicSelect = (topic) => {
    (state.topicId === topic) ?
      dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, value: null }) :
      dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, value: topic });
  };

  const onViewFavPhotos = () => {
    (state.viewFav.isOpen) ?
      dispatch({ type: ACTIONS.HIDE_FAV_PHOTOS, value: false }) :
      dispatch({ type: ACTIONS.VIEW_FAV_PHOTOS, value: true });
  };

  // Gets all photos from the server.
  // Only runs when no topic is selected.
  useEffect(() => {
    if (state.topicId === null) {
      fetch('http://localhost:8001/api/photos')
        .then(res => res.json())
        .then(data => {
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, value: data });
        })
        .catch(error => {
          console.error('Error Fetching Photos: ', error);
        });
    }
  }, [state.topicId]);

  // Gets all topics from the server.
  // Only runs on refresh
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, value: data });
      })
      .catch(error => {
        console.error('Error Fetching Topics: ', error);
      });
  }, []);

  // Gets all photos for selected topic.
  // Only runs when a topic is selected.
  useEffect(() => {
    if (state.topicId !== null) {
      fetch(`http://localhost:8001/api/topics/photos/${state.topicId}`)
        .then(res => res.json())
        .then(data => {
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, value: data });
        })
        .catch(error => {
          console.error('Error Fetching Photos: ', error);
        });
    }
  }, [state.topicId]);

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onTopicSelect,
    onViewFavPhotos
  };
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  VIEW_FAV_PHOTOS: 'VIEW_FAV_PHOTOS',
  HIDE_FAV_PHOTOS: 'HIDE_FAV_PHOTOS'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        likedList: [...state.likedList, action.value]
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        likedList: state.likedList.filter(likedId => action.value !== likedId)
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.value
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.value
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        modal: action.value
      };

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        topicId: action.value
      };

    case ACTIONS.VIEW_FAV_PHOTOS:
      const favPhotos = state.photos.filter((photo) => state.likedList.includes(photo.id));
      return {
        ...state,
        viewFav: {
          isOpen: action.value,
          saveList: state.photos
        },
        photos: favPhotos
      };

    case ACTIONS.HIDE_FAV_PHOTOS:

      return {
        ...state,
        viewFav: {
          isOpen: action.value,
          saveList: []
        },
        photos: state.viewFav.saveList
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default useApplicationData;
