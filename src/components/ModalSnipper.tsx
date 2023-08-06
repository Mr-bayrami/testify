
import { CircularProgress } from '@mui/material';
import  Box  from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react'
export type modalType={
  open : boolean;
}
function ModalSnipper({open}:modalType) {
  return (
    <div><Modal
    open={open}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box >
    <CircularProgress />
    </Box>
  </Modal></div>
  )
}

export default ModalSnipper