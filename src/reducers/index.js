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
        { index: '1', events: [{ event: "Dummy event 1", colorCode: "#F4A03E", colorId: 6, textColor: "#ffffff" }] },
        { index: '2', events: [] },
        { index: '3', events: [] },
        { index: '4', events: [] },
        { index: '5', events: [] },
        { index: '6', events: [] },
        { index: '7', events: [] },
        { index: '8', events: [] },
        { index: '9', events: [] },
        { index: '10', events: [{ event: "Dummy event 2", colorCode: "#638FC6", colorId: 6, textColor: "#ffffff" }] },
        { index: '11', events: [] },
        { index: '12', events: [] },
        { index: '13', events: [] },
        { index: '14', events: [] },
        { index: '15', events: [] },
        { index: '16', events: [] },
        { index: '17', events: [] },
        { index: '18', events: [] },
        { index: '19', events: [] },
        { index: '20', events: [{ event: "Dummy event 3", colorCode: "#EA7E95", colorId: 6, textColor: "#ffffff" }] },
        { index: '21', events: [] },
        { index: '22', events: [] },
        { index: '23', events: [] },
        { index: '24', events: [] },
        { index: '25', events: [{ event: "Dummy event 4", colorCode: "#82BF56", colorId: 6, textColor: "#ffffff" }] },
        { index: '26', events: [] },
        { index: '27', events: [] },
        { index: '28', events: [] },
        { index: '29', events: [{ event: "Dummy event 5", colorCode: "#82BF56", colorId: 6, textColor: "#ffffff" }] },
        { index: '30', events: [] }
    ]
}
export default rootReducer;