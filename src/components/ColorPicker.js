import React from 'react'
import ColorButton from './ColorPickerButton'
import { Col } from 'reactstrap'
import '../styles/colorPickerButtons.css'
class ColorPicker extends React.Component {
    render() {
        const colors = JSON.parse(localStorage.getItem('colors'))
        const colorIds = Object.keys(colors)
        return (
            <Col sm={12} md={6} lg={6} xl={6} className="colorPickerButtonContainer">
                {colorIds.map(colorId => {
                    const currentColor = colors[colorId]
                    const keys = Object.keys(currentColor)
                    const text = currentColor[keys[0]]
                    const colorCode = currentColor[keys[1]]
                    const textColor = currentColor[keys[2]]
                    return (<ColorButton colorCode={colorCode} colorId={text} textColor={textColor} handleOnClick={this.handleOnClick} />)
                })}
            </Col>

        )
    }
    handleOnClick = (...customArguments) => {
        console.log("color button clicked, I don't know what to do with it")
    }
}

export default ColorPicker;

