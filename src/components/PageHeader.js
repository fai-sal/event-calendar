import React from 'react'
import MonthTitle from './MonthTitle'
import ColorPicker from './ColorPicker'
const PageHeader = () => {
    return (
        <div style={styles.headerContainer}>
            <MonthTitle />
            <ColorPicker />
        </div>
    )
}
export default PageHeader
const styles = {
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        margin:'0px'
    }
}