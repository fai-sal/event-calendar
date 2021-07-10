import React, { useState } from 'react';
import { Header, Calendar } from '../../components';
import { CalendarContext } from '../../utils';


function Home() {
    const [selectedRange, setRange] = useState(30);
    const [startDate, updateStartDate] = useState(new Date());

    const initialState = {
        startDate,
        selectedRange,
        updateStartDate: updateStartDate,
        updateRange: setRange
    }

    return (
        <div className="event-calendar">
            <CalendarContext.Provider value={initialState}>
                <Header />
                <Calendar />
            </CalendarContext.Provider>
        </div>
    );
}
export default Home;