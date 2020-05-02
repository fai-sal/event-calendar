import React from 'react';
import * as moment from 'moment';
import '../../styles/header.scss';
import Colors from './colors';
import { Container, Row, Col } from 'reactstrap';

const Header = ({ colors }) => {

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
                <Colors colors={colors} />
            </Row>
        </Container>
    )
}
export default Header;
