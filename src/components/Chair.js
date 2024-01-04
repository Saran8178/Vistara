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

export default function Chair() {
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
    <Card component={Link} to={to} sx={{ backgroundColor: '#f5f5f5', flex: '1 1 23%', margin: '8px', textDecoration: 'none', color: 'inherit' }}>
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
    </Card>
  );

  const cardData = [
    {
      to: "/card1",
      title: "Burma Chair",
      material: "Wood",
      price: "$600",
      imageSrc: "https://freepngimg.com/thumb/chair/59-chair-png-image.png",
    },
    {
      to: "/card2",
      title: "Semi-Sleeper Chair",
      material: "Wood",
      price: "$200",
      imageSrc: "https://i.pinimg.com/originals/52/9b/1b/529b1be38c6d8f6943b128bc8a317ce4.jpg",
    },
    {
      to: "/card3",
      title: "Office Chair",
      material: "Wood",
      price: "$800",
      imageSrc: "https://lh3.googleusercontent.com/blogger_img_proxy/AJ0KDdWK3QEMhiG2eTTgMCyDVIW6Al1HyOLWI21nH8SHYdffFxGciIepk4atlDy9kIRsV8F_xcDUKIsKIrTHqKFBR2KOtR2jVLdwrB4sYuwzY6v9wIEFpXzN_b-iR3u1IvbCJvtal5x7QkUST3HgNmY01A4=w1200-h630-p-k-no-nu",
    },
    {
      to: "/card3",
      title: "Single Seater",
      material: "Wood",
      price: "$700",
      imageSrc: "https://wallpapercave.com/wp/wp2163481.jpg",
    },
    {
      to: "/card3",
      title: "Kushion Chairs",
      material: "Wood",
      price: "$200",
      imageSrc: "https://wallpapercave.com/wp/wp2163495.jpg",
    },
    {
      to: "/card3",
      title: "Lounge Chairs",
      material: "Teak",
      price: "$700",
      imageSrc: "https://www.wallpaperup.com/uploads/wallpapers/2013/03/29/66596/65df7c05c2cbfe9041cff5b14ef6b404.jpg",
    },


    {
      to: "/card3",
      title: "Luxury Chairs",
      material: "Teak",
      price: "$1000",
      imageSrc: "https://images8.alphacoders.com/602/602299.jpg",
    },
    {
      to: "/card3",
      title: "House Hold Chair",
      material: "Leather",
      price: "$100",
      imageSrc: "https://www.millenniumseating.com/Shared/images/Product/hd-6145_pr.jpg",
    }, {
      to: "/card3",
      title: "Kushion Chair",
      material: "Wood",
      price: "$800",
      imageSrc: "https://pluspng.com/img-png/chair-hd-png-chair-restoration-433.png",
    },
    {
      to: "/card3",
      title: "Studio Chair",
      material: "linen",
      price: "$800",
      imageSrc: "https://www.kindpng.com/picc/m/102-1026390_studio-chair-png-hd-transparent-png.png",
    },
    {
      to: "/card3",
      title: "Premium Chair",
      material: "Wood",
      price: "$500",
      imageSrc: "https://images.all-free-download.com/images/graphiclarge/chairs_and_chandeliers_picture_167678.jpg",
    },
    {
      to: "/card3",
      title: " Acent Chair",
      material: "Wood",
      price: "$500",
      imageSrc: "https://images-na.ssl-images-amazon.com/images/I/71p1V01u5SL.jpg",
    },

  
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
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' ,md: 'flex'}, justifyContent: 'center' }}
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
