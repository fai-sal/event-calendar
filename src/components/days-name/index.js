import React from 'react';
import { Container, Row } from 'reactstrap';
import '../../styles/days-name.scss'

const DaysName = () => {
    const weeklydaysName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    return (
        <Container fluid className="dayNameContainer" >
            <Row className="dayNameRow">
                {
                    weeklydaysName.map(name => (
                        <div key={name} className="singleday">
                            <h5 className="weekdayName">{name}</h5>
                        </div>
                    ))
                }
            </Row>
        </Container>
    );
}
export default DaysName;