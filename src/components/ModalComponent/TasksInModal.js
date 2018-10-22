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
        console.log('tasks passed to modal : ', tasks)
        console.log('initial current task : ', this.state.currentTasks)
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
                    <div className="col-8" style={{ width: 'fit-content'}}>
                        {tasks.map((task, index) => {
                            return <div > <p style={{ ...styles.individualTask, backgroundColor: task.colorCode,color:task.textColor }}>{`${index + 1}. ${task.task}`}</p></div>
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
        // console.log('event : ', event.target.value)
        this.setState({
            ...this.state,
            newTask: {
                ...this.state.newTask,
                task: event.target.value
            }
        })
    }
    handleAddButton = () => {
        //console.log('current tasks : ',this.state.currentTasks)
        // console.log('add task in modal : ',this.state.newTask)
        let newTaskArray = this.state.currentTasks.map(task => task)
        newTaskArray.push(this.state.newTask)
        //console.log('task array : ',newTaskArray)
        this.setState({
            ...this.state,
            currentTasks: newTaskArray,
            newTask: {
                ...this.state.newTask,
                task: ""
            }
        })

        const newTask = {
            id: this.state.newTask.id,
            task: {
                task: this.state.newTask.task,
                ...this.state.selectedColor
            },
        }
        //console.log('new task : ', newTask)
        this.props.addEvent(newTask)
    }
    handleColorButtonOnClick = (...customProps) => {
        // console.log('in modal ', customProps)
        this.setState({
            selectedColor: {
                colorCode: customProps[0],
                colorId: customProps[1],
                textColor: customProps[2]
            }
        })
        // console.log('seleceted color : ', this.state.selectedColor)
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
        // events: state.dates.find(date => date.index == 1)
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
        borderRadius:'5px'
    }
}