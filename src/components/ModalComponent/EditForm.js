import React from 'react'
import '../../styles/modal.css'
import cancelIcon from '../../assets/cancel.png'
import okayIcon from '../../assets/ok.png'
import { Form, FormGroup, Input } from 'reactstrap';
const EditForm = ({ task, taskIndex, value, editOnKeyPress, editOnChange, saveEditedEvent, cancelEditTask }) => {
    return <div style={{ display: 'flex', padding: '0px', paddingTop: '10px', alignItems: 'center', width: '100%' }}>
        <Form className="editForm">
            <FormGroup >
                <Input
                    autoFocus
                    type="text"
                    name="editTask"
                    value={value}
                    onKeyPress={(event) => editOnKeyPress(event, task, taskIndex)}
                    onChange={(event) => {
                        const changedValue = event.target.value
                        editOnChange(taskIndex, changedValue)
                    }}
                    style={{ backgroundColor: task.colorCode, color: task.textColor }}
                />
            </FormGroup>
        </Form>
        <img src={okayIcon} className="okayIcon" alt="okayIcon" onClick={() => {
            saveEditedEvent(task, taskIndex)
        }} />
        <img src={cancelIcon} className="cancelIcon" alt="cancelIcon" onClick={() => {
            cancelEditTask(taskIndex)
        }} />
    </div>
}

export default EditForm