import React from 'react';
import '../styles/genericButton.css'
export default ({ children, handleOnClick, disabledFlag }) => {
    return <button
        disabled={disabledFlag}
        className="genericButton"
        onClick={handleOnClick}
    >
        {children}
    </button>
}
