const addEvent = (task) => {
    return (dispatch, getState) => {
        let newDates = JSON.parse(localStorage.getItem('dates')).map(date => {
            if (date.index === task.id) {
                date.tasks.push(task.task)
            }
            return date
        })
        localStorage.setItem('dates', JSON.stringify(newDates))
        dispatch({
            type: 'ADD_EVENT',
            newtask: task
        })
    }
}

const deleteEvent = (event) => {
    return (dispatch, getState) => {
        const existingDates = JSON.parse(localStorage.getItem('dates'))
        let modifiedDates = existingDates.map(date => {
            if (date.index == event.date) {
                date.tasks = date.tasks.filter((task, index) => {
                    if (index != event.taskIndex) {
                        return task
                    }
                })
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

const editEvent = (event) => {
    return (dispatch, getState) => {
        const existingDates = JSON.parse(localStorage.getItem('dates'))
        let modifiedDates = existingDates.map(date => {
            if (date.index == event.date) {
                date.tasks = date.tasks.filter((task, index) => {
                    if (index != event.taskIndex) {
                        return task
                    }
                })
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

export { addEvent, deleteEvent, editEvent }