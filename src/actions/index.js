const addEvent = (event) => {
    return dispatch => {
        let newDates = JSON.parse(localStorage.getItem('dates')).map(date => {
            if (date.index === event.id) {
                date.events.push(event.event)
            }
            return date
        })
        localStorage.setItem('dates', JSON.stringify(newDates))
        dispatch({
            type: 'ADD_EVENT',
            payload: newDates
        })
    }
}

const deleteEvent = (eventTobeDeleted) => {
    return dispatch => {
        const existingDates = JSON.parse(localStorage.getItem('dates'))
        let modifiedDates = existingDates.map(date => {
            if (date.index === eventTobeDeleted.date) {
                date.events = date.events.filter((event, index) => index !== eventTobeDeleted.eventIndex)
            }
            return date
        })
        localStorage.setItem('dates', JSON.stringify(modifiedDates))
        dispatch({
            type: 'DELETE_EVENT',
            payload: modifiedDates
        })
    }
}

const editEvent = (eventTobeEdited) => {
    return dispatch => {
        const existingDates = JSON.parse(localStorage.getItem('dates'))
        let modifiedDates = existingDates.map(date => {
            if (date.index === eventTobeEdited.date) {
                date.events = date.events.map((currentEvent, index) => {
                    if (index === eventTobeEdited.eventIndex) {
                        return eventTobeEdited.event
                    }
                    return currentEvent
                })
            }
            return date
        })
        localStorage.setItem('dates', JSON.stringify(modifiedDates))
        dispatch({
            type: 'EDIT_EVENT',
            payload: modifiedDates
        })
    }
}

export { addEvent, deleteEvent, editEvent }