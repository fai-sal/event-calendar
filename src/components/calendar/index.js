import React from 'react';
import '../../styles/calendar.scss';
import {
    Row,
    Container
} from 'reactstrap';


import Day from '../day';


class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
        }
    }
    render() {
        const { dates } = this.props
        return (
            <Container fluid className="calenderContainer" >
                <Row className="dateRow">
                    <div className="allDates">
                        {
                            dates.map((date, index) => (
                                <div className="date" key={date + index}>
                                    <Day dates={dates} dateIndex={date.index} />
                                </div>
                            ))
                        }
                    </div>
                </Row>
            </Container>
        )
    }
    handleModal = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }
}
export default Calendar;