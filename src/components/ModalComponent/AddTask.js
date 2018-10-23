import React from 'react'
import ColorButton from '../ColorPickerButton'
import GenericButton from '../GenericButton'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class AddTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedColor: {
                colorCode: "#ffffff",
                colorId: "3",
                textColor: "#000000"
            }
        }
    }
    render() {
        const { colors, flag, handleAddButton, handleOnChange, selectedColor, handleCancelButton, customValue, handleColorButtonOnClick } = this.props
        const colorIds = Object.keys(colors)
        if (flag) {
            return (
                <React.Fragment>
                    <div className="row" style={{ display: 'flex', alignItems: 'center', ...styles.rowStyle,paddingTop:'10px' }} >
                        <div className="col-sm-10 col-md-8 col-lg-8 col-xl-8" style={{ padding: '0px' }}>
                            <Form>
                                <FormGroup >
                                    <Label for="newTask">Add new task</Label>
                                    <Input
                                        type="text"
                                        name="newTask"
                                        id="newTask"
                                        placeholder="New Task"
                                        value={customValue}
                                        onChange={handleOnChange}
                                        style={{ backgroundColor: selectedColor.colorCode, color: selectedColor.textColor, fontWeight: '300' }}
                                    />
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                    <div className="row" style={styles.rowStyle}>
                        <div className="col-12" style={{ padding: '0px' }}>
                            <p>Choose color</p>
                            {
                                colorIds.map(colorId => {
                                    const currentColor = colors[colorId]
                                    const keys = Object.keys(currentColor)
                                    const text = currentColor[keys[0]]
                                    const colorCode = currentColor[keys[1]]
                                    const textColor = currentColor[keys[2]]
                                    return (<ColorButton colorCode={colorCode} colorId={text} textColor={textColor} handleOnClick={handleColorButtonOnClick} />)
                                })
                            }

                        </div>
                    </div>
                    <div className="row" style={{ ...styles.rowStyle, marginTop: '2%' }}>
                        <div className="col-sm-12 col-md-3 col-lg-1 col-xl-1" style={{...styles.buttonContainer,padding:'0px'}}>
                            <GenericButton customStyle={styles.buttonStyle} onClick={handleAddButton} >
                                Add
                            </GenericButton>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2 offset-lg-1 offset-xl-0" style={{...styles.buttonContainer,padding:'0px'}}>
                            <GenericButton customStyle={styles.buttonStyle} onClick={handleCancelButton}>
                                Cancel
                            </GenericButton>

                        </div>
                    </div>
                </React.Fragment>
            )
        }
        else
            return null
    }
    handleColorButtonOnClick = (...customProps) => {
        console.log('receiver props ', customProps)
        this.setState({
            selectedColor: {
                colorCode: customProps[0],
                colorId: customProps[1],
                textColor: customProps[2]
            }
        })
        console.log('seleceted color : ', this.state.selectedColor)
    }

}

export default AddTask

const styles = {
    buttonStyle: {
        backgroundColor: '#d9d9d9',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '35px',
        fontSize: '100%',
        borderWidth: '0px'
    },
    buttonContainer: {
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    rowStyle: {
        padding: '0px',
        margin: '0px'
    }
}