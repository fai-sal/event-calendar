import React from 'react'
import Date from './Date'
import Tasks from './Tasks'
import { connect } from 'react-redux';
import ModalComponent from './ModalComponent';
class SingleDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
        }
    }
    render() {
        const { dayTitle, date } = this.props
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
const mapStateToProps = (store, ownProps) => {
    const { dates } = store
    return {
        date: dates.find(date => date.index === ownProps.dayTitle)
    }
}
export default connect(mapStateToProps, null)(SingleDate);
