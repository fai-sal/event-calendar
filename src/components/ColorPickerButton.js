import React from 'react';
import { Button } from 'reactstrap';
const ColorPickerButton = ({ colorCode, colorId }) => {
    if (colorId != 3) {
        return <Button style={{ ...styles.buttonStyle, backgroundColor: colorCode }}>{colorId}</Button>
    }
    else {
        return <Button style={{ ...styles.buttonStyle, backgroundColor: colorCode, color: 'black' }}>{colorId}</Button>
    }
}
export default ColorPickerButton;
const styles = {
    buttonStyle: {
        borderRadius: '20px',
        padding: '8px',
        paddingRight: '15px',
        paddingLeft: '15px',
        margin: '10px'
    }
}
