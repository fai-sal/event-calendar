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
        return (
            <div style={styles.singleDate} onClick={this.openModal}>
                <Date date={dayTitle} />
                {date.tasks.map(task => {
                    return <Tasks task={task} />
                })}
                <ModalComponent open={this.state.openModal} tasks={date.tasks} date={dayTitle} closeModal={this.closeModal} />
            </div>
        )
    }
    openModal = () => {
        this.setState({
            openModal: true
        })
    }

    closeModal = () => {
        this.setState({
            openModal: false
        })
    }
}
const mapStateToProps = (store, ownProps) => {
    const { dates, colors } = store
    return {
        date: dates.find(date => date.index == ownProps.dayTitle)
    }
}
export default connect(mapStateToProps, null)(SingleDate);
const styles = {
    dateTitle: {
        padding: '0px',
        margin: '0px',
        display: 'flex',
        alignItems: 'center',
        minHeight: '45px',
    },
    singleDate: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}
