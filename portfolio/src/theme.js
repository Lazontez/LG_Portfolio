// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', 
    background: {
      default: '#EDE7DC', 
      paper: '#D6C4AE', 
    },
    primary: {
      main: '#5F7760',
    },
    secondary: {
      main: '#B09B84',
    },
    text: {
      primary: '#2F2B28',
      secondary: '#5C534C',
    },
    divider: '#C5B8A2', 
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`, 
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 500 },
    body1: { fontSize: '1rem' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 20px',
          backgroundColor: '#5F7760', 
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#4E6351', 
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#D6C4AE',
          color: '#2F2B28',
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
        },
      },
    },
  },
});

export default theme;



