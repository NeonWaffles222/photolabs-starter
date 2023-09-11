import React, { useState } from 'react';

//import PhotoListItem from './components/PhotoListItem';
//import TopicListItem from 'components/TopicListItem';
//import TopicList from 'components/TopicList';
// import TopNavigation from 'components/TopNavigationBar';
// import PhotoList from 'components/PhotoList';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modal, setModal] = useState(false);
  const switchModal = () => {
    console.log('img clicked');
    setModal((modal) ? false : true);
  };
  return (
    <div className="App">
      <HomeRoute switchModal={switchModal} />
      {modal === true && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
