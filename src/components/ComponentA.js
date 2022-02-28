import { render } from "@testing-library/react";
import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {

    return (
        <div>
            <div>ComponentA</div>
            <ComponentB />
        </div>
    )

}

export default ComponentA