import React from 'react'
import Date from './Date'
import Tasks from './Tasks'
import { connect } from 'react-redux';
class SingleDate extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { dayTitle, date } = this.props
        return (
            <div style={styles.singleDate}>
                <Date date={dayTitle} />
                {date.tasks.map(task => {
                    return <Tasks task={task} />
                })}
            </div>
        )
    }

}
const mapStateToProps = (store, ownProps) => {
    const { dates, colors } = store
    return {
        date: dates.find(date => date.index == ownProps.dayTitle)
    }
}
export default connect(mapStateToProps, null)(SingleDate);
const styles = {
    dateTitle: {
        padding: '0px',
        margin: '0px',
        display: 'flex',
        alignItems: 'center',
        minHeight: '45px',
    },
    singleDate: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}
