// src/components/ProjectsSection.js
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import InstructorImage from '../assets/Lazontez-Gardner-QA-Engineer-Project-Instructor-Pro.jpg'
import AmazonPlaywrightImage from '../assets/Lazontez-Gardner-QA-Engineer-Project-Amazon-Test-Suite.jpg'
import KaleImage from '../assets/Lazontez-Gardner-QA-Engineer-Portfolio-Kale.jpg'

const projects = [
  {
    title: 'Instructor Pro',
    description: 'An AI powered guitar lesson tracker with goal setting, AI suggested subtasks and progress tracking.',
    image: InstructorImage,
    link: 'https://github.com/Lazontez/Instructor'
  },
  {
    title: 'Amazon Playwright Test Suite',
    description: `A playwright test suite testing Amazon's ecommerce website`,
    image: AmazonPlaywrightImage,
    link: 'https://github.com/Lazontez/Amazon_Test_Playwright'
  },
  {
    title: 'Zentry Accesibility',
    description: 'A google chrome extension that checks for accessibility issues on any website and generates a pdf report.',
    embed: `<div style="position: relative; padding-bottom: 56.25%; height: 0;">
              <iframe src="https://www.loom.com/embed/9b74f40e30024785ae3a6e93edf1203c?sid=80fa2952-b4b6-46d7-a993-5897bcb81ca3" 
                      frameborder="0" 
                      webkitallowfullscreen 
                      mozallowfullscreen 
                      allowfullscreen 
                      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
              </iframe>
            </div>`,
    link: 'https://www.loom.com/share/9b74f40e30024785ae3a6e93edf1203c'
  }
];

const ProjectsSection = () => {
  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {project.image ? (
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                  />
                ) : (
                  <div
                    dangerouslySetInnerHTML={{ __html: project.embed }}
                    style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}
                  />
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  {project.link && (
                    <Button href={project.link} variant="contained" color="primary">
                      View
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;


