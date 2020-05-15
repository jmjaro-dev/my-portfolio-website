import React from 'react';
import { Dialog, DialogContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

const styles = {
  closeButton: {
    position: 'absolute',
    textAlign: 'right',
    overflow: 'visible',
    top: 10,
    right: 10,
    backgroundColor: '#333',
    color: '#fff',
    width: '1.5em',
    height: '1.65em'
  },
};

const ImgModal = ({ url, open, handleClose }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='lg'
        fullWidth
      >
        <DialogContent style={{ padding: '0.5em'}}>
          <IconButton style={styles.closeButton} aria-label="close" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
          <img src={url} height="90%" width="100%" alt="test" />
        </DialogContent>            
      </Dialog>     
    </div>
  )
}

ImgModal.propTypes = {
  img: PropTypes.string,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default ImgModal;