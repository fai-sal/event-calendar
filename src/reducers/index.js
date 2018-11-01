
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
let date = new Date();
let monthIndex = date.getMonth()
let year = date.getFullYear()
let daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
let daysofCurrentMonth = []
let i = 1
while (i <= daysInMonth) {
    daysofCurrentMonth.push({ index: i, events: [] })
    i++
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
    dates: daysofCurrentMonth
}
export default rootReducer;