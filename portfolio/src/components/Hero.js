import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = () => {
  return (
    <Box
      id="hero"
      sx={{
        height: '100vh',
        backgroundColor: 'background.default',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Lazontez Gardner
        </Typography>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
        >
          Software Test Engineer Based In Nashville, TN
        </Typography>
        <Button href="#projects" style={{ cursor: 'pointer' }}>
        View My Work
        </Button>

      </Container>
    </Box>
  );
};

export default HeroSection;


