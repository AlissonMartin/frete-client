import React from 'react'
import { Modal, Box, Typography, CardHeader, Card, IconButton, CardContent, Backdrop } from '@mui/material'
import { Close } from '@mui/icons-material';

const MapModal = ({show, setShow}) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "75%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };


  return (
    <Modal
      open={show}
      onClose={() => setShow(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
    >
      <Card sx={style}>
        <CardHeader
          title={"Crie um novo agendamento"}
          action={
            <IconButton onClick={()=> setShow(false)}>
              <Close />
            </IconButton>
          }>

        </CardHeader>
        <CardContent>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  )
}

export default MapModal