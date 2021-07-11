import React, { Fragment, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core/';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
                <TextField
                    className="event-input name"
                    id="name"
                    name="name"
                    fullWidth
                    placeholder="Event Name"
                    value={newEvent.name}
                    onChange={handleChange}
                />
               <FormControl className="event-type">
                    <InputLabel id="type">Event Type</InputLabel>
                    <Select
                        id="type"
                        name="type"
                        className="event-input type"
                        value={newEvent.type}
                        onChange={handleChange}
                    >
                        <MenuItem value='personal'>Personal</MenuItem>
                        <MenuItem value='professional'>Professional</MenuItem>
                    </Select>
                </FormControl>

                {
                    /**
                     * 
                     * Other fields - description, event type .... will come here
                     */
                }
            </div>
            <div className="modal-footer">
                <Button variant="outlined" className="cancel-btn" onClick={onClose}>Cancel</Button>
                <Button variant="contained" color="primary" className="save-btn" onClick={onSave}>Save</Button>
            </div>
        </Fragment>

    );
}

export default AddEvent;