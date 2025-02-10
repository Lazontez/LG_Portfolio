// src/components/AboutSection.js
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const AboutSection = () => {
  return (
    <Box id="about" sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          About Me
        </Typography>
        <Typography variant="body1" component="p">
          I am a QA Engineer/Full Stack Developer who's passionate about building reliable software through automation and testing.
          I believe in solving problems through testing, automation and smart development. 
          As Marcus Aurelius said, 'What stands in the way becomes the way'
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;


