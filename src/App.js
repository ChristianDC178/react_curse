import './App.css';
import Card from './Card'
import React, { useState } from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.length > 2 ? '#4CAF50' : props.length < 2 ? 'red' : 'pink'};
  border: none;
  color: ${props => props.length <= 1 ? 'black' : 'white'};
  font-weight: ${props => props.length <= 1 ? 'bold' : 'normal'};
  padding: 15px 32px;
  text - align: center;
  text - decoration: none;
  display: inline - block;
  font - size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`

function App() {

  const [name, setName] = useState('Christian');
  const [cards, setCards] = useState([
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
    }]);

  const [showCard, setShowCard] = useState(true);
  const toggleShowCard = () => setShowCard(!showCard)

  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex, 1)
    console.log("cards_copy", cards_copy)
    console.log("cards", cards)
    setCards(cards_copy)
  }

  /*const buttonStyle = {
    backgroundColor: null
  }

  if (cards.length < 3) buttonStyle.backgroundColor = 'lightpink'
  if (cards.length < 2) buttonStyle.backgroundColor = 'red'
  */

  const classes = ['button']

  if (cards.length < 3) classes.push('pink')
  if (cards.length < 2) classes.push('red text')


  const changeNameHandler = (event, id) => {
    const cardIndex = cards.findIndex(card => card.id == id)
    const cards_copy = [...cards]
    cards_copy[cardIndex].name = event.target.value
    setCards(cards_copy)
  }

  const cardsMarkup = showCard &&
    (cards.map((card, index) =>
      <Card
        key={card.id}
        name={card.name}
        title={card.title}
        onDelete={() => deleteCardHandler(index)}
        onChangeName={(event) => changeNameHandler(event, card.id)}>
      </Card >
    ))

  return (
    <div className="App">
      <Button length={cards.length}>Toggle</Button>
      <button className={classes.join(' ')} onClick={toggleShowCard}>Show Card</button>
      {cardsMarkup}
    </div>
  );

}

export default App;
