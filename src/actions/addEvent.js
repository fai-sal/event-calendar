export const addEvent = (task) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_EVENT',
            newtask: task

        })
    }
}
