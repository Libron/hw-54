import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card/Card";

class App extends Component {
  state = {
      cardList: [
          {suit: 'h', rank: '3'},
          {suit: 's', rank: 'j'},
          {suit: 'd', rank: 'k'},
          {suit: 'c', rank: 'a'},
          {suit: 'h', rank: '10'}
      ]
  };

  render() {
    const cardList = this.state.cardList.map((card) => (
      <Card
          suit={card.suit}
          rank={card.rank}
      />
    ));

    return (
      <div className="App">
          {cardList}
      </div>
    );
  }
}

export default App;
