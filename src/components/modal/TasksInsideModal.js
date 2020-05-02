import React from 'react'
import deleteIcon from '../../assets/delete.png'
import editIcon from '../../assets/editPen.png'
import '../../styles/modal.scss'
export default ({ task, taskIndex, toggleEditFlag, deleteEvent }) => {
    return <React.Fragment>
        <p
            style={{
                ...individualTask,
                backgroundColor: task.colorCode,
                color: task.textColor
            }}
        >
            {`${taskIndex + 1}. ${task.task}`}
        </p>
        <img
            src={editIcon}
            className="icons"
            alt="editIcon"
            onClick={() => { toggleEditFlag(task, taskIndex) }}
        />
        <img
            src={deleteIcon}
            className="icons"
            alt="deleteIcon"
            onClick={() => { deleteEvent(taskIndex, task) }}
        />
    </React.Fragment>
}
const individualTask = {
    padding: '5px',
    paddingLeft: '15px',
    paddingRight: '15px',
    width: 'fit-content',
    borderRadius: '5px',
    marginBottom: '7px',
    marginRight: '15px'
}