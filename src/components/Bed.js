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
import { useAppContext } from './Appcontext';

export default function Bed() {
  const [selectedItem, setSelectedItem] = useState('home');
  const navigate = useNavigate();
  const { setSelectedProduct } = useAppContext();
 


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

  const CustomCard = ({ to, ...card }) => (
    <Card
    component={Link}
    to={to}
    onClick={() => {
      setSelectedProduct(card);
      navigate(to.pathname);
    }}
      sx={{ backgroundColor: '#f5f5f5', flex: '1 1 23%', margin: '8px', textDecoration: 'none', color: 'inherit' }}
    >
      <CardContent>
        <Typography variant="h4" component="div">
          {card.title}
        </Typography>
        <div>
          <Typography variant="body2" color="text.secondary">
            Material: {card.material}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {card.price}
          </Typography>
        </div>
        <CardMedia component="img" height="140" alt={`Image for ${card.title}`} src={card.imageSrc} />
      </CardContent>
    </Card>
  );  

  const cardData = [
    {
      to: "/common/card1",
      title: "Fiber Coating Bed",
      material: "Wood",
      price: "$100",
      imageSrc: "https://4.imimg.com/data4/CR/CK/MY-2742377/0.jpg",
    },
    {
      to: "/common/card2",
      title: "Spring Matters",
      material: "Teakr",
      price: "$120",
      imageSrc: "https://purepng.com/public/uploads/large/purepng.com-bedbedpadsackdossbedstead-17015279216249al5q.png",
    },
    {
      to: "/common/card3",
      title: "Double Bed",
      material: "Teak",
      price: "$800",
      imageSrc: "https://pngimg.com/uploads/bed/bed_PNG17410.png",
    },
    {
      to: "/common/card4",
      title: "Dark wood Bed",
      material: "Wood",
      price: "$100",
      imageSrc: "https://i.pinimg.com/originals/3b/7d/9f/3b7d9f0f540ac3ff4b54ae3d83000c31.jpg",
    },
    {
      to: "/common/card5",
      title: "Double Bed",
      material: "Fabric",
      price: "$180",
      imageSrc: "https://cdn.picpng.com/bed/bed-image-34645.png",
    },
    {
      to: "/common/card6",
      title: "Fabric Bed",
      material: "Fabric",
      price: "$180",
      imageSrc: "https://clipground.com/images/bed-png-images-16.png",
    },
    {
      to: "/common/card7",
      title: "Spring Matres",
      material: "Fabric",
      price: "$700",
      imageSrc: "https://purepng.com/public/uploads/large/21502323207hanoemwa2a3hmrw7dborjplmqpeds0igfkcbauskgkk7zkiofrrvc2aps1o9fymiw4wpveavenxwjg4hi8lxhofevosiutcfifhu.png",
    },
    {
      to: "/common/card8",
      title: "Burma Bed",
      material: "Leather",
      price: "$1000",
      imageSrc: "https://i.pinimg.com/originals/2c/01/c1/2c01c186acfdfbccfcadb33b35614ed8.jpg",
    },
    {
      to: "/common/card9",
      title: "Matres Ministry",
      material: "Wood",
      price: "$1800",
      imageSrc: "https://www.headingwest.org/wp-content/uploads/2013/11/bed.jpg",
    },
    {
      to: "/common/card10",
      title: "Single Matress",
      material: "Fabric",
      price: "$200",
      imageSrc: "https://homesfeed.com/wp-content/uploads/2015/09/Loft-bed-frame-with-headboard-for-modern-bedroom-white-pillows-white-bedding-and-white-bedcover-modern-wood-bedside-tables-modern-wood-cabinet-systems-.jpg",
    },
    {
      to: "/common/card11",
      title: "Continental Bed",
      material: "Leather",
      price: "$180",
      imageSrc: "https://www.furnituremanila.com.ph/wp-content/uploads/2016/11/6216-768x596.jpg",
    },
    {
      to: "/common/card12",
      title: "Cama Fabric",
      material: "Fabric",
      price: "$200",
      imageSrc:" https://pngimg.com/uploads/bed/bed_PNG17417.png",
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
              Product
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
                      to={{
                        pathname: card.to,
                        state: {
                          title: card.title,
                          material: card.material,
                          price: card.price,
                          imageSrc: card.imageSrc,
                        },
                      }}
                      // Pass the entire card object as props
                      {...card}
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