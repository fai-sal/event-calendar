import React from 'react';
import Colors from './colors';
import * as moment from 'moment';
import '../../styles/header.scss';

const Header = ({ colors }) => {

    const currentMonth = moment().format('MMMM');
    return (
        <div fluid className="container-fluid header">
            <div className="row">
                <div className="col-6" >
                    <h1 className="monthName">{currentMonth}</h1>
                </div>
                <Colors colors={colors} />
            </div>
        </div>
    )
}
export default Header;
