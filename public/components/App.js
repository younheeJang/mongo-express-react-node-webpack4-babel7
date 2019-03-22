import React, { Component } from 'react';
import '../css/App.css';
import logo from '../img/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">oh so</h1>
        </header>
      </div>
    );
  }
}
export default App;