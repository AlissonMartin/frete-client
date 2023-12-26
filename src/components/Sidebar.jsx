import React from 'react'
import { Drawer, IconButton, List, ListItem, ListItemText, Divider, ListItemButton } from '@mui/material'
import EventNoteIcon from '@mui/icons-material/EventNote';
import { ChevronLeft } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const Sidebar = ({ isOpen, setIsOpen }) => {

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

  return (
    <Drawer
      anchor={"left"}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
        },
      }}
    >
      <DrawerHeader sx={{ justifyContent: 'end' }}>
        <IconButton onClick={() => setIsOpen(false)}>
          <ChevronLeft />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <Link style={{ textDecoration: "none", color: "black" }} to={"/schedule"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Agenda"} />
              <IconButton>
                <EventNoteIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to={"/schedule"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Agenda"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  )
}

export default Sidebar