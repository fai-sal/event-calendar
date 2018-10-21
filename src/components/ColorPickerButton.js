import React from 'react';
import { Button } from 'reactstrap';
const ColorPickerButton = ({ colorCode, colorId, textColor }) => {

    return <Button style={{ ...styles.buttonStyle, backgroundColor: colorCode, color: textColor }}>{colorId}</Button>

}
export default ColorPickerButton;
const styles = {
    buttonStyle: {
        borderRadius: '20px',
        padding: '8px',
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: '10px'
    }
}
