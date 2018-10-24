import React from 'react'
import Tasks from './Tasks'
import AddTask from './AddTask'
import '../../styles/modal.css'
import EditForm from './EditForm'
import ModalHeader from './ModalHeader'
import { connect } from 'react-redux'
import { addEvent, deleteEvent, editEvent } from '../../actions'
class ModalContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addTaskFlag: false,
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
        const { colors } = this.props
        const { addTaskFlag, selectedColor, newTask, modifiedTasks } = this.state
        return (
            <React.Fragment>
                <ModalHeader addTaskFlag={addTaskFlag} toggleAddTaskFlag={this.toggleAddTaskFlag} />
                <div className="row" >
                    {
                        modifiedTasks.map((task, index) => {
                            return <div className="col-12 individualTask" >
                                {
                                    task.editFlag ?
                                        <EditForm
                                            task={task}
                                            taskIndex={index}
                                            value={this.state.modifiedTasks[index].task}
                                            editOnKeyPress={this.editOnKeyPress}
                                            editOnChange={this.editOnChange}
                                            saveEditedEvent={this.saveEditedEvent}
                                            cancelEditTask={this.cancelEditTask}
                                        />
                                        :
                                        <Tasks
                                            task={task}
                                            taskIndex={index}
                                            toggleEditFlag={this.toggleEditFlag}
                                            deleteEvent={this.deleteEvent}
                                        />
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
                    handleCancelButton={this.toggleAddTaskFlag}
                    handleOnKeyPress={this.handleOnKeyPress}
                    handleColorButtonOnClick={this.handleColorButtonOnClick}
                />
            </React.Fragment >
        )
    }

    editOnChange = (taskIndex, changedValue) => {
        this.setState({
            ...this.state,
            modifiedTasks: this.state.modifiedTasks.filter((task, index) => {
                if (index == taskIndex) {
                    task.task = changedValue
                }
                return task
            })
        })
    }
    editOnKeyPress = (event, task, taskIndex) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.saveEditedEvent(task, taskIndex);
        }
    }
    cancelEditTask = (taskIndex) => {
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

    handleAddButton = () => {
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
            this.setState({
                ...this.state,
                currentTasks: newTaskArray,
                newTask: {
                    ...newTask,
                    task: ""
                },
                modifiedTasks: test
            })
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
    toggleAddTaskFlag = () => {
        this.setState({
            addTaskFlag: !this.state.addTaskFlag
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
export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
