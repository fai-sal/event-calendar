import * as moment from 'moment';
import { nextEventId } from '../utils';


function getInitialState() {
    const startDate = new Date();
    const startOfMonth = moment(startDate).startOf('month').format('YYYY-MM-DD hh:mm');
    const numofdaysInMonth = moment(startDate).daysInMonth();
    let daysInMonth = {};

    Array(numofdaysInMonth).fill(0).forEach((_, index) => {
        const datePrefix = moment(startOfMonth).add(index, 'days').format("MMM_Do_YY");
        /**
         * dummy data
         */

        if (index === 0 || index === 16) {
            daysInMonth[datePrefix] = {
                'dummy-one': {
                    id: 'dummy-one',
                    name: 'Buy Grocery',
                    type: 'personal',
                }
            };
        } else if (index === 12 || index === 28) {
            daysInMonth[datePrefix] = {
                'dummy-two': {
                    id: 'dummy-two',
                    name: 'Dinner',
                    type: 'default',
                }
            };
        } else if (index === 23 || index===17) {
            daysInMonth[datePrefix] = {
                'dummy-three': {
                    id: 'dummy-three',
                    name: 'Meeting',
                    type: 'professional',
                }
            };
        } else {
            daysInMonth[datePrefix] = {};
        }

    });

    const findFirstDayOfMonth = () => {
        const dateObject = startDate;
        return moment(dateObject).startOf("month").format("d");
    };

    const firstDayOfMonth = findFirstDayOfMonth();
    let slotsFromPrevMonth = {};
    for (let index = 0; index < firstDayOfMonth; index++) {
        const datePrefix = moment(startOfMonth).subtract(firstDayOfMonth - index, 'days').format("MMM_Do_YY");
        slotsFromPrevMonth[datePrefix] = {}
    }

    return { ...slotsFromPrevMonth, ...daysInMonth };
}

const rootReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case 'ADD_EVENT': {
            const ID = nextEventId();
            const {
                payload: {
                    event,
                    selectedDate,
                }
            } = action;
            return {
                ...state,
                [selectedDate]: {
                    ...state[selectedDate],
                    [ID]: { ...event, ID },
                }
            }
        }
        default:
            return state

    }
}
export default rootReducer;