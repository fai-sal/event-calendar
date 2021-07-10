import React, { useContext } from 'react';
import classnames from 'classnames';
import { format } from 'date-fns';
import { CalendarContext } from '../../utils';


function Header({ isMonthView }) {
    const {
        startDate,
        selectedRange,
    } = useContext(CalendarContext);

    const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    /**
     * Calendar header for Day & Weekly view
     * @returns 
     */
    const SelectedDays = () => {
        const selectedDays = Array(selectedRange).fill(0).map((_, index) => startDate.addDays(index));
        return (
            selectedDays.map((day, index) => (
                <div className="day-wrapper" key={index}>
                    <div className="day-name"> {format(day, 'ccc')} </div>
                    <div className="date"> {format(day, 'dd')} </div>
                </div>
            ))
        );
    }

    const classNames = classnames(
        "calendar-header flex align-center",
        { 'single': selectedRange === 1 },
        { 'month-view': isMonthView }
    )
    return (
        <div className={classNames} >
            {
                isMonthView ?
                    WEEKDAYS.map((dayName) => <div key={dayName} className="day-name"> {dayName} </div>)
                    :
                    <SelectedDays />
            }
        </div>
    );
}
export default Header;