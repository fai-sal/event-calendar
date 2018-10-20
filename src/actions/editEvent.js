export const editEvent = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'EDIT_EVENT',
            index: id,
            newPayload: {
                name: 'faisal ahmed'
            }
        })
    }
}
