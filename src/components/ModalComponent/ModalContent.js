import React from 'react'
import Events from './Events'
import AddEvents from './AddEvents'
import '../../styles/modal.css'
import EditForm from './EditForm'
import ModalHeader from './ModalHeader'
import { connect } from 'react-redux'
import { addEvent, deleteEvent, editEvent } from '../../actions'
class ModalContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addEventFlag: false,
            newEvent: {
                id: this.props.date
            },
            currentEvents: this.props.events,
            modifiedEvents: this.props.events.map(event => {
                event.editFlag = false
                return event
            }),
            selectedColor: {
                colorCode: "#ffffff",
                colorId: "3",
                textColor: "#000000"
            }
        }
    }
    render() {
        const { colors } = this.props
        const { addEventFlag, selectedColor, newEvent, modifiedEvents } = this.state
        console.log('events :', modifiedEvents)
        return (
            <React.Fragment>
                <ModalHeader addEventFlag={addEventFlag} toggleaddEventFlag={this.toggleaddEventFlag} />
                <div className="row" >
                    {
                        modifiedEvents.map((event, index) => {
                            return <div className="col-12 individualEvent" >
                                {
                                    event.editFlag ?
                                        <EditForm
                                            event={event}
                                            eventIndex={index}
                                            value={this.state.modifiedEvents[index].event}
                                            editOnKeyPress={this.editOnKeyPress}
                                            editOnChange={this.editOnChange}
                                            saveEditedEvent={this.saveEditedEvent}
                                            cancelEditedEvent={this.cancelEditEvent}
                                        />
                                        :
                                        <Events
                                            event={event}
                                            eventIndex={index}
                                            toggleEditFlag={this.toggleEditFlag}
                                            deleteEvent={this.deleteEvent}
                                        />
                                }
                            </div>
                        })
                    }
                </div>

                <AddEvents
                    colors={colors}
                    selectedColor={selectedColor}
                    flag={addEventFlag}
                    customValue={newEvent.event}
                    handleAddButton={this.handleAddButton}
                    handleOnChange={this.handleOnChange}
                    handleCancelButton={this.toggleaddEventFlag}
                    handleOnKeyPress={this.handleOnKeyPress}
                    handleColorButtonOnClick={this.handleColorButtonOnClick}
                />
            </React.Fragment >
        )
    }

    editOnChange = (eventIndex, changedValue) => {
        this.setState({
            ...this.state,
            modifiedEvents: this.state.modifiedEvents.filter((event, index) => {
                if (index === eventIndex) {
                    event.event = changedValue
                }
                return event
            })
        })
    }
    editOnKeyPress = (keyboardevent, event, eventIndex) => {
        if (keyboardevent.key === 'Enter') {
            keyboardevent.preventDefault();
            this.saveEditedEvent(event, eventIndex);
        }
    }

    toggleEditFlag = (event, eventIndex) => {
        this.setState({
            ...this.state,
            modifiedEvents: this.state.modifiedEvents.filter((event, index) => {
                if (index === eventIndex) {
                    event.editFlag = !event.editFlag
                }
                return event
            })
        })
    }

    deleteEvent = (...selectdEvent) => {
        const { date } = this.props
        const eventTobeDeleted = {
            date: date,
            eventIndex: selectdEvent[0],
            event: selectdEvent[1].event
        }
        this.setState({
            ...this.state,
            modifiedEvents: this.state.modifiedEvents.filter((event, index) => index !== eventTobeDeleted.eventIndex)
        })
        this.props.deleteEvent(eventTobeDeleted)
    }
    saveEditedEvent = (event, eventIndex) => {
        const { date } = this.props
        const eventTobeEdited = {
            date: date,
            eventIndex: eventIndex,
            event: event
        }
        this.setState({
            ...this.state,
            modifiedEvents: this.state.modifiedEvents.filter((event, index) => {
                if (index === eventIndex) {
                    event.editFlag = !event.editFlag
                }
                return event
            })
        })
        this.props.editEvent(eventTobeEdited)
    }
    cancelEditEvent = (eventIndex) => {
        const { date } = this.props
        const existingDates = JSON.parse(localStorage.getItem('dates'))
        const previousEvent = existingDates[date - 1].events.filter((event, index) => index === eventIndex)[0].event
        this.setState({
            ...this.state,
            modifiedEvents: this.state.modifiedEvents.filter((event, index) => {
                if (index === eventIndex) {
                    event.editFlag = !event.editFlag
                    event.event = previousEvent
                }
                return event
            })
        })
    }
    handleOnChange = (event) => {
        this.setState({
            ...this.state,
            newEvent: {
                ...this.state.newEvent,
                event: event.target.value
            }
        })

    }
    handleOnKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.handleAddButton();
        }
    }

    handleAddButton = () => {
        let { newEvent, currentEvents, selectedColor } = this.state
        if (newEvent.event) {
            let newEventArray = currentEvents.map(event => event)
            newEventArray.push(newEvent)
            const formattednewEvent = {
                id: newEvent.id,
                event: {
                    event: newEvent.event,
                    ...selectedColor
                },
            }
            const test = this.state.modifiedEvents.map(event => event)
            test.push(formattednewEvent.event)
            this.setState({
                ...this.state,
                currentEvents: newEventArray,
                newEvent: {
                    ...newEvent,
                    event: ""
                },
                modifiedEvents: test
            })
            this.props.addEvent(formattednewEvent)
        }
        else {
            alert("New event can't be empty")
        }
    }
    handleColorButtonOnClick = (...customProps) => {
        this.setState({
            selectedColor: {
                colorCode: customProps[0],
                colorId: customProps[1],
                textColor: customProps[2]
            }
        })
    }
    toggleaddEventFlag = () => {
        this.setState({
            addEventFlag: !this.state.addEventFlag
        })
    }
}
const mapStateToProps = (state, ownProps) => {
    const { colors, dates } = state
    return {
        colors: colors,
        dates: dates
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent: (event) => { dispatch(deleteEvent(event)) },
        editEvent: (eventTobeEdited) => { dispatch(editEvent(eventTobeEdited)) },
        addEvent: (event) => { dispatch(addEvent(event)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
