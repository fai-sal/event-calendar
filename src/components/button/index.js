import React from 'react';

const Button = ({ children, handleOnClick, disabledFlag }) => {
    return (
        <button
            disabled={disabledFlag}
            onClick={handleOnClick}
            className="genericButton"
        >
            {children}
        </button>
    );
}
export default Button;