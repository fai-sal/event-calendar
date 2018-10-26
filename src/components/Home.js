import React from 'react'
import { connect } from 'react-redux'
import WeeklyDaysName from '../components/WeeklyDaysName'
import PageHeader from '../components/PageHeader'
import Calender from '../components/Calender'
class Home extends React.Component {

    render() {
        const { colors, dates } = this.props
        return (
            <React.Fragment>
                <PageHeader colors={colors} />
                <WeeklyDaysName />
                <Calender dates={dates} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let { dates, colors } = state
    //check wheather local storage is  holding some events or not 
    //if not then store current redux store in local storage
    if (!localStorage.getItem('colors'))
        localStorage.setItem('colors', JSON.stringify(colors))

    if (!localStorage.getItem('dates'))
        localStorage.setItem('dates', JSON.stringify(dates))
    else
        dates = JSON.parse(localStorage.getItem('dates'))

    return {
        dates: dates,
        colors: colors,
    }
}

export default connect(mapStateToProps, null)(Home);