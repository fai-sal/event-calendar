import React from 'react'
import { connect } from 'react-redux'
import { deleteEvent } from '../actions/deleteEvent'
class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {
                    this.props.events.map((event, index) => {
                        return <li key={index}>{event.name}</li>
                    })
                }
                <button onClick={this.handleDelete}>delete</button>
                {/* <button onClick={this.handleEdit}>Edit</button> */}
            </div>
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
        editEvent: (id) => { dispatch({ type: 'EDIT_EVENT', index: id }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);