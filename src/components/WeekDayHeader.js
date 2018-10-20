import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SingleDay from './SingleDay';
export default () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return (
        <Container fluid >
            <Row style={styles.dayTitleContainerStyle}>
                {days.map((day, index) => {
                    return <Col style={styles.dateColumn}><SingleDay dayTitle={day} key={index} />   </Col>
                })}


            </Row>
        </Container>
    )
}
const styles = {
    dayTitleContainerStyle: {
        marginTop: '30px',
        borderTop: '1px solid gray',
        borderBottom: '1px solid gray',
        padding: '0px',
        display: 'flex',
        alignItems: 'center'
    },
    dateColumn: {
        margin: '0px'
    }
}