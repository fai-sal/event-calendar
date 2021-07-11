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
});

/**
 * Generate random ID from datetime
 */
export const nextEventId = () => {
    return (Math.random().toString(36).substring(2) + Date.now().toString(36));
}
