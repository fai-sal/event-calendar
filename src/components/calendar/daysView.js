import React, { Fragment, useContext } from 'react';
import * as moment from 'moment';
import { CalendarContext } from '../../utils';

function DaysView() {
    const {
        startDate,
        selectedRange,
    } = useContext(CalendarContext);

    const selectedDays = Array(selectedRange).fill(0).map((_, index) => {
        const day = moment(startDate).add(index, 'days')
        return ({
            day: day.format('D'),
            month: day.format('M'),
            year: day.format('YYYY'),
            fullDate: day.format("MMM Do YY")
        });

    });

    const RenderHour = ({ hour }) => {
        const timeSpans = [0, 0.25, 0.5, 0.75];
        return (
            timeSpans.map((item) => (
                <div key={item} className={`time-span`}>
                    <span className="label"> {moment.utc((hour + item) * 3600 * 1000).format("HH : mm")}</span>
                </div>
            ))
        );
    };

    const HOURS = Array(24).fill(0);
    
    return (
        <Fragment>
            <div className="hour-labels">
                {HOURS.map((_, hour) => (
                    <div className="hour-label" key={hour}>{moment.utc(hour * 3600 * 1000).format("HH:mm")}</div>
                ))}
            </div>
            {
                selectedDays.map((day) => (
                    <div className="day" key={day.fullDate}>
                        {HOURS.map((_, hour) => (<div className={`hour ${hour}`} key={hour}> <RenderHour hour={hour} /></div>))}
                    </div>
                ))
            }
        </Fragment>
    );
}

export default DaysView;