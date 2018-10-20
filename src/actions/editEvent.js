export const editEvent = (id) => {
    return {
        type: 'EDIT_EVENT',
        index: id,
        newPayload: {
            name: 'faisal'
        }
    }
}
