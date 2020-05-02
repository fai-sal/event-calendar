import React from 'react'
import '../styles/pageHeader.css'
import ColorPicker from './ColorPicker'
import * as moment from 'moment';
import { Container, Row, Col } from 'reactstrap';

const PageHeader = ({ colors }) => {

    const monthName = () => {
        const currentMonth = moment().format('MMMM');
        return (
            <Col className="col-sm-12 col-md-6 col-lg-6 col-xl-6" >
                <h1 className="monthName">{currentMonth}</h1>
            </Col>
        );
    }
    return (
        <Container fluid className="headerContainer" >
            <Row className="header">
                {monthName()}
                <ColorPicker colors={colors} />
            </Row>
        </Container>
    )
}
export default PageHeader;
