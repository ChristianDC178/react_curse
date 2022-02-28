import './App.css';
import Card from './Card'
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function FetchCardApp() {

  const [card, setCard] = useState({});
  const [id, setId] = useState(0);

  useEffect(() => {
    if (id !== 0) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          console.log(res)
          setCard(res.data)
        })
    }
  }, [id])

  const onChangeId = (target) => {
    setId(target.value)
  }

  const changeNameHandler = (event) => {
    const card_copy = { ...card }
    card_copy.name = event.target.value
    setCard(card_copy)
  }

  return (
    <div className="App">
      <input type="text" onChange={e => onChangeId(e.target)} value={id}></input>
      <Card
        key={card.id}
        name={card.name}
        phone={card.phone}
        onChangeName={changeNameHandler}>
      </Card >
    </div>
  );

}

export default FetchCardApp;
