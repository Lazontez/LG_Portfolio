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
    description: `A playwright test suite testing Amazon's eccommerce website`,
    image: AmazonPlaywrightImage,
    link: 'https://github.com/Lazontez/Amazon_Test_Playwright'
  },
  {
    title: 'Issue Tracker with Automated testing',
    description: 'Lightweight bug/issue tracking web app similiar to Jira',
    image: KaleImage,
    link: 'https://github.com/Lazontez/Instructor'
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
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {project.title}
                  </Typography>
                  <Typography variant="body2">
                    {project.description}
                  </Typography>
                  <Button href={project.link}>
                    View
                  </Button>
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


