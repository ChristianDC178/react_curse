import React from "react";
import Colorful from "../HighOrderComponent/Colorful";

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Christian About</p>
        </div>
    )
}

export default Colorful(About)