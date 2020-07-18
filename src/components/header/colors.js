import React from 'react';
import '../../styles/colors.scss';
import ColorPicker from '../color-picker';

class Colors extends React.Component {
    render() {
        const {
            colors
        } = this.props;

        const colorIds = Object.keys(colors);

        const handleOnClick = () => {
            alert("this button does nothing!");
        }
        return (
            <div
                className="col-6 colorPickerButtonContainer"
            >
                {
                    colorIds.map(colorId => {
                        const currentColor = colors[colorId]
                        const keys = Object.keys(currentColor)
                        const text = currentColor[keys[0]];
                        const colorCode = currentColor[keys[1]]
                        const textColor = currentColor[keys[2]]
                        return (
                            <ColorPicker
                                key={colorId}
                                colorId={text}
                                textColor={textColor}
                                colorCode={colorCode}
                                handleOnClick={() => handleOnClick()}
                            />
                        );
                    })
                }
            </div>
        )
    }

}

export default Colors;

