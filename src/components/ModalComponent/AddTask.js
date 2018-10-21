import React from 'react'
const AddTask = ({ flag }) => {
    if(flag){
        return (
            <div className="row">
                <div className="col">
                    <h3>add task here</h3>
                </div>
            </div>
        )
    }
    else{
        return (
            <div>
                bla bla
            </div>
        )
    }
    
}

export default AddTask