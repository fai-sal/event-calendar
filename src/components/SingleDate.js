import React from 'react';
class SingleDate extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { dayTitle } = this.props
        return <h5 style={styles.dateTitle}>{dayTitle}</h5>
    }

}
export default SingleDate;
const styles = {
    dateTitle: {
        padding: '0px',
        margin: '0px',
        display: 'flex',
        alignItems: 'center',
        minHeight: '45px',
    }
}
