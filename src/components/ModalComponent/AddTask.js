import React from 'react'
import GenericButton from '../GenericButton'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const AddTask = ({ flag, handleAddButton }) => {
    if (flag) {
        return (
            <div className="row" >
                <div className="col-8">
                    <p>Add new task</p>
                    <Form>
                        <FormGroup style={{ display: 'flex', alignItems: 'center' }}>
                            <Input type="text" name="newTask" id="newTask" placeholder="New Task" />
                        </FormGroup>
                    </Form>
                </div>
                <div className="col-4">
                    <button onClick={handleAddButton}>Add</button>
                </div>
            </div>
        )
    }
    else
        return null


}

export default AddTask