import React, { Component } from 'react';
import Animals from './components/animals'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header style ={{borderBottom: '1px solid #d3d3d3'}}>
        <h1>Look at all these animals</h1>
      </header>
        <Animals/>
      </div>
    );
  }
}

export default App;
