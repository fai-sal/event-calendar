import React from 'react'
import { connect } from 'react-redux';
import ColorButton from './ColorPickerButton'
import { Col } from 'reactstrap'
import '../styles/colorPickerButtons.css'
class ColorPicker extends React.Component {
    render() {
        const { colors } = this.props
        const colorIds = Object.keys(colors)
        return (
            <Col sm={12} md={6} lg={6} xl={6} className="colorPickerButtonContainer">
                {colorIds.map(colorId => {
                    return (<ColorButton colorCode={colors[colorId]} colorId={colorId} />)
                })}

            </Col>

        )
    }
}
const mapStateToProps = (store, ownProps) => {
    const { colors } = store
    return {
        colors: colors
    }
}
export default connect(mapStateToProps)(ColorPicker);

