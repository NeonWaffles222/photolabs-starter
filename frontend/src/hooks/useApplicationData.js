import { useReducer } from 'react';

function useApplicationData() {

  const inital = {
    modal: {
      isOpen: false,
      photoId: null
    },
    likedList: [],
  };

  const [state, dispatch] = useReducer(reducer, inital);

  const useModal = (id) => {
    (state.modal.isOpen) ?
      dispatch({ type: ACTIONS.SELECT_PHOTO, value: { isOpen: false, photoId: null } }) :
      dispatch({ type: ACTIONS.SELECT_PHOTO, value: { isOpen: true, photoId: id } });
  };

  const useLiked = (id) => {
    (state.likedList.includes(id)) ?
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, value: id }) :
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, value: id });
  };

  return {
    state,
    useModal,
    useLiked
  };
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
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
      return { /* insert logic */ };

    case ACTIONS.SET_TOPIC_DATA:
      return { /* insert logic */ };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        modal: action.value
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { /* insert logic */ };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default useApplicationData;
