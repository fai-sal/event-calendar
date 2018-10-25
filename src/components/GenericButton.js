import React from 'react';
import '../styles/genericButton.css'
export default ({ children, customStyle, isDisabled, ...restProps }) => {
    return <button
        className="genericButton"
        onClick={restProps.actionHandler}
    >
        {children}
    </button>
}
