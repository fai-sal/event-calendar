import React from 'react'
import AddTask from './AddTask'
import { connect } from 'react-redux'
import {addEvent,deleteEvent,editEvent} from '../../actions'
import '../../styles/modal.css'
import deleteIcon from '../../assets/deleteIcon.png'
import editIcon from '../../assets/pencil.png'
class Tasks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addTaskFlag: false,
            newTask: {
                id: this.props.date
            },
            currentTasks: this.props.tasks,
            selectedColor: {
                colorCode: "#ffffff",
                colorId: "3",
                textColor: "#000000"
            }
        }
    }
    render() {
        const { tasks, colors } = this.props
        console.log('date in render : ', this.props.date)
        const { addTaskFlag, selectedColor, newTask } = this.state
        return (
            <React.Fragment>
                <div className="row" style={styles.modalContentHeader}>
                    <div className="col-4" style={styles.removePadding}>
                        <h4>Tasks</h4>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{ paddingLeft: '0px' }}>
                        {
                            addTaskFlag ? null : <button className="addTaskButton" onClick={this.handleAddNewTaskButton} >
                                Add New Task
                        </button>
                        }
                    </div>
                </div>
                <div className="row" style={styles.removePadding}>
                    {
                        tasks.map((task, index) => {
                            return <div className="col-12" style={styles.taskContainer} >
                                <p style={{ ...styles.individualTask, backgroundColor: task.colorCode, color: task.textColor }}>{`${index + 1}. ${task.task}`}</p>
                                <img src={editIcon} className="icons" alt="editIcon" onClick={() => {
                                    alert('edit icon clicked')
                                }} />
                                <img src={deleteIcon} className="icons" alt="deleteIcon"onClick={() => {
                                    this.deleteEvent(index, task)
                                }} />
                            </div>
                        })
                    }
                </div>

                <AddTask
                    colors={colors}
                    selectedColor={selectedColor}
                    flag={addTaskFlag}
                    customValue={newTask.task}
                    handleAddButton={this.handleAddButton}
                    handleOnChange={this.handleOnChange}
                    handleCancelButton={this.handleCancelButton}
                    handleOnKeyPress={this.handleOnKeyPress}
                    handleColorButtonOnClick={this.handleColorButtonOnClick}
                />
            </React.Fragment >

        )
    }
    deleteEvent = (...selectdTask) => {
        const { date } = this.props
        const eventTobeDeleted = {
            date: date,
            taskIndex: selectdTask[0],
            task: selectdTask[1].task
        }
        this.props.deleteEvent(eventTobeDeleted)
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
    handleOnKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.handleAddButton();
        }
    }
    handleAddButton = () => {
        let { newTask, currentTasks, selectedColor } = this.state
        if (newTask.task) {
            let newTaskArray = currentTasks.map(task => task)
            newTaskArray.push(newTask)

            this.setState({
                ...this.state,
                currentTasks: newTaskArray,
                newTask: {
                    ...newTask,
                    task: ""
                }
            })

            const formattedNewTask = {
                id: newTask.id,
                task: {
                    task: newTask.task,
                    ...selectedColor
                },
            }
            this.props.addEvent(formattedNewTask)
        }
        else {
            alert("New task can't be empty")
        }

    }
    handleColorButtonOnClick = (...customProps) => {
        this.setState({
            selectedColor: {
                colorCode: customProps[0],
                colorId: customProps[1],
                textColor: customProps[2]
            }
        })
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
const mapStateToProps = (state, ownProps) => {
    const { colors } = state
    return {
        colors: colors
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent: (event) => { dispatch(deleteEvent(event)) },
        editEvent: (id) => { dispatch(editEvent(3)) },
        addEvent: (task) => { dispatch(addEvent(task)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
const styles = {
    individualTask: {
        padding: '5px',
        paddingLeft: '15px',
        paddingRight: '15px',
        width: 'fit-content',
        borderRadius: '5px',
        marginBottom: '7px',
        marginRight: '15px'
    },
    removePadding: {
        padding: '0px',
        margin: '0px'
    },
    modalContentHeader: {
        padding: '0px',
        paddingTop: '10px',
        paddingBottom: '10px',
        margin: '0px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    taskContainer: {
        padding: '0px',
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content'
    }
}