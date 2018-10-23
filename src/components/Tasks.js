import React from 'react'
import '../styles/calender.css'
const Task = ({ task }) => {
    return (
        <p  className="taskInCalender"style={{  backgroundColor: task.colorCode, color: task.textColor }}>{task.task}</p>
    )
}
export default Task
