import React, { Component } from 'react';
import './App.css';
import BodyContainer from './containers/BodyContainer';
import HeadContainer from './containers/HeadContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HeadContainer/>
      <BodyContainer/>
      </div>
    );
  }
}

export default App;
