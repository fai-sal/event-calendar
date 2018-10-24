import React from 'react'
import cancelIcon from '../../assets/cancel.png'
import okayIcon from '../../assets/ok.png'
import { Form, FormGroup, Input } from 'reactstrap';
class EditForm extends React.Component {
    render() {
        const { task, index, value, editOnKeyPress, editOnChange,saveEditedEvent,cancelEditTask } = this.props
        return <div style={{ display: 'flex', padding: '0px', paddingTop: '10px', alignItems: 'center', width: '100%' }}>
            <Form className="editForm">
                <FormGroup >
                    <Input
                        autoFocus
                        type="text"
                        name="editTask"
                        value={value}
                        onKeyPress={(event) => editOnKeyPress(event, task, index)}
                        onChange={(event) => {
                            const changedValue = event.target.value
                            editOnChange(index, changedValue)
                        }}
                        style={{ backgroundColor: task.colorCode, color: task.textColor}}
                    />
                </FormGroup>
            </Form>
            <img src={okayIcon} className="okayIcon" alt="okayIcon" onClick={() => {
                saveEditedEvent(task, index)
            }} />
            <img src={cancelIcon} className="cancelIcon" alt="cancelIcon" onClick={() => {
                cancelEditTask(task, index)
            }} />
        </div>
    }
}
export default EditForm