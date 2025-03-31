// import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
// import React from 'react'
// import MenuIcon from "@mui/icons-material/Menu";


// const Navbar = () => {
//   return (
//     <AppBar position="static" sx={{background: "transparent", boxShadow: "none", color:'black', fontFamily:'sans-serif'}}>
//       <Toolbar>
//         {/* Menu Icon (For Mobile) */}
//         <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
//           <MenuIcon />
//         </IconButton>

//         {/* Title */}
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Akansha Bhandari ✨
//         </Typography>

//         {/* Navigation Buttons */}
//         <Box sx={{ display:'flex', flexDirection:'row' }}>
//           <Button color="inherit">Home</Button>
//           <Button color="inherit">About</Button>
//           <Button color="inherit">Skills</Button>
//           <Button color="inherit">Qualification</Button>
//           <Button color="inherit">Experience</Button>
//           <Button color="inherit">Projects</Button>
//           <Button color="inherit">Contact</Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setDrawerOpen(false); // Close drawer after selecting
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Qualification', id: 'qualification' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#1E1E2E', boxShadow: 'none', color: 'black' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
          Akansha Bhandari ✨
        </Typography>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List sx={{ width: 200 }}>
                {navItems.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton onClick={() => handleScroll(item.id)}>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => handleScroll(item.id)}
                sx={{ color: 'white', textTransform: 'none', fontSize: '18px' }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
