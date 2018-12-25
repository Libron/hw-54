import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card/Card";
import CardDeck from "./components/CardDeck/CardDeck"
import PokerHand from "./components/PokerHand/PokerHand"

class App extends Component {
  state = {
      // Колода из 5 начальных карт
      fiveCards: [
          {suit: "h", ranks: "a"},
          {suit: "h", ranks: "k"},
          {suit: "h", ranks: "q"},
          {suit: "h", ranks: "j"},
          {suit: "h", ranks: "10"}
      ],
      result: 'Royal Flush',
      money: 0
  };

  shuffleCards = () => {
      let deck = new CardDeck().getCards(5);
      this.setState({fiveCards: deck, result: PokerHand.getOutcome(deck)});
  }

  render() {
    const fiveCards = this.state.fiveCards.map((card, index) => (
      <Card
          suit={card.suit}
          rank={card.ranks}
          key={index}
      />
    ));

      return (
      <div className="App">
          <div><button onClick={this.shuffleCards}>Shuffle Cards</button></div>
          <p>{this.state.result}</p>
          {fiveCards}
      </div>
    );
  }
}

export default App;