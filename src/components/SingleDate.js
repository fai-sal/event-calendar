import React from 'react'
import Date from './Date'
import Tasks from './Tasks'
import ModalComponent from './ModalComponent';
class SingleDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
        }
    }
    render() {
        const { dayTitle } = this.props
        const date = JSON.parse(localStorage.getItem('dates')).find(date => date.index === dayTitle)
        const { openModal } = this.state
        return (
            <React.Fragment>
                <div className="individualDate" onClick={this.openModalFunction}>
                    <Date date={dayTitle} />
                    {date.tasks.map(task => {
                        return <Tasks task={task} />
                    })}
                </div>
                <ModalComponent open={openModal} tasks={date.tasks} date={dayTitle} closeModal={this.closeModalFunction} />
            </React.Fragment>

        )
    }
    openModalFunction = () => {
        this.setState({
            openModal: true
        })
    }
    closeModalFunction = () => {
        this.setState({
            openModal: false
        })
    }
}

export default SingleDate;
