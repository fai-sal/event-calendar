import React from 'react'

const Task = ({ task }) => {
    return (
        <div style={dateTitleStyle}>
            <h5>{task}</h5>
        </div>
    )
}
export default Task
const dateTitleStyle = {
    width: '100%',
    borderRadius: '4px',
    paddingLeft: '7%',
    paddingRight: '7%',
    backgroundColor: 'green',
    marginBottom: '2px'
}