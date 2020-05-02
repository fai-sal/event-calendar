
import React from 'react';
import Events from '../Events';
import '../../styles/day.scss';
import ModalComponent from '../modal';
class Day extends React.Component {
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
                <div className="individualDate" onClick={this.toggleModalStatus}>
                    <div className="dateIndex">
                        <h5 >{dateIndex}</h5>
                    </div>
                    {date.events.map(event => <Events key={event} event={event} />)}
                </div>
                {/* modal component has been used to add new event, edit event , delete event */}
                <ModalComponent
                    open={openModal}
                    events={date.events}
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


export default Day;
