export const addEvent = (task) => {
    return (dispatch, getState) => {
        console.log('task in  thunk add event lisenter  : ', task)
        dispatch({
            type: 'ADD_EVENT',
            newtask: task

        })
    }
}
