import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    Header,
    Calendar
} from '../../components';
import '../../styles/common.scss';
import { CalendarContext } from '../../utils';
function Home(props) {
    const {
        colors,
        dates
    } = props;
    const [selectedRange, setRange] = useState(30);
    const [startDate, updateStartDate] = useState(new Date());

    const initialState = {
        startDate,
        selectedRange,
        updateStartDate: updateStartDate,
        updateRange: setRange
    }

    return (
        <div className="event-calendar ec">
            <CalendarContext.Provider value={initialState}>
                <Header colors={colors} />
                <Calendar dates={dates} />
            </CalendarContext.Provider>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {

    let {
        dates,
        colors
    } = state;
    /**
     * check whether local storage is  holding some events or not 
     * if not then store current redux store in local storage
     */

    if (!localStorage.getItem('colors')) {
        localStorage.setItem('colors', JSON.stringify(colors));
    }

    if (!localStorage.getItem('dates')) {
        localStorage.setItem('dates', JSON.stringify(dates));
    } else {
        dates = JSON.parse(localStorage.getItem('dates'));
    }

    return {
        dates: dates,
        colors: colors
    }
}

export default connect(mapStateToProps, null)(Home);