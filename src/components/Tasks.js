import React from 'react'

const Task = ({ task }) => {
    return (
        <p style={{ ...styles.individualTask, backgroundColor: task.colorCode, color: task.textColor }}>{task.task}</p>
    )
}
export default Task
const styles = {
    individualTask: {
        padding: '5px',
        paddingLeft: '15px',
        paddingRight: '15px',
        borderRadius: '5px',
        marginBottom:'5px'
    }
} 