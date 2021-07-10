import './dateEnhancer';
/**
 * Calendar Context
 */

import React from 'react';

export const CalendarContext = React.createContext({
    startDate: new Date(),
    selectedRange: 30,
    updateStartDate: () => { },
    updateRange: () => { }
}
);

