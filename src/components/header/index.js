import React, { useContext } from 'react';
import { format } from 'date-fns';
import { CalendarContext } from '../../utils';
import { Button } from '@material-ui/core';

const ranges = [
    {
        value: 1,
        title: "Day",
    },
    {
        value: 7,
        title: "Week",
    },
    {
        value: 30,
        title: "Month",
    },
];


const Header = () => {
    const {
        startDate,
        selectedRange,
        updateRange,
        updateStartDate,
    } = useContext(CalendarContext);
    const today = new Date();
    return (
        <div className="header flex align-center">
            <div className="app-info">
                <div className="app-name">Event Calendar</div>
            </div>
            <div className="selected-date">{format(startDate, 'dd-MMMM-yy')}</div>
            <div className="range-picker d-flex">
                <div className="calendar-nav-btns">
                    <div className="nav-icon prev" onClick={() => updateStartDate(startDate.substractDays(selectedRange))}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" /></svg>
                    </div>
                    <div className="today-button" onClick={() => updateStartDate(today)}>Today</div>
                    <div className="nav-icon next" onClick={() => updateStartDate(startDate.addDays(selectedRange))}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
                    </div>
                </div>
                <div className="select-range">
                    {
                        ranges.map(({ title, value }) => (
                            <Button
                                key={value}
                                variant="outlined"
                                {...(selectedRange === value) && { color: "primary" }}
                                onClick={() => updateRange(value)}
                            >
                                {title}
                            </Button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Header;
