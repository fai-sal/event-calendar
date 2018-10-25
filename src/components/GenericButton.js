import React from 'react';
import '../styles/genericButton.css'
export default ({ children, handleOnClick }) => {
    return <button
        className="genericButton"
        onClick={handleOnClick}
    >
        {children}
    </button>
}
