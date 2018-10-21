import React from 'react'
import GenericButton from '../GenericButton'
import ColorPicker from '../ColorPicker'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const AddTask = ({ flag, handleAddButton, handleOnChange, handleCancelButton }) => {
    if (flag) {
        return (
            <React.Fragment>
                <div className="row" style={{ display: 'flex', alignItems: 'center' }} >
                    <div className="col-8" >
                        <Form>
                            <FormGroup >
                                <Label for="newTask">Add new task</Label>
                                <Input type="text" name="newTask" id="newTask" placeholder="New Task" onChange={handleOnChange} />
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Choose color</p>
                        <ColorPicker />

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