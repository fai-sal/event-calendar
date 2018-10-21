import React from 'react';
export default ({ children, customStyle, isDisabled, ...restProps }) => {
    return <button disabled={isDisabled} onClick={restProps.actionHandler} style={{ ...styles.buttonStyle, ...customStyle }}{...restProps}>{children}</button>
}
const styles ={
    buttonStyle:  {
        borderColor: '#F6D449',
        borderRadius: '12px',
        paddingLeft: '15%',
        paddingRight: '15%',
        fontWeight: '300',
        paddingTop: '.1rem',
        paddingBottom: '.1rem',
        fontSize: '105%',
        fontFamily: "'Source Sans Pro', sans-serif",
        outline:'0px'
    }
}
