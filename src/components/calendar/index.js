import React, { useState, Fragment } from 'react';
import * as moment from 'moment';
import { useSelector } from 'react-redux';
import Day from '../day';
import { CalendarContext } from '../../utils';
import DaysName from '../days-name';


function Calendar() {
    const [openModal, toggleModal] = useState(false);
    const dates = useSelector((state) => state['dates']);
    const {
        startDate,
        selectedRange,
        updateStartDate,
    } = React.useContext(CalendarContext);

    let isMonthView = false;
    if (selectedRange === 30) {
        isMonthView = true;
    }
    const findFirstDayOfMonth = () => {
        let dateObject = startDate;
        let firstDay = moment(dateObject)
            .startOf("month")
            .format("d");
        return firstDay;
    };

    const dateDetails = (originalDate) => {
        return ({
            day: originalDate.format('D'),
            month: originalDate.format('M'),
            year: originalDate.format('YYYY'),
            fullDate: originalDate.format("MMM Do YY")
        });
    }
    const monthView = () => {
        const firstDayOfMonth = findFirstDayOfMonth();
        const numOfdaysInMonth = moment(startDate).daysInMonth();
        const startOfMonth = moment(startDate).startOf('month').format('YYYY-MM-DD hh:mm');
        const endOfMonth = moment(startDate).endOf('month').format('YYYY-MM-DD hh:mm');
        const daysInMonth = Array(numOfdaysInMonth).fill(0).map((_, index) => {
            let tempDay = moment(startOfMonth).add(index, 'days')
            return (dateDetails(tempDay));
        });

        let blanks = []
        for (let index = 0; index < firstDayOfMonth; index++) {
            let tempDay = moment(startOfMonth).subtract(firstDayOfMonth - index, 'days');
            blanks.push(dateDetails(tempDay));
        }
        const totalSlots = [...blanks, ...daysInMonth]
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
            })
        }

        rows[rows.length - 1] = [...cells]

        return (
            <div className="month-view flex">
                {
                    rows.map((columns, row) => {
                        return (
                            <div className="row flex" key={row}>
                                {
                                    columns.map(date => {
                                        return (
                                            <div key={date.fullDate} className="column day" onClick={() => toggleModal(!openModal)}>
                                                <div className="label ec-font medium">{date.day}</div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>
        )
    }

    const renderHour = (hour) => {
        const timeSpans = [0, 0.25, 0.5, 0.75];
        return timeSpans.map((item, index) => {
            const timeslot = moment.utc((hour + item) * 3600 * 1000).format("HH : mm");

            return (
                <div
                    key={item}
                    className={`time-span`}
                >
                    <span className="label"> {timeslot}</span>
                </div>
            );
        });
    };
    const daysView = () => {
        let days = Array(selectedRange).fill(0).map((_, index) => {
            let tempDay = moment(startDate).add(index, 'days')
            return (dateDetails(tempDay));
        });

        return (
            <Fragment>
                <div className="hour-labels">
                    {
                        Array(24)
                            .fill(0)
                            .map((_, hour) => (
                                <div className="hour-label" key={hour}>
                                    {moment.utc(hour * 3600 * 1000).format("HH:mm")}
                                </div>
                            ))
                    }
                </div>
                {
                    days.map((day) => (
                        <div
                            className="day"
                            key={day.fullDate}
                        >
                            {Array(24)
                                .fill(0)
                                .map((_, hour) => {
                                    return (
                                        <div
                                            className={`hour ${hour}`}
                                            key={hour}
                                        >
                                            {renderHour(hour)}
                                        </div>
                                    );
                                })}
                        </div>
                    ))
                }
            </Fragment>

        );
    }
    return (
        <div className="calender-container" >

            <DaysName
                isMonthView={isMonthView}
                startDate={startDate}
                selectedRange={selectedRange}
            />

            <div className="calendar">
                {
                    isMonthView ?
                        monthView()
                        :
                        daysView()

                    // <div className="allDates">
                    //     {
                    //         dates.map((date, index) => (
                    //             <div className="date" key={date + index}>
                    //                 <Day dates={dates} dateIndex={date.index} />
                    //             </div>
                    //         ))
                    //     }
                    // </div>
                }
            </div>
        </div>
    )
}

export default Calendar;