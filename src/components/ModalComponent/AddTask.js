import React from 'react'
import ColorButton from '../ColorPickerButton'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const AddTask = ({ colors, flag, handleAddButton, handleOnChange, handleCancelButton, customValue }) => {
    const colorIds = Object.keys(colors)
    console.log('custom value : ', customValue)
    if (flag) {
        return (
            <React.Fragment>
                <div className="row" style={{ display: 'flex', alignItems: 'center' }} >
                    <div className="col-8" >
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
                                />
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" >
                        <p>Choose color</p>
                        {
                            colorIds.map(colorId => {
                                const currentColor = colors[colorId]
                                const keys = Object.keys(currentColor)
                                const text = currentColor[keys[0]]
                                const colorCode = currentColor[keys[1]]
                                const textColor = currentColor[keys[2]]
                                return (<ColorButton colorCode={colorCode} colorId={text} textColor={textColor} />)
                            })
                        }

                    </div>
                </div>
                <div className="row">
                    <div className="col-6" style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <button onClick={handleAddButton}>Add</button>
                        <button onClick={handleCancelButton}>Cancel</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    else
        return null


}

export default AddTask