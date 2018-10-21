export const addEvent = (task) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_EVENT',
            index: 77,
            newPayload: {
                task: task
            }
        })
    }
}
