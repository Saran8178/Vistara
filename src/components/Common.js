import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAppContext } from './Appcontext';
import { Link } from 'react-router-dom';
const Common = () => {
  const { selectedProduct } = useAppContext();

  const blackTheme = createTheme({
    palette: {
      primary: {
        main: '#000', // Black color
      },
    },
  });

  if (!selectedProduct) {
    // Handle case where selectedProduct is not available (e.g., direct access to /common without going through CustomCard)
    return (
      <ThemeProvider theme={blackTheme}>
        <CssBaseline />
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" style={{ marginBottom: '20px' }}>
              No data available
            </Typography>
            <Button variant="contained" color="primary" href="/sofa">
              Go back to Product
            </Button>
            <Button variant="contained" color="primary" href="/">
              Add to cart
            </Button>
          
            <Button variant="contained" color="primary" href="/">
              Buy
            </Button>
         
          </Box>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={blackTheme}>
      <CssBaseline />
      <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" style={{ marginBottom: '20px' }}>
            Details 
          </Typography>
          <Paper sx={{ padding: 2, maxWidth: 400 }}>
            <Typography variant="h5" gutterBottom>
              {selectedProduct.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Material: {selectedProduct.material}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Price: {selectedProduct.price}
            </Typography>
            <img
              src={selectedProduct.imageSrc}
              alt={`Image for ${selectedProduct.title}`}
              style={{ width: '100%', marginTop: '10px' }}
            />
          </Paper>
          <Button sx={{ marginTop: '20px' }} variant="contained" color="primary" href="/sofa">
            Back to Product
          </Button>
          <Button sx={{ marginTop: '20px' }} variant="contained" color="primary" href="">
            Add to cart
          </Button>
          <Link to={"/payment"}>
          <Button sx={{ marginTop: '20px' }} variant="contained" color="primary" href="">
            Buy
          </Button>
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Common;
