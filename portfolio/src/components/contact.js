// src/components/ContactSection.js
import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

const ContactSection = () => {
  return (
    <Box id="contact" sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Contact
        </Typography>
        <form noValidate autoComplete="off">
          <TextField fullWidth label="Your Email" variant="outlined" sx={{ mb: 2 }} />
          <TextField fullWidth label="Your Message" variant="outlined" multiline rows={4} sx={{ mb: 2 }} />
          <Button variant="contained" color="primary">
            Send Message
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default ContactSection;

