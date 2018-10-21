import React from 'react';
import SingleDate from './SingleDate'
import { connect } from 'react-redux';
import '../styles/calender.css'
import { Container, Row, Col } from 'reactstrap';
import ModalComponent from './ModalComponent';
class Calender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
        }
    }
    render() {
        const { dates } = this.props
        return (
            <Container fluid className="calenderContainer" >
                <Row className="dateRow">
                    <div className="allDates">
                        {dates.map((date, index) => {
                            return <div className="date" onClick={this.handleModal}> <SingleDate dayTitle={date.index} key={index} /></div>
                        })}
                    </div>
                </Row>
                <ModalComponent open={this.state.openModal} handleClose={this.handleModal} />
            </Container>
        )
    }
    handleModal = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }
}
const mapStateToProps = (store) => {
    const { dates, colors } = store
    return {
        dates
    }
}
export default connect(mapStateToProps, null)(Calender)