import React, { Component } from 'react';
import '../styles/App.css';
import Products from './products';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Products />
      </div>
    );
  }
}

export default App;
