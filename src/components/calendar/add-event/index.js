import React, { Fragment, useReducer } from 'react';
import { useDispatch } from 'react-redux';

const DEFAULTSTATE = {
    name: '',
    description: '',
    type: '',
    date: '',
    time: ''
}

const eventReducer = (state, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'UPDATE': {
            const { payload } = action;
            newState = {
                ...newState,
                ...payload,
            }
            return newState;
        }
        case 'RESET': {
            return DEFAULTSTATE;
        }

        default:
            throw new Error();
    }

}

function AddEvent({ selectedDate, closeModal }) {
    const [newEvent, dispatchEvent] = useReducer(eventReducer, DEFAULTSTATE);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        dispatchEvent({ type: 'UPDATE', payload: { [name]: value } });
    }
    /**
     * clean ups on Closing modal
     */
    const onClose = () => {
        closeModal();
        dispatchEvent({ type: 'RESET' });
    }
    /**
     * handle event save
     */
    const onSave = () => {
        closeModal();
        dispatch({ type: 'ADD_EVENT', payload: { event: newEvent, selectedDate } });
        dispatchEvent({ type: 'RESET' });
    }

    return (
        <Fragment>
            <div className="modal-body add-event-wrapper">
                <textarea
                    className="event-input name"
                    id="name"
                    name="name"
                    fullWidth
                    placeholder="Event Name"
                    value={newEvent.name}
                    onChange={handleChange}
                />
               <form className="event-type">
                    <label id="type">Event Type</label>
                    <select
                        id="type"
                        name="type"
                        className="event-input type"
                        value={newEvent.type}
                        onChange={handleChange}
                    >
                        <option value='personal'>Personal</option>
                        <option value='professional'>Professional</option>
                    </select>
                </form>

                {
                    /**
                     * 
                     * Other fields - description, event type .... will come here
                     */
                }
            </div>
            <div className="modal-footer">
                <button variant="outlined" className="cancel-btn" onClick={onClose}>Cancel</button>
                <button variant="contained" color="primary" className="save-btn" onClick={onSave}>Save</button>
            </div>
        </Fragment>

    );
}

export default AddEvent;
