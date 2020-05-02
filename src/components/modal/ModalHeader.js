import React from 'react'
import '../../styles/modal.scss'
const ModalHeader = ({ toggleaddEventFlag, addEventFlag }) => {
    return <React.Fragment>
        <div className="row modalContentHeader" >
            <div className="col-4">
                <h4>Events</h4>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6" >
                {
                    addEventFlag ? null
                        : <button
                            className="addTaskButton"
                            onClick={toggleaddEventFlag} >
                            Add New Event
                        </button>
                }
            </div>
        </div>
    </React.Fragment>
}
export default ModalHeader
