import React, { Component } from 'react';
import './App.css';

import Header from './component/Header/Header';
import Home from './component/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
