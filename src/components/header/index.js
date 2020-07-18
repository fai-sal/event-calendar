import React from 'react';
import * as moment from 'moment';
import '../../styles/header.scss';
import { CalendarContext } from '../../utils';
import { Select, MenuItem } from '@material-ui/core';
const Header = ({ colors }) => {
    const {
        startDate,
        selectedRange,
        updateRange,
        updateStartDate,
    } = React.useContext(CalendarContext);

    const currentMonth = moment().format('MMMM');
    return (
        <div className="header flex align-center">
            <div className="app-info">
                <div className="app-name">Event Calendar</div>
            </div>
            <div className="month-name">{currentMonth}</div>
            <div className="range-picker">
                <Select
                    id="select-range"
                    value={selectedRange}
                    onChange={event => updateRange(event.target.value)}
                >
                    <MenuItem value={1}>Day</MenuItem>
                    <MenuItem value={3}>3 days</MenuItem>
                    <MenuItem value={7}>Week</MenuItem>
                    <MenuItem value={30}>Month</MenuItem>
                </Select>
            </div>
        </div>
    )
}
export default Header;
