import React from 'react'
import GenericButton from '../GenericButton'
import AddTask from './AddTask'
import { connect } from 'react-redux'
import { deleteEvent } from '../../actions/deleteEvent'
import { editEvent } from '../../actions/editEvent'
import { addEvent } from '../../actions/addEvent'
class Tasks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addTaskFlag: false,
            newTask: {
                id: this.props.date
            }
        }
    }
    render() {
        const { tasks } = this.props
        const { addTaskFlag } = this.state
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <h3>Tasks</h3>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        {
                            addTaskFlag ? null : <GenericButton customStyle={styles.buttonStyle} onClick={this.handleAddNewTaskButton} >
                                Add New Task
                        </GenericButton>
                        }

                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        {tasks.map((task, index) => {
                            return <p>{`${index + 1}. ${task}`}</p>
                        })}
                    </div>
                </div>

                <AddTask flag={addTaskFlag} handleAddButton={this.handleAddButton} handleOnChange={this.handleOnChange} handleCancelButton={this.handleCancelButton} />

            </React.Fragment >

        )
    }
    handleOnChange = (event) => {
        this.setState({
            ...this.state,
            newTask: {
                ...this.state.newTask,
                task: event.target.value
            }
        })
    }
    handleAddButton = () => {
        this.props.addEvent(this.state.newTask)
    }
    handleAddNewTaskButton = () => {
        this.setState({
            addTaskFlag: true
        })
    }
    handleCancelButton = () => {
        this.setState({
            addTaskFlag: false
        })
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent: (id) => { dispatch(deleteEvent(2)) },
        editEvent: (id) => { dispatch(editEvent(3)) },
        addEvent: (task) => { dispatch(addEvent(task)) }
    }
}
export default connect(null, mapDispatchToProps)(Tasks);
const styles = {
    buttonStyle: {
        backgroundColor: '#d9d9d9',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '35px',
        fontSize: '100%',
        minWidth: '110px',
        minHeight: '30px',
        borderWidth: '0px'
    }
}