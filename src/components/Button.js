import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button
                className="increase-btn"
                type="button"
                onClick={props.increase}>
                Increase
            </button>
            <button
                className="decrease-btn"
                type="button"
                onClick={props.decrease}>
                Decrease
            </button>
        </div>
    )
}

export default Button;