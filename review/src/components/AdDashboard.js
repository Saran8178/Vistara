import React, { useState } from 'react';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
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
import '../Assests/CSS/App.css'


export default function Addashboard() {
  const [selectedItem, setSelectedItem] = useState('home');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const CustomCard = ({ to, imageSrc, title, material, price }) => (
    <Card component={Link} to={to} sx={{ backgroundColor: '#f5f5f5', textDecoration: 'none', color: 'inherit', margin: '10px' }}>
      <CardContent>
        <Typography variant="h4" component="div">
          {title}
        </Typography>
        <div>
          
        </div>
        <CardMedia component="img" height="140" alt={`Image for ${title}`} src={imageSrc} />
      </CardContent>
    </Card>
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
        <ListItem button onClick={() => onSelect('user')}>
          <ListItemText>
            <Typography variant="body1" style={{ color: '#fff' }}>
              Users
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem button onClick={() => onSelect('product')}>
          <ListItemText>
            <Typography variant="body1" style={{ color: '#fff' }}>
              Product
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
      <Box sx={{ display: 'flex' ,justifyContent:'center',textAlign:'center'}}>
      <AppBar position="fixed" style={{ width: '100%' }}>
          <Toolbar>
            {/* Removed IconButton and replaced with Typography */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1,  display: 'flex', justifyContent: 'center' }}
            >
              Admin
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
        
        <Box sx={{ marginTop: 8, paddingLeft:20 , display: 'flex', justifyContent: 'center'}}>
          <CustomCard
            to="/card1"
            title="Users"
            
            imageSrc="https://www.kindpng.com/picc/m/33-338711_circle-user-icon-blue-hd-png-download.png"
          />
          <CustomCard
            to="/details"
            title="Products"
           
            imageSrc="https://i.pinimg.com/originals/b8/fe/3b/b8fe3bef1d795cae9b2d2f754177ab83.jpg"
          />
          
        </Box>
        <Box sx={{ marginTop: 2}}>
          
          {selectedItem === 'about' && <Typography variant="h5"></Typography>}
          {selectedItem === 'contact' && <Typography variant="h5"></Typography>}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
