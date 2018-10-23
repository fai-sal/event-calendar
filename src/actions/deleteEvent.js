export const deleteEvent = (event) => {
    return (dispatch, getState) => {
        const { date, taskIndex } = event
        const existingDates = JSON.parse(localStorage.getItem('dates'))
        // const modifiedDates = [{
        //     ...existingDates,
        //     [date - 1]: {
        //         ...existingDates[date - 1],
        //         tasks: existingDates[date - 1].tasks.filter((task, index) => {
        //             if (index !== taskIndex)
        //                 return task
        //         })
        //     }
        // }]
        let modifiedDates = JSON.parse(localStorage.getItem('dates')).map(date => {
            //console.log('date :', date)
            //console.log('event date :', event.date)
            if (date.index == event.date) {
                // console.log('date found : ', date)
                // console.log('event : date :', event.date, ', index : ', event.taskIndex)
               date.tasks= date.tasks.filter((task, index) => {
                    if (index != event.taskIndex) {
                        console.log('matched !', task)
                        return task
                    }
                })
            }
            return date
        })
        console.log('existing date : ', existingDates)
        console.log('modified dates : ', modifiedDates)
        localStorage.setItem('dates', JSON.stringify(modifiedDates))
        dispatch({
            type: 'DELETE_EVENT',
            payload: modifiedDates
        })
    }
}
