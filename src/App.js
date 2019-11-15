import React, { Component } from 'react';
import './App.css';
import './component/ApNavbar.js';

import ApNavbar from './component/ApNavbar';

class App extends Component {

  render = () => {
    return (
      <div>
        <ApNavbar></ApNavbar>
      </div>
    );
  }
}



export default App;
