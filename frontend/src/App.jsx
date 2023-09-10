import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
//import TopicListItem from 'components/TopicListItem';
//import TopicList from 'components/TopicList';
// import TopNavigation from 'components/TopNavigationBar';
// import PhotoList from 'components/PhotoList';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
