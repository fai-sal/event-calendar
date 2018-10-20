import React from 'react'
import { connect } from 'react-redux';
import ColorButton from './ColorPickerButton'
class ColorPicker extends React.Component {
    render() {
        const { colors } = this.props
        const colorIds = Object.keys(colors)
        return (
            <div className="col-6" style={styles.buttonContainer} >
                {colorIds.map(colorId => {
                    return (<ColorButton colorCode={colors[colorId]} colorId={colorId} />)
                })}

            </div>

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

const styles = {
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    }
}
