import React from 'react';
import '../../styles/modal.css'
import GenericButton from '../GenericButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
class TaskModal extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { open, handleModal, date, fullScreen, tasks } = this.props
        return (
            <   Dialog
                fullScreen={false}
                open={open}
                onClose={handleModal}
                aria-labelledby="responsive-dialog-title"
                maxWidth={'sm'}
                fullWidth={true}
            >
                <DialogTitle id="responsive-dialog-title">{`${date}  Septermber`}</DialogTitle>
                <DialogContent   >
                    <DialogContentText>
                        <h4>Tasks</h4>
                        {tasks.map(task => {
                            return <p>{task}</p>
                        })}
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={styles.buttonContainer} >
                    <GenericButton customStyle={styles.buttonStyle} onClick={handleModal} >
                        OK
                    </GenericButton>
                </DialogActions>
            </Dialog >
        )


    }
}

export default withMobileDialog()(TaskModal);
const styles = {
    buttonStyle: {
        backgroundColor: '#F6D449',
        paddingLeft: '0px',
        paddingRight: '0px',
        borderRadius: '35px',
        fontSize: '100%',
        minWidth: '110px',
        minHeight: '30px',
        borderWidth: '0px'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }

}