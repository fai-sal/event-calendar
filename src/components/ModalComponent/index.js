import React from 'react';
import '../../styles/modal.css'
import GenericButton from '../GenericButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Tasks from './TasksInModal';
class TaskModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: this.props.open
        }
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    render() {
        const { open, closeModal, date, tasks } = this.props
        return (
            <   Dialog
                fullScreen={false}
                open={open}
                onClose={closeModal}
                aria-labelledby="responsive-dialog-title"
                maxWidth={'sm'}
                fullWidth={true}
                scroll='paper'
            >
                <DialogTitle id="responsive-dialog-title">
                    <div className="modalTitle">
                        <div className="col-6" style={{ padding: '0px' }} >
                            <h4> {`${date}  September`}</h4>
                        </div>
                        <div className="col-4">
                            <button className="modalCloseButton" onClick={closeModal}>x</button>
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent style={{ padding: '10px', }}>
                    <DialogContentText>
                        <Tasks tasks={tasks} date={date} />
                    </DialogContentText>
                </DialogContent>
                {/* <DialogActions style={styles.buttonContainer} >
                    <GenericButton customStyle={styles.buttonStyle} onClick={closeModal} >
                        OK
                    </GenericButton>
                </DialogActions> */}
            </Dialog >
        )
    }
}

export default withMobileDialog()(TaskModal);
const styles = {
    buttonStyle: {
        backgroundColor: '#F6D449',
        paddingTop: '2px',
        paddingBottom: '2px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '5px',
        fontSize: '100%',
        minWidth: '1vw',
        minHeight: '5px',
        borderWidth: '0px'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }

}