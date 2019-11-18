import React, { Component } from 'react';

import {
  Button
} from 'reactstrap';

import './App.css';

import ApNavbar from './component/ApNavbar';
import ApLoginModal from './component/user/login/ApLoginModal';
import ApJoinModal from './component/user/join/ApJoinModal';

class App extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      loginModal: false,
      joinModal: false
    }
  }

  toggleLoginModal = () => {
    this.setState({
      loginModal: !this.state.loginModal,
      joinModal: false
    })
  }

  toggleJoinModal = () => {
    this.setState({
      loginModal: false,
      joinModal: !this.state.joinModal
    })
  }

  render = () => {
    return (
      <div>
        <ApNavbar></ApNavbar>
        <Button color="danger" onClick={this.toggleLoginModal}>로그인</Button>
        <ApLoginModal modal={this.state.loginModal} toggle={this.toggleLoginModal} joinToggle={this.toggleJoinModal}></ApLoginModal>
        <ApJoinModal modal={this.state.joinModal} toggle={this.toggleJoinModal} loginToggle={this.toggleLoginModal}></ApJoinModal>
      </div>
    );
  }

}



export default App;
