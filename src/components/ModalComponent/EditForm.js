import React from 'react'
import '../../styles/modal.css'
import cancelIcon from '../../assets/cancel.png'
import okayIcon from '../../assets/ok.png'
import { Form, FormGroup, Input } from 'reactstrap';
const EditForm = ({ event, eventIndex, value, editOnKeyPress, editOnChange, saveEditedEvent, cancelEditTask }) => {
    return <div style={{ display: 'flex', padding: '0px', paddingTop: '10px', alignItems: 'center', width: '100%' }}>
        <Form className="editForm">
            <FormGroup >
                <Input
                    autoFocus
                    type="text"
                    name="editTask"
                    value={value}
                    onKeyPress={(e) => editOnKeyPress(e, event, eventIndex)}
                    onChange={(e) => {
                        const changedValue = e.target.value
                        editOnChange(eventIndex, changedValue)
                    }}
                    style={{ backgroundColor: event.colorCode, color: event.textColor }}
                />
            </FormGroup>
        </Form>
        <img src={okayIcon} className="okayIcon" alt="okayIcon" onClick={() => {
            saveEditedEvent(event, eventIndex)
        }} />
        <img src={cancelIcon} className="cancelIcon" alt="cancelIcon" onClick={() => {
            cancelEditTask(eventIndex)
        }} />
    </div>
}

export default EditForm