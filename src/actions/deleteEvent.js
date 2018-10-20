export const deleteEvent = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'DELETE_EVENT',
            index: id
        })
    }
}
