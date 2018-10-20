import React from 'react';

export default ({ date }) => {
    return (
        <div style={dateTitleStyle}>
            <h5 >{date}</h5>
        </div>

    )

}
const dateTitleStyle = {
    width: '100%',
    paddingBottom: '4%',
}