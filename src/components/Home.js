import React from 'react'
import { connect } from 'react-redux'
import { deleteEvent } from '../actions/deleteEvent'
import { editEvent } from '../actions/editEvent'
import WeeklyDayHeader from '../components/WeekDayHeader'
class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            // <div className='col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4'>
            <div >
                <WeeklyDayHeader />
                {
                    this.props.events.map((event, index) => {
                        return <li key={index}>{event.name}</li>
                    })
                }
                <button onClick={this.handleDelete}>delete</button>
                <button onClick={this.handleEdit}>Edit</button>
            </div >
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
    return {
        // events: state.dates.find(date => date.index == 1)
        events: state.dates
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent: (id) => { dispatch(deleteEvent(2)) },
        editEvent: (id) => { dispatch(editEvent(3)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);