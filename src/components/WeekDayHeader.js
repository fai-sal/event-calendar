import React from 'react';
import { Container, Row } from 'reactstrap';
import SingleDay from './SingleWeeklyDay';
import '../styles/weekDays.css'

export default () => {

    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    
    return (
        <Container fluid className="dayTitleContainer" >
            <Row className="dayTitleRow">
                <div className="dayTitle">
                    {days.map((day, index) => {
                        return <div className="day"> <SingleDay dayTitle={day} key={index} /></div>
                    })}
                </div>
            </Row>
        </Container>
    )
}
