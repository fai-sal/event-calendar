import React from 'react'
import AddTask from './AddTask'
import { connect } from 'react-redux'
import { deleteEvent } from '../../actions/deleteEvent'
import { editEvent } from '../../actions/editEvent'
import { addEvent } from '../../actions/addEvent'
import '../../styles/modal.css'
import deleteIcon from '../../assets/delete2.png'
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
                <div className="row" style={{ ...styles.rowStyle, display: 'flex', justifyContent: 'space-between' }}>
                    <div className="col-4" style={styles.rowStyle}>
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
                <div className="row" style={styles.rowStyle}>
                    {
                        tasks.map((task, index) => {
                            return <div className="col-12" style={{ padding: '0px' }} >
                                <div style={{ display: 'flex', alignItems: 'center', width: 'fit-content' }}>
                                    <p style={{ ...styles.individualTask, backgroundColor: task.colorCode, color: task.textColor }}>{`${index + 1}. ${task.task}`}</p>
                                    {/* <button onClick={(event) => {
                                        this.deleteEvent(index, task)
                                    }}>x</button> */}
                                    <img src={deleteIcon} width="auto" height="auto" style={{ marginBottom: '7px' }} onClick={(event) => {
                                        this.deleteEvent(index, task)
                                    }} />
                                </div>
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
        // console.log('delete event invoked : ', eventTobeDeleted)
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
    },
    individualTask: {
        padding: '5px',
        paddingLeft: '15px',
        paddingRight: '15px',
        width: 'fit-content',
        borderRadius: '5px',
        marginBottom: '7px'
    },
    rowStyle: {
        padding: '0px',
        margin: '0px'
    }
}