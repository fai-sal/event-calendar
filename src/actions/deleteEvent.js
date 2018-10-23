export const deleteEvent = (event) => {
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
