// src/components/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../assets/Lazontez-Gardner-QA-Engineer-Portfolio-Logo_2.png';
// import '../utils/Header.css';

const Header = () => {

  return (
    <AppBar
      position="sticky"
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: '50px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {/* Left: Logo */}
          <Box>
            <img
              src={logo}
              alt="Lazontez Gardner QA Engineer Portfolio Logo"
              style={{ height: '60px', marginRight: '1px' }}
            />
          </Box>

          <Button
            disableRipple
            disableFocusRipple
            
            sx={{
              textTransform: 'none',
              padding: '6px 12px',
              marginLeft: 'auto'
            }}
            target='blank'
            href="https://www.linkedin.com/in/lazontez-g-805669169/"
            id="linkedinLink"
          >
            LinkedIn
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;


