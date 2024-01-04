import React, { useState } from 'react';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Confirm() {
  const [selectedItem, setSelectedItem] = useState('home');
  const navigate = useNavigate();

  const handleSidebarSelect = (item) => {
    setSelectedItem(item);
  };

  const blackTheme = createTheme({
    palette: {
      primary: {
        main: '#000', // Black color
      },
    },
  });

  const handleClick = () => {
    navigate("/login");
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const CustomCard = ({ to, imageSrc, title, material, price }) => (
    <Card sx={{ backgroundColor: '#f5f5f5', flex: '1 1 23%', margin: '8px', textDecoration: 'none', color: 'inherit' }}>
      <CardContent>
        <Typography variant="h4" component="div">
          {title}
        </Typography>
        <div>
          <Typography variant="body2" color="text.secondary">
            Material: {material}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {price}
          </Typography>
        </div>
        <CardMedia component="img" height="140" alt={`Image for ${title}`} src={imageSrc} />
      </CardContent>
      {/* Pass the card data as state to the details page */}
      <Button
        component={Link}
        to={{ pathname: to, state: { cardData: { title, material, price, imageSrc } } }}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        View Details
      </Button>
    </Card>
  );

  const cardData = [
    // ... (your existing data)
  ];

  return (
    <ThemeProvider theme={blackTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="fixed" style={{ width: '100%' }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, display: 'flex', justifyContent: 'center' }}
            >
             Bed
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
        <Box sx={{ marginTop: 8, padding: 2 }}>
          <Grid container spacing={2}>
            {cardData.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <CustomCard
                  to={card.to}
                  title={card.title}
                  material={card.material}
                  price={card.price}
                  imageSrc={card.imageSrc}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center', color: 'black' }}>
          {selectedItem === 'about' && <Typography variant="h5"></Typography>}
          {selectedItem === 'contact' && <Typography variant="h5"></Typography>}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
