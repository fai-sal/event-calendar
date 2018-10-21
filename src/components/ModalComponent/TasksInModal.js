import React from 'react'
import GenericButton from '../GenericButton'
import AddTask from './AddTask'

class Tasks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addTaskFlag: false
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
                            addTaskFlag ? <GenericButton customStyle={styles.buttonStyle} onClick={this.handleCancelButton} >
                                Cancel
                        </GenericButton> : <GenericButton customStyle={styles.buttonStyle} onClick={this.handleAddNewTaskButton} >
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

                <AddTask flag={addTaskFlag} handleAddButton={this.handleAddButton} />

            </React.Fragment >

        )
    }
    handleAddButton = () => {
        console.log('add button clicked')
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
export default Tasks
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