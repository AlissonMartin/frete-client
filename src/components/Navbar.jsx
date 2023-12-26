import { AppBar, Box, Grid, IconButton, Toolbar, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import React, { useState } from 'react'
import Sidebar from './Sidebar';

const Navbar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [anchorElem, setAnchorElem] = useState(null)


  const openMenu = (e) => {
    setAnchorElem(e.currentTarget)
    setMenuIsOpen(true)
  }

  const closeMenu = () => {
    setAnchorElem(null)
    setMenuIsOpen(false)
  }

  return (
    <Box>
      <AppBar
        position='static'
        sx={{ height: 64, width: "100%", marginBottom: 2 }}
        color='default'
      >
        <Toolbar>
          <Grid container sx={{ alignItems: "center", justifyContent: "space-between", padding: 0, height: "100%" }}>
            <Grid item xs={2}>
              <IconButton onClick={() => setSidebarIsOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={2}>
              <Menu
                anchorEl={anchorElem}
                onClose={closeMenu}
                onClick={closeMenu}
                open={menuIsOpen}

              >
                <MenuItem onClick={closeMenu}>
                <IconButton >
                    <PersonIcon />
                  </IconButton> 
                  Perfil
                </MenuItem>
                <MenuItem onClick={closeMenu}>
                  <IconButton >
                    <PersonIcon />
                  </IconButton> 
                  Minha Conta
                </MenuItem>
              </Menu>
              <IconButton onClick={openMenu}>
                <PersonIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={sidebarIsOpen} setIsOpen={setSidebarIsOpen}/>
    </Box>
  )
}

export default Navbar