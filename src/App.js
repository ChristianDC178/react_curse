import './App.css';
import Card from './Card'
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './element/button'

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {
          name: "Christian Di Costanzo",
          title: "Solutions Architect",
          id: 123
        },
        {
          name: "Denies Ritchie",
          title: "Computer Scientist",
          id: 432
        },
        {
          name: "Richard Stallman",
          title: "Computer Scientist",
          id: 433
        }],
      showCard: true
    }
  }

  //const[name, setName] = useState('Christian');
  //const[cards, setCards] = useState();

  toggleShowCard = () => this.setState({ showCard: !this.state.showCard });

  deleteCardHandler = (cardIndex) => {
    const cards_copy = [...this.state.cards]
    cards_copy.splice(cardIndex, 1)
    this.setState({ cards: cards_copy })
    //setCards(cards_copy)
  }

  changeNameHandler = (event, id) => {
    const cardIndex = this.state.cards.findIndex(card => card.id === id)
    const cards_copy = [...this.state.cards]
    cards_copy[cardIndex].name = event.target.value
    this.setState({ cards: cards_copy })
  }

  render() {

    const classes = ['button']

    if (this.state.cards.length < 3) classes.push('pink')
    if (this.state.cards.length < 2) classes.push('red text')

    const cardsMarkup = this.state.showCard &&
      (this.state.cards.map((card, index) =>
        <Card
          key={card.id}
          name={card.name}
          title={card.title}
          onDelete={() => this.deleteCardHandler(index)}
          onChangeName={(event) => this.changeNameHandler(event, card.id)}>
        </Card >
      ))

    return (
      <ThemeProvider theme={theme} >
        <div className="App">
          <Button color='mango' length={this.state.cards.length} onClick={this.toggleShowCard}>Toggle</Button>
          <button className={classes.join(' ')} onClick={this.toggleShowCard}>Show Card</button>
          {cardsMarkup}
        </div>
      </ThemeProvider>
    );

  }





}

export default App;
