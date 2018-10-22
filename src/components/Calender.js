import React from 'react';
import SingleDate from './SingleDate'
// import { connect } from 'react-redux';
import '../styles/calender.css'
import { Container, Row } from 'reactstrap';
class Calender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
        }
    }
    render() {
        const dates = JSON.parse(localStorage.getItem('dates'))
        console.log('dates in calender : ', dates)
        return (
            <Container fluid className="calenderContainer" >
                <Row className="dateRow">
                    <div className="allDates">
                        {dates.map((date, index) => {
                            return (<div className="date" > <SingleDate dayTitle={date.index} key={index} /></div>)
                        })}
                    </div>
                </Row>
            </Container>
        )
    }
    handleModal = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }
}
// const mapStateToProps = (store) => {
//     const { dates } = store
//     return {
//         dates
//     }
// }
export default Calender