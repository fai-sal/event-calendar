import React, { useContext } from 'react';
import { CalendarContext } from '../../utils';
import Header from './header';
import DaysView from './daysView';
import MonthView from './monthView';


function Calendar() {

    const { selectedRange } = useContext(CalendarContext);

    let isMonthView = false;
    if (selectedRange === 30) {
        isMonthView = true;
    }

    return (
        <div className="calender-container" >
            <Header isMonthView={isMonthView} />
            <div className="calendar">
                {isMonthView ? <MonthView /> : <DaysView />}
            </div>
        </div>
    )
}

export default Calendar;