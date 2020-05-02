import React from 'react';
import '../../styles/button.scss';

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