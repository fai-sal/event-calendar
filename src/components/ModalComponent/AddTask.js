import React from 'react'
import GenericButton from '../GenericButton'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const AddTask = ({ flag, handleAddButton,handleOnChange }) => {
    if (flag) {
        return (
            <div className="row" style={{ display: 'flex', alignItems: 'center' }} >
                <div className="col-8" >
                    <Form>
                        <FormGroup >
                            <Label for="newTask">Add new task</Label>
                            <Input type="text" name="newTask" id="newTask" placeholder="New Task" onChange={handleOnChange}/>
                        </FormGroup>
                    </Form>
                </div>
                <div className="col-4" style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <button onClick={handleAddButton}>Add</button>
                </div>
            </div>
        )
    }
    else
        return null


}

export default AddTask