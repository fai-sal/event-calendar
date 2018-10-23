import React from 'react'
import '../styles/calender.css'
const Task = ({ task }) => {
    return (
        <p  className="taskInCalender"style={{  backgroundColor: task.colorCode, color: task.textColor }}>{task.task}</p>
    )
}
export default Task
const styles = {
    individualTask: {
        padding: '5px',
        paddingLeft: '15px',
        paddingRight: '15px',
        borderRadius: '5px',
        marginBottom:'5px',
        wordWrap: 'break-word',
    }
} 