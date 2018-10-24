import React from 'react';
import SingleDate from './SingleDate'
import '../styles/calender.css'
import { Container, Row } from 'reactstrap';
class Calender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
        }
    }
    render() {
        const dates = JSON.parse(localStorage.getItem('dates'))
        return (
            <Container fluid className="calenderContainer" >
                <Row className="dateRow">
                    <div className="allDates">
                        {dates.map((date, index) => {
                            return (<div className="date" > <SingleDate dayTitle={date.index} key={index} /></div>)
                        })}
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
export default Calender