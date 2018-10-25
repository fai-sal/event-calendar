import React from 'react'
import '../styles/pageHeader.css'
import MonthTitle from './MonthTitle'
import ColorPicker from './ColorPicker'
import { Container, Row } from 'reactstrap'
const PageHeader = ({ colors } ) => {
    return (
        <Container fluid className="headerContainer" >
            <Row className="header">
                <MonthTitle />
                <ColorPicker colors={colors} />
            </Row>
        </Container>
    )
}
export default PageHeader
