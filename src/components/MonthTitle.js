import React from 'react'
import { Col } from 'reactstrap'
import '../styles/monthHeader.css'
const MonthTitle = () => {
    return <Col className="col-sm-12 col-md-6 col-lg-6 col-xl-6" style={styles.columnStyle}>
        <h1 className="monthHeader">September</h1>
    </Col>
}
export default MonthTitle;
const styles = {
    columnStyle: {
        margin: '0px',
        padding: '0px'
    }
}