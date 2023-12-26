import React, { useState } from 'react'
import { Modal, Box, Typography, CardHeader, Card, IconButton, CardContent, FormControl, TextField, Grid, Button } from '@mui/material'
import { Close } from '@mui/icons-material';
import MapModal from './MapModal';


const NewAppointmentModal = ({ show, setShow, date }) => {

  const [showMapModal, setShowMapModal] = useState(false)

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
          <FormControl>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Button variant="outlined" onClick={() => setShowMapModal(true)}>Selecionar destino</Button>
              </Grid>
              <Grid item xs={4}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item xs={4}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item xs={4}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
            </Grid>
          </FormControl>
        </CardContent>
        <MapModal
          show={showMapModal}
          setShow={setShowMapModal}
        />
      </Card>
    </Modal>
  )
}

export default NewAppointmentModal