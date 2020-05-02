import React, { Component } from 'react';
import { Col } from 'reactstrap';
import '../../styles/colors.scss';
import ColorPicker from '../color-picker';

class Colors extends Component {
    render() {
        const {
            colors
        } = this.props;

        const colorIds = Object.keys(colors);

        const handleOnClick = () => {
            alert("this button does nothing!");
        }
        return (
            <Col
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="colorPickerButtonContainer"
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
            </Col>
        )
    }

}

export default Colors;

