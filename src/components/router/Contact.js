import React from "react";


const Contact = (props) => {
    console.log('contact', props)
    setTimeout(() => {
        props.history.push('/about')
    }, 2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Christian Home</p>
        </div>
    )

}

export default Contact