const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EVENT': {
            return {
                ...state,
                dates: action.payload
            }
        }

        case 'DELETE_EVENT': {
            return {
                ...state,
                dates: action.payload
            }
        }

        case 'EDIT_EVENT': {
            return {
                ...state,
                dates: action.payload
            }
        }
        default:
            return state

    }
}

const initialState = {
    colors: [
        { text: 7, colorCode: '#EA7E95', textColor: '#ffffff' },
        { text: 2, colorCode: '#638FC6', textColor: '#ffffff' },
        { text: 3, colorCode: '#F2F4F8', textColor: '#000000' },
        { text: 1, colorCode: '#82BF56', textColor: '#ffffff' },
        { text: 6, colorCode: '#F4A03E', textColor: '#ffffff' }
    ],
    calenderBackgroundColor: '#e5d1d2',
    dates: [
        { index: '1', tasks: [{ task: "Hello there", colorCode: "#F4A03E", colorId: 6, textColor: "#ffffff" }] },
        { index: '2', tasks: [] },
        { index: '3', tasks: [] },
        { index: '4', tasks: [] },
        { index: '5', tasks: [] },
        { index: '6', tasks: [] },
        { index: '7', tasks: [] },
        { index: '8', tasks: [] },
        { index: '9', tasks: [] },
        { index: '10', tasks: [] },
        { index: '11', tasks: [] },
        { index: '12', tasks: [] },
        { index: '13', tasks: [] },
        { index: '14', tasks: [] },
        { index: '15', tasks: [] },
        { index: '16', tasks: [] },
        { index: '17', tasks: [] },
        { index: '18', tasks: [] },
        { index: '19', tasks: [] },
        { index: '20', tasks: [] },
        { index: '21', tasks: [] },
        { index: '22', tasks: [] },
        { index: '23', tasks: [] },
        { index: '24', tasks: [] },
        { index: '25', tasks: [] },
        { index: '26', tasks: [] },
        { index: '27', tasks: [] },
        { index: '28', tasks: [] },
        { index: '29', tasks: [] },
        { index: '30', tasks: [] }
    ]
}
export default rootReducer;