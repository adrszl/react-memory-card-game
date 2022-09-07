import React, { Component } from "react";
import Card from "../components/Card";

class CardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstClicked: 0,
      secondClicked: 0,
      waitingForReset: false
    };
    this.handleCardClick = this.handleCardClick.bind(this);
    this.resetCards = this.resetCards.bind(this);
  }

  handleCardClick(cardIndex) {
    console.log('clicked item: ', cardIndex);
    if(this.state.firstClicked === 0) {
      this.setState({ firstClicked: cardIndex });
    } else if(cardIndex === this.state.firstClicked) {
      alert('choose different card');
    } else if(this.state.waitingForReset) {
      return;
    } else {
      this.setState({ secondClicked: cardIndex, waitingForReset: true });
      this.resetCards();
    }
  }

  resetCards() {
    setTimeout(() => {
      this.setState({ firstClicked: 0, secondClicked: 0, waitingForReset: false });
    }, 2000);
  }

  render() {
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <Card 
            clickHandler={this.handleCardClick} 
            selected={this.state.firstClicked === 1 || this.state.secondClicked === 1}
            index={1} />
          <Card 
            clickHandler={this.handleCardClick} 
            selected={this.state.firstClicked === 2 || this.state.secondClicked === 2}
            index={2} />
          <Card 
            clickHandler={this.handleCardClick} 
            selected={this.state.firstClicked === 3 || this.state.secondClicked === 3}
            index={3} />
          <Card 
            clickHandler={this.handleCardClick} 
            selected={this.state.firstClicked === 4 || this.state.secondClicked === 4}
            index={4} />
          <Card 
            clickHandler={this.handleCardClick} 
            selected={this.state.firstClicked === 5 || this.state.secondClicked === 5}
            index={5} />
          <Card 
            clickHandler={this.handleCardClick} 
            selected={this.state.firstClicked === 6 || this.state.secondClicked === 6}
            index={6} />
          <Card 
            clickHandler={this.handleCardClick} 
            selected={this.state.firstClicked === 7 || this.state.secondClicked === 7}
            index={7} />
          <Card 
            clickHandler={this.handleCardClick} 
            selected={this.state.firstClicked === 8 || this.state.secondClicked === 8}
            index={8} />
          <Card 
            clickHandler={this.handleCardClick} 
            selected={this.state.firstClicked === 9 || this.state.secondClicked === 9}
            index={9} />
          <Card 
            clickHandler={this.handleCardClick} 
            selected={this.state.firstClicked === 10 || this.state.secondClicked === 10}
            index={10} />
          <Card 
            clickHandler={this.handleCardClick} 
            selected={this.state.firstClicked === 11 || this.state.secondClicked === 11}
            index={11} />
          <Card 
            clickHandler={this.handleCardClick} 
            selected={this.state.firstClicked === 12 || this.state.secondClicked === 12}
            index={12} />
        </div>
      </div>
    );
  }
}

export default CardGrid;
