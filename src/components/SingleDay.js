import React from 'react';
export default ({ dayTitle }) => {
    return <h5 style={styles.dateTitle}>{dayTitle}</h5>
}
const styles = {
    dateTitle: {
        padding: '0px',
        margin: '0px',
        paddingLeft: '10%',
        color: 'grey',
        display: 'flex',
        alignItems: 'center',
        minHeight: '45px'
    }
}
