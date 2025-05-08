// src/components/Footer.js
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          &copy; {new Date().getFullYear()} Built By Lazontez. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;


