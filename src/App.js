import React, { Component } from 'react';

import {
  Button
} from 'reactstrap';

import './App.css';
import './component/ApNavbar.js';

import ApNavbar from './component/ApNavbar';
import ApLoginModal from './component/ApLoginModal';

class App extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      loginModal: false
    }

    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }

  toggleLoginModal = () => {
    this.setState({
      loginModal: !this.state.loginModal
    })
  }

  render = () => {
    return (
      <div>
        <ApNavbar></ApNavbar>
        <Button color="danger" onClick={this.toggleLoginModal}>로그인</Button>
        <ApLoginModal modal={this.state.loginModal} toggle={this.toggleLoginModal}></ApLoginModal>
      </div>
    );
  }

}



export default App;
