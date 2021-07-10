import React, { useContext } from 'react';
import * as moment from 'moment';
import { CalendarContext } from '../../utils';

function MonthView() {
    const { startDate } = useContext(CalendarContext);

    const findFirstDayOfMonth = () => {
        const dateObject = startDate;
        return moment(dateObject).startOf("month").format("d");
    };

    const firstDayOfMonth = findFirstDayOfMonth();
    const numofdaysInMonth = moment(startDate).daysInMonth();
    const startOfMonth = moment(startDate).startOf('month').format('YYYY-MM-DD hh:mm');
    const endOfMonth = moment(startDate).endOf('month').format('YYYY-MM-DD hh:mm');


    const dateDetails = (date) => {
        return ({
            day: date.format('D'),
            month: date.format('M'),
            year: date.format('YYYY'),
            fullDate: date.format("MMM Do YY")
        });
    }

    const daysInMonth = Array(numofdaysInMonth).fill(0).map((_, index) => dateDetails(moment(startOfMonth).add(index, 'days')));
    let slotsFromPrevMonth = [];
    for (let index = 0; index < firstDayOfMonth; index++) {
        slotsFromPrevMonth.push(dateDetails(moment(startOfMonth).subtract(firstDayOfMonth - index, 'days')));
    }
    const totalSlots = [...slotsFromPrevMonth, ...daysInMonth];

    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row);
        } else {
            if (cells.length !== 0) {
                rows.push(cells);
            }
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            rows.push(cells);
        }
    });

    if (cells.length < 7) {
        Array(7 - cells.length).fill(0).forEach((_, index) => {
            cells.push(dateDetails(moment(endOfMonth).add(index + 1, 'days')));
        });
    }
    rows[rows.length - 1] = [...cells];

    return (
        <div className="month-view flex">
            {
                rows.map((columns, row) => {
                    return (
                        <div className="row flex" key={row}>
                            {
                                columns.map(date => (
                                    <div key={date.fullDate} className="column day" >
                                        {/* <div key={date.fullDate} className="column day" onClick={() => toggleModal(!openModal)}> */}
                                        <div className="label ec-font medium">{date.day}</div>
                                    </div>
                                ))
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}
export default MonthView;
