/**
   * Create Candendar Context 
   *w
   * @since 1.0.0
   */
  import React from 'react';
  const CalendarContext = React.createContext({
      startDate: new Date(),
      selectedRange: 30,
      updateStartDate: () => { },
      updateRange: () => { }
  }
  );
  
  export { CalendarContext };
  