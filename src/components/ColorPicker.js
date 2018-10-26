import React from 'react'
import ColorPickerButton from './ColorPickerButton'
import { Col } from 'reactstrap'
import '../styles/colorPickerButtons.css'
class ColorPicker extends React.Component {
    render() {
        const { colors } = this.props
        const colorIds = Object.keys(colors)
        return (
            <Col sm={12} md={6} lg={6} xl={6} className="colorPickerButtonContainer">
                {colorIds.map(colorId => {
                    const currentColor = colors[colorId]
                    const keys = Object.keys(currentColor)
                    const text = currentColor[keys[0]]
                    const colorCode = currentColor[keys[1]]
                    const textColor = currentColor[keys[2]]
                    return (<ColorPickerButton
                        colorCode={colorCode}
                        colorId={text}
                        textColor={textColor}
                        handleOnClick={this.handleOnClick}
                    />)
                })}
            </Col>
        )
    }
    handleOnClick = (...customArguments) => {
        alert("No function assigned to this buttons")
    }
}

export default ColorPicker;

