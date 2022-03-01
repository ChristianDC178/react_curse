import React from "react";

const Colorful = (WrappedComponent) => {
    const colors = [
        "text-primary",
        "text-secondary",
        "text-success",
        "text-danger"
    ]
    const color = colors[Math.floor(Math.random() * 5)]

    return (props) => {
        return (
            <div>
                <div className={color}>
                    <WrappedComponent {...props} />
                </div>
            </div>
        )
    }


}

export default Colorful