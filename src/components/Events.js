import React from 'react';
import '../styles/events.scss';

const Event = ({ event }) => {
    return (
        <p className="eventInCalender"
            style={{
                backgroundColor: event.colorCode,
                color: event.textColor
            }}
        >
            {event.event}
        </p>
    )
}

export default Event;