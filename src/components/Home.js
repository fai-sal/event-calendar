import React from 'react'
import { connect } from 'react-redux'
import { deleteEvent } from '../actions/deleteEvent'
import { editEvent } from '../actions/editEvent'
import WeeklyDayHeader from '../components/WeekDayHeader'
import PageHeader from '../components/PageHeader'
import Calender from '../components/Calender'
class Home extends React.Component {
   
    componentDidMount() {
        const eventsColorCodes = {
            1: { text: 7, colorCode: '#EA7E95', textColor: '#ffffff' },
            2: { text: 2, colorCode: '#638FC6', textColor: '#ffffff' },
            3: { text: 3, colorCode: '#F2F4F8', textColor: '#000000' },
            4: { text: 1, colorCode: '#82BF56', textColor: '#ffffff' },
            5: { text: 6, colorCode: '#F4A03E', textColor: '#ffffff' },
        }
        const calenderBackgroundColor = '#e5d1d2'
        localStorage.setItem('colors', JSON.stringify(eventsColorCodes))
        localStorage.setItem('calenderBackgroundColor', calenderBackgroundColor)
    }
    render() {
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
    const { dates } = state
    return {
        // events: state.dates.find(date => date.index == 1)
        events: dates
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent: (id) => { dispatch(deleteEvent(2)) },
        editEvent: (id) => { dispatch(editEvent(3)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);