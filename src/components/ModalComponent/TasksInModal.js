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
        const { addTaskFlag } = this.state
        return (
            <React.Fragment>
                <div className="row" style={{...styles.rowStyle,display:'flex',justifyContent:'space-between'}}>
                    <div className="col-4" style={styles.rowStyle}>
                        <h4>Tasks</h4>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6"  style={{paddingLeft:'0px'}}>
                        {
                            addTaskFlag ? null : <GenericButton customStyle={styles.buttonStyle} onClick={this.handleAddNewTaskButton} >
                                Add New Task
                        </GenericButton>
                        }

                    </div>
                </div>
                <div className="row" style={styles.rowStyle}>
                    <div style={{ width: 'fit-content' }}>
                        {tasks.map((task, index) => {
                            return <div > <p style={{ ...styles.individualTask, backgroundColor: task.colorCode, color: task.textColor }}>{`${index + 1}. ${task.task}`}</p></div>
                        })}
                    </div>
                </div>
         
                <AddTask
                    colors={colors}
                    selectedColor={this.state.selectedColor}
                    flag={addTaskFlag}
                    customValue={this.state.newTask.task}
                    handleAddButton={this.handleAddButton}
                    handleOnChange={this.handleOnChange}
                    handleCancelButton={this.handleCancelButton}
                    handleColorButtonOnClick={this.handleColorButtonOnClick}
                />
               
               
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
        deleteEvent: (id) => { dispatch(deleteEvent(2)) },
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
        borderRadius: '5px'
    },
    rowStyle: {
        padding: '0px',
        margin: '0px'
    }
}