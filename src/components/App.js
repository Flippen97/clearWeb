import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Homepage from './Homepage';
import '../App.css';
import Login from './Login';
import Register from './Register';
import SingleGroup from './SingleGroup';

class App extends Component {
  state = {
    login: true,
    register: false,
    homepage: false,
    singlegroup: false
  };

  handleRegister = () => {
    this.setState({ register: true, login: false });
  };
  
  handleLogin = () => {
    this.setState({login:true, register:false, homepage: false})
  };
  
  handleHomepage = () => {
    this.setState({login: false, homepage: true, singlegroup: false})
  };

  handleSingleGroup = () => {
    this.setState({homepage: false, singlegroup: true})
  }

  render() {
    let view = (
      <Login register={this.handleRegister} login={this.handleHomepage}/>
    );
    if (this.state.register) {
      view = (
        <Register login={this.handleLogin}/>
      );
    }
    else if(this.state.homepage){
      view = (
        <Homepage singlegroup={this.handleSingleGroup} back={this.handleLogin}/>
      )
    }
    else if(this.state.singlegroup){
      view = (
        <SingleGroup back={this.handleHomepage}/>
      )
    }
    return <main className="main-container">{view}</main>;
  }
}

export default App;
