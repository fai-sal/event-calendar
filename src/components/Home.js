import React from 'react'
import { connect } from 'react-redux'
import { deleteEvent } from '../actions/deleteEvent'
import { editEvent } from '../actions/editEvent'
import WeeklyDayHeader from '../components/WeekDayHeader'
import PageHeader from '../components/PageHeader'
import Calender from '../components/Calender'
class Home extends React.Component {

    render() {
        const { colors, calenderBackgroundColor, dates } = this.props
        if (!localStorage.getItem('colors')) {
            localStorage.setItem('colors', JSON.stringify(colors))
        }
        if (!localStorage.getItem('calenderBackgroundColor')) {
            localStorage.setItem('calenderBackgroundColor', calenderBackgroundColor)
        }
        if (!localStorage.getItem('dates')) {
            localStorage.setItem('dates', JSON.stringify(dates))
        }
        return (
            // <div className='col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4'>
            <React.Fragment>
                <PageHeader />
                <WeeklyDayHeader />
                <Calender />

                {/* {
                    events.map((event, index) => {
                        return <li key={index}>{event.name}</li>
                    })
                }
                <button onClick={this.handleDelete}>delete</button>
                <button onClick={this.handleEdit}>Edit</button> */}
            </React.Fragment>

        )
    }

    handleDelete = () => {
        this.props.deleteEvent(2)
    }
    handleEdit = () => {
        this.props.editEvent(this.props.events.index)
    }
}

const mapStateToProps = (state, ownProps) => {
    const { dates, colors, calenderBackgroundColor } = state
    return {
        dates: dates,
        colors: colors,
        calenderBackgroundColor: calenderBackgroundColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent: (id) => { dispatch(deleteEvent(2)) },
        editEvent: (id) => { dispatch(editEvent(3)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);