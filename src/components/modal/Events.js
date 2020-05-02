import React from 'react'
import deleteIcon from '../../assets/delete.png'
import editIcon from '../../assets/editPen.png'
import '../../styles/modal.scss'
export default ({ event, eventIndex, toggleEditFlag, deleteEvent }) => {
    return <React.Fragment>
        <p style={{ ...individualEvent, backgroundColor: event.colorCode, color: event.textColor }}>{`${eventIndex + 1}. ${event.event}`}</p>
        <img src={editIcon} className="icons" alt="editIcon" onClick={() => {
            toggleEditFlag(event, eventIndex)
        }} />
        <img src={deleteIcon} className="icons" alt="deleteIcon" onClick={() => {
            deleteEvent(eventIndex, event)
        }} />
    </React.Fragment>
}
const individualEvent={
    padding: '5px',
    paddingLeft: '15px',
    paddingRight: '15px',
    width: 'fit-content',
    borderRadius: '5px',
    marginBottom: '7px',
    marginRight: '15px'
}