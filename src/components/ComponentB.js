import { render } from "@testing-library/react";
import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { UserContext, ColorContext } from '../ReactContextApp'

const ComponentB = () => {
    const name = useContext(UserContext)
    const color = useContext(ColorContext)
    return (
        <div>
            <div>ComponentB</div>
            <div>name: {name}, color: {color}</div>
            <ComponentC />
        </div>
    )

}

export default ComponentB