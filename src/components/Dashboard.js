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
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function Dashboard() {
  const [selectedItem, setSelectedItem] = useState('home');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const CustomCard = ({ to, imageSrc, title, material, price }) => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card component={Link} to={to} sx={{ backgroundColor: '#f5f5f5', textDecoration: 'none', color: 'inherit' }}>
        <CardContent>
          <Typography variant="h4" component="div">
            {title}
          </Typography>

          <CardMedia component="img" height="140" alt={`Image for ${title}`} src={imageSrc} />
        </CardContent>
      </Card>
    </Grid>
  );

  const blackTheme = createTheme({
    palette: {
      primary: {
        main: '#000', // Black color
      },
    },
  });

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

  const Sidebar = ({ onSelect }) => (
    <Drawer variant="permanent" anchor="left" sx={{ backgroundColor: "#000" }}>
      <List>
        <ListItem button onClick={() => onSelect('home')}>
          <ListItemText>
            <Typography variant="body1" style={{ color: 'white' }}>
              Home
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem button onClick={() => onSelect('orders')}>
          <ListItemText>
            <Typography variant="body1" style={{ color: '#fff' }}>
              My Orders
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem button onClick={() => onSelect('cart')}>
          <ListItemText>
            <Typography variant="body1" style={{ color: '#fff' }}>
              Cart
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem button onClick={() => onSelect('settings')}>
          <ListItemText>
            <Typography variant="body1" style={{ color: '#fff' }}>
              Settings
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem button onClick={() => onSelect('logout')}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleClick}
            style={{ backgroundColor: 'grey', display: 'flex', justifyContent: 'end' }}
          >
            Logout
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );

  const handleSidebarSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <ThemeProvider theme={blackTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', paddingLeft: 50, height: 6 }}>
        <AppBar position="fixed" style={{ width: '100%' }}>
          <Toolbar>
            {/* Removed IconButton and replaced with Typography */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, display: 'flex', justifyContent: 'center' }}
            >
              Dashboard
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
        <Sidebar onSelect={handleSidebarSelect} />
        <Grid container spacing={2} sx={{ marginTop: 8, padding: 2, justifyContent: 'center' }}>

          <CustomCard
            to="/sofa"
            title="SOFA"
            material="Teak"
            price="$500"
            imageSrc="https://i5.walmartimages.com/asr/9a1f0081-7d69-4be8-8a13-43e43d5437da.caa441b83b5663cdf3db52c7dc4c10bc.jpeg"
          />
          <CustomCard
            to="/dinning"
            title="DINING"
            material="Teak"
            price="$500"
            imageSrc="http://www.avetexfurniture.com/images/products/3/50343/classic-dining-table-rich-brown-ornately-carved-hd-013-b.jpg"
          />
          <CustomCard
            to="/bed"
            title="BED"

            imageSrc="https://cdn.picpng.com/bed/bed-hd-34654.png"
          />
          <CustomCard
            to="/chair"
            title="CHAIR"

            imageSrc="https://wallpapercave.com/wp/wp7430921.jpg"
          />
          {/* Add more custom cards as needed */}
        </Grid>
        <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}>
          {/* Display content based on the selected item in the sidebar */}
          {selectedItem === 'about' && <Typography variant="h5"></Typography>}
          {selectedItem === 'contact' && <Typography variant="h5"></Typography>}
        </Box>
      </Box>
    </ThemeProvider>
  );
}