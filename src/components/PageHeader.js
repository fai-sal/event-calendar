import React from 'react'
import MonthTitle from './MonthTitle'
import ColorPicker from './ColorPicker'
import { Container, Row } from 'reactstrap'
const PageHeader = () => {
    return (
        <Container fluid style={{ width: '100%' }}>
            <Row style={styles.headerContainer}>
                <MonthTitle />
                <ColorPicker />
            </Row>
        </Container>

    )
}
export default PageHeader
const styles = {
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0px',
        marginTop: '2%',
        marginBottom: '1%',
    }
}