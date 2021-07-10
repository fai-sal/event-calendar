import React from 'react';
import classnames from 'classnames';
import * as moment from 'moment';

function DaysName(props) {
    const {
        isMonthView,
        startDate,
        selectedRange,
    } = props;
    let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    if (!isMonthView) {
        days = []
        Array(selectedRange).fill(0).forEach((date, index) => {
            days.push(moment(startDate).add(index, 'days').format('ddd'))
        })
    }

    const classNames = classnames(
        "days flex align-center",
        { ['single']: selectedRange === 1 }
    )
    return (
        <div className={classNames} >
            {
                days.map(name => (
                    <div key={name} className="day-name"> {name} </div>
                ))
            }
        </div>
    );
}
export default DaysName;