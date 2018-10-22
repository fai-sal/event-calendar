export const addEvent = (task) => {
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
