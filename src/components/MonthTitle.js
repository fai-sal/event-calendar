import React from 'react'
import * as moment from 'moment';
import { Col } from 'reactstrap'
export default () => {
    const monthName = moment().format('MMMM')
    return <Col className="col-sm-12 col-md-6 col-lg-6 col-xl-6" >
        <h1 className="monthName">{monthName}</h1>
    </Col>
}