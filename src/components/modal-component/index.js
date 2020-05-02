import React from 'react';
import '../../styles/modal.css'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import ModalContent from './ModalContent';
class EventModal extends React.Component {
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
        const { open, closeModal, date, events } = this.props
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
                <DialogTitle id="responsive-dialog-title" >
                    <div className="modalTitle" >
                        <div className="row" style={rowsInsideModal} >
                            <div className="col-2 offset-10 closeButton">
                                <button className="modalCloseButton" onClick={closeModal} >x</button>
                            </div>
                        </div>
                        <div className="row" style={rowsInsideModal} >
                            <div className="col-12" >
                                <h4> {`${date}  September`}</h4>
                            </div>
                        </div>
                    </div>
                </DialogTitle>

                <DialogContent className="modalContent">
                    <DialogContentText>
                        <ModalContent events={events} date={date} />
                    </DialogContentText>
                </DialogContent>
            </Dialog >
        )
    }
}
export default withMobileDialog()(EventModal);
const rowsInsideModal={
    padding: '0px', 
    marginRight: '0px'
}