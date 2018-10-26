import React from 'react'
import '../styles/events.css'
export default ({ event }) => {
    return (
        <p className="eventInCalender"
            style={{
                backgroundColor: event.colorCode,
                color: event.textColor
            }}>
            {event.event}
        </p>
    )
}

