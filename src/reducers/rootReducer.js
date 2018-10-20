const rootReducer = (state = initialState, action) => {
    console.log('in reducer : ', action)
    switch (action.type) {
        case 'DELETE_EVENT':
            let newDates = state.dates.filter(date => action.index != date.index)
            return {
                ...state,
                dates: newDates
            }
            break

        case 'EDIT_EVENT':
            break

    }
    return state
}

const initialState = {
    dates: [
        { index: '1', name: 'one', tasks: [] },
        { index: '2', name: 'two', tasks: [] },
        { index: '3', name: 'three', tasks: [] }
    ]
}
export default rootReducer;