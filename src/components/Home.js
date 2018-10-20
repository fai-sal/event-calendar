import React from 'react'
import { connect } from 'react-redux'
import { deleteEvent } from '../actions/deleteEvent'
import { editEvent } from '../actions/editEvent'
import WeeklyDayHeader from '../components/WeekDayHeader'
import PageHeader from '../components/PageHeader'
import Calender from '../components/Calender'
class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const eventsColorCodes = {
            7: '#EA7E95',
            2: '#638FC6',
            3: '#F2F4F8',
            1: '#82BF56',
            6: '#F4A03E',
        }
        const calenderBackgroundColor = '#e5d1d2'
        localStorage.setItem('colors', JSON.stringify(eventsColorCodes))
        localStorage.setItem('calenderBackgroundColor', calenderBackgroundColor)
    }
    render() {
        const { events } = this.props
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
    const { dates, colors } = state
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