import React, { useContext, useState } from 'react';
import * as moment from 'moment';
import { shallowEqual, useSelector } from 'react-redux'
import Modal from '../modal';
import AddEvent from './add-event';
import { CalendarContext } from '../../utils';

function MonthView() {
    const { startDate } = useContext(CalendarContext);
    const store = useSelector((state) => state, shallowEqual);
    const [addingEvent, enableAddingEvent] = useState(false);
    const [selectedDate, setSelectedDate] = useState();

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
            fullDate: date.format("MMM_Do_YY"),
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


    const onAddingEvent = (date) => {
        setSelectedDate(date);
        enableAddingEvent(true);
    }

    return (
        <div className="month-view flex">
            <Modal
                open={addingEvent}
                handleClose={() => enableAddingEvent(false)}
            >
                <AddEvent
                    selectedDate={selectedDate}
                    closeModal={() => enableAddingEvent(false)}
                />
            </Modal>
            {
                rows.map((columns, row) => {
                    return (
                        <div className="row flex" key={row}>
                            {
                                columns.map((date) => (
                                    <div key={date.fullDate} className="column day" >
                                        <div className="label ec-font medium" onClick={() => onAddingEvent(date.fullDate)}>{date.day}</div>
                                        {
                                            typeof store[date.fullDate] !== 'undefined' && Object.keys(store[date.fullDate]).length > 0 && (
                                                <div className="events">
                                                    {
                                                        Object.values(store[date.fullDate]).map(({ ID, name, type }) => (
                                                            <div className={`event ${type ? type : 'default'}`} key={ID+name}>{name}</div>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }
                                        <button color="primary" className="add-new-btn" onClick={() => onAddingEvent(date.fullDate)}>Add event</button>
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
