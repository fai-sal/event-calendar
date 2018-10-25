import React from 'react'
import '../styles/pageHeader.css'
import MonthTitle from './MonthTitle'
import ColorPicker from './ColorPicker'
import { Container, Row } from 'reactstrap'
const PageHeader = () => {
    return (
        <Container fluid className="headerContainer" >
            <Row className="header">
                <MonthTitle />
                <ColorPicker />
            </Row>
        </Container>
    )
}
export default PageHeader
