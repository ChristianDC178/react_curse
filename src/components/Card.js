import React from 'react'
import '../App.css'

const Card = (props) => {
    //console.log(props)
    return (
        <div>
            <div className="card">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
                <div className="container">
                    <h4><b>{props.name}</b></h4>
                    <p>{props.phone}</p>
                    <input type="text" onChange={props.onChangeName}></input>
                    <p><button className="button button-red" onClick={props.onDelete}>Delete</button></p>
                    <div>{props.children}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;