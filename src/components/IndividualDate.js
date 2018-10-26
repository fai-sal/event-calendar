import React from 'react'
import Tasks from './Tasks'
import '../styles/individualDate.css'
import ModalComponent from './ModalComponent';
class IndividualDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
        }
    }
    render() {
        const { dateIndex, dates } = this.props
        const date = dates.find(date => date.index === dateIndex)
        const { openModal } = this.state
        return (
            <React.Fragment>
                <div className="individualDate" onClick={this.toggleModalStatus} >
                    <div className="dateIndex">
                        <h5 >{dateIndex}</h5>
                    </div>
                    {date.tasks.map(task => <Tasks task={task} />)}
                </div>
                <ModalComponent
                    open={openModal}
                    tasks={date.tasks}
                    date={dateIndex}
                    closeModal={this.toggleModalStatus}
                />
            </React.Fragment>
        )
    }
    toggleModalStatus = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }
}


export default IndividualDate;
