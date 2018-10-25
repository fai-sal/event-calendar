import React from 'react'
import '../../styles/modal.css'
const ModalHeader = ({ addTaskFlag, toggleAddTaskFlag }) => {
    return <React.Fragment>
        <div className="row modalContentHeader" >
            <div className="col-4">
                <h4>Tasks</h4>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6" >
                {
                    addTaskFlag ? null
                        : <button
                            className="addTaskButton"
                            onClick={toggleAddTaskFlag} >
                            Add New Task
                        </button>
                }
            </div>
        </div>
    </React.Fragment>
}
export default ModalHeader
