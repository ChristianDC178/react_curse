import { render } from "@testing-library/react";
import React from "react";
import { NameContext } from "../ReactContextApp";
import { ColorContext } from "../ReactContextApp";

const ComponentC = () => {

    return (
        <div>
            <div>ComponentC</div>
            <NameContext.Consumer>
                {name => {
                    return (
                        <ColorContext.Consumer>
                            {color => {
                                return (<div>name: {name}, color {color}</div>)
                            }}
                        </ColorContext.Consumer>
                    )
                }}
            </NameContext.Consumer>
        </div>
    )
}

export default ComponentC