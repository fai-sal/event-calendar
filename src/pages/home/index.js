import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
    Header,
    Calendar,
    DaysName
} from '../../components';
class Home extends Component {

    render() {
        const {
            colors,
            dates
        } = this.props;

        return (
            <Fragment>
                <Header colors={colors} />
                <DaysName />
                <Calendar dates={dates} />
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    let {
        dates,
        colors
    } = state;
    /**
     * check whether local storage is  holding some events or not 
     * if not then store current redux store in local storage
     */

    if (!localStorage.getItem('colors')) {
        localStorage.setItem('colors', JSON.stringify(colors));
    }

    if (!localStorage.getItem('dates')) {
        localStorage.setItem('dates', JSON.stringify(dates));
    } else {
        dates = JSON.parse(localStorage.getItem('dates'));
    }

    return {
        dates: dates,
        colors: colors
    }
}

export default connect(mapStateToProps, null)(Home);