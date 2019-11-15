import React, { Component } from 'react';
import './App.css';
import './component/ApNavbar.js';

import ApNavbar from './component/ApNavbar';
import ApLoginModal from './component/ApLoginModal';

class App extends Component {

  render = () => {
    return (
      <div>
        <ApNavbar></ApNavbar>
        <ApLoginModal></ApLoginModal>
      </div>
    );
  }

}



export default App;
