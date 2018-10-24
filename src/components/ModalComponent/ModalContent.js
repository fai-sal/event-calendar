import React from 'react'
import AddTask from './AddTask'
import { connect } from 'react-redux'
import { addEvent, deleteEvent, editEvent } from '../../actions'
import '../../styles/modal.css'
import EditForm from './EditForm'
import deleteIcon from '../../assets/delete.png'
import editIcon from '../../assets/editPen.png'
class Tasks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addTaskFlag: false,
            tempTask: "",
            newTask: {
                id: this.props.date
            },
            currentTasks: this.props.tasks,
            modifiedTasks: this.props.tasks.map(task => {
                task.editFlag = false
                return task
            }),
            selectedColor: {
                colorCode: "#ffffff",
                colorId: "3",
                textColor: "#000000"
            }
        }
    }
    render() {
        const { tasks, colors } = this.props
        console.log('tasks : ', this.props.tasks)
        console.log('date in render : ', this.props.date)
        const { addTaskFlag, selectedColor, newTask, modifiedTasks } = this.state
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
                        modifiedTasks.map((task, index) => {
                            return <div className="col-12" style={styles.taskContainer} >
                                {
                                    // task.editFlag ? this.renderEditForm(task, index)
                                    //     :
                                    //     this.renderTask(task, index)
                                    task.editFlag ?
                                        <EditForm
                                            task={task}
                                            index={index}
                                            value={this.state.modifiedTasks[index].task}
                                            editOnKeyPress={this.editOnKeyPress}
                                            editOnChange={this.editOnChange}
                                            saveEditedEvent={this.saveEditedEvent}
                                            cancelEditTask={this.cancelEditTask}

                                        />
                                        :
                                        this.renderTask(task, index)
                                }
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

    editOnChange = (taskIndex, changedValue) => {
        this.setState({
            ...this.state,
            tempTask: this.state.modifiedTasks[taskIndex].task,
            modifiedTasks: this.state.modifiedTasks.filter((task, index) => {
                if (index == taskIndex) {
                    task.task = changedValue
                }
                return task
            })
        })

    }
    cancelEditTask = (task, taskIndex) => {
        const { date } = this.props
        const existingDates = JSON.parse(localStorage.getItem('dates'))
        this.setState({
            ...this.state,
            modifiedTasks: existingDates[date - 1].tasks.map((task, index) => {
                if (index == taskIndex) {
                    task.editFlag = false
                }
                return task
            })
        })
    }
    toggleEditFlag = (task, taskIndex) => {

        this.setState({
            ...this.state,
            modifiedTasks: this.state.modifiedTasks.filter((task, index) => {
                if (index == taskIndex) {
                    task.editFlag = !task.editFlag
                }
                return task
            })
        })
    }
    renderTask = (task, index) => {
        return <React.Fragment>
            <p style={{ ...styles.individualTask, backgroundColor: task.colorCode, color: task.textColor }}>{`${index + 1}. ${task.task}`}</p>
            <img src={editIcon} className="icons" alt="editIcon" onClick={() => {
                this.toggleEditFlag(task, index)
            }} />
            <img src={deleteIcon} className="icons" alt="deleteIcon" onClick={() => {
                this.deleteEvent(index, task)
            }} />
        </React.Fragment>
    }

    deleteEvent = (...selectdTask) => {
        const { date } = this.props
        const eventTobeDeleted = {
            date: date,
            taskIndex: selectdTask[0],
            task: selectdTask[1].task
        }
        this.setState({
            ...this.state,
            modifiedTasks: this.state.modifiedTasks.filter((task, index) => {
                if (index != eventTobeDeleted.taskIndex)
                    return task
            })
        })
        this.props.deleteEvent(eventTobeDeleted)
    }
    saveEditedEvent = (task, taskIndex) => {
        const { date } = this.props
        const eventTobeEdited = {
            date: date,
            taskIndex: taskIndex,
            task: task
        }
        this.setState({
            ...this.state,
            modifiedTasks: this.state.modifiedTasks.filter((task, index) => {
                if (index == taskIndex) {
                    task.editFlag = !task.editFlag
                }
                return task
            })
        })
        this.props.editEvent(eventTobeEdited)
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
    editOnKeyPress = (event, task, taskIndex) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.saveEditedEvent(task, taskIndex);
        }
    }
    handleAddButton = () => {
        //  console.log('modified tasks : ',this.state.modifiedTasks)
        let { newTask, currentTasks, selectedColor } = this.state
        if (newTask.task) {
            let newTaskArray = currentTasks.map(task => task)
            newTaskArray.push(newTask)
            const formattedNewTask = {
                id: newTask.id,
                task: {
                    task: newTask.task,
                    ...selectedColor
                },
            }
            const test = this.state.modifiedTasks.map(task => task)
            test.push(formattedNewTask.task)
            // console.log('test : ',test)
            this.setState({
                ...this.state,
                currentTasks: newTaskArray,
                newTask: {
                    ...newTask,
                    task: ""
                },
                modifiedTasks: test
            })
            // console.log('after ',this.state.modifiedTasks)
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
        editEvent: (eventTobeEdited) => { dispatch(editEvent(eventTobeEdited)) },
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