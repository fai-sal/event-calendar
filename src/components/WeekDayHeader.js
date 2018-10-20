import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SingleDay from './SingleDay';
import '../styles/weekDays.css'

export default () => {

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    
    return (
        <Container fluid className="dayTitleContainer" >
            <Row className="dayTitleContainer">
                <div className="dayTitle">
                    {days.map((day, index) => {
                        return <div className="day"> <SingleDay dayTitle={day} key={index} /></div>
                    })}
                </div>
            </Row>
        </Container>
    )
}
