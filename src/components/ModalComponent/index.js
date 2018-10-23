import React from 'react';
import '../../styles/modal.css'
import Dialog from '@material-ui/core/Dialog';
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
                <DialogTitle id="responsive-dialog-title" style={{ paddingRight: '0px', paddingTop: '0px', paddingBottom: '0px' }}>
                    <div className="modalTitle" >
                        <div className="row" style={{ padding: '0px', marginRight: '0px' }} >
                            <div className="col-2 offset-10" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button className="modalCloseButton" style={{ padding: '0px', margin: '0px' }} onClick={closeModal} >x</button>
                            </div>
                        </div>

                        <div className="row" style={{ padding: '0px', marginRight: '1px' }} >
                            <div className="col-12" style={{ padding: '0px' }} >
                                <h4> {`${date}  September`}</h4>
                            </div>
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