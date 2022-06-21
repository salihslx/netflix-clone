
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import {action,comedy,orginals} from './urls'
import Banner from './components/NavBar/Banner/Banner';
import Rowpost from './components/NavBar/RowPost/RowPost';


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Rowpost  url={orginals} title='Netflix orginals' />
      <Rowpost url={action} title='Action movies' isSmall />
      <Rowpost url={comedy} title='comedy movies' isSmall />
    </div>
    
  );
}

export default App;
