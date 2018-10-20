import React from 'react'

const Task = ({ task }) => {
    return (
        <div style={styles.taskContainer}>
            <h5 style={styles.task}>{task}</h5>
        </div>
    )
}
export default Task
const styles = {
    taskContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '4px',
        paddingLeft: '7%',
        paddingRight: '7%',
        backgroundColor: '#82BF56',
        color: 'white',
        marginBottom: '2px'
    },
    task: {
        width: '100%',
        margin: '0px',
        paddingTop: '4%',
        paddingBottom: '4%',
        paddingLeft: '1%'
    }
} 