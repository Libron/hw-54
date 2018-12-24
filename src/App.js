import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card/Card";

class App extends Component {
  state = {
      cardList: [
          {suit: 'h', rank: '3'},
          {suit: 's', rank: 'j'},
          {suit: 'd', rank: 'k'},
          {suit: 'c', rank: 'a'}
      ]
  };

  render() {
    return (
      <div className="App">
          <Card suit="h" rank="3" />
      </div>
    );
  }
}

export default App;
