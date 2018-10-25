import React from 'react'
import '../styles/tasks.css'
export default ({ task }) => {
    return (
        <p className="taskInCalender"
            style={{
                backgroundColor: task.colorCode,
                color: task.textColor
            }}>
            {task.task}
        </p>
    )
}

