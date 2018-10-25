import React from 'react';
import { Container, Row } from 'reactstrap';
import '../styles/weeklyDaysName.css'

export default () => {
    const weeklydaysName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    return (
        <Container fluid className="dayNameContainer" >
            <Row className="dayNameRow">
                    {weeklydaysName.map(dayName => {
                        return <div className="singleday">
                            <h5 className="weekdayName">{dayName}</h5>
                        </div>
                    })}
            </Row>
        </Container>
    )
}
