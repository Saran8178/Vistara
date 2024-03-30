import React, { useState,useEffect} from 'react';
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
import Preloader from './Preloader';

export default function Sofa() {
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setLoading(false);
    }, 8000); // Change this time as per your requirement
  }, []);

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
      title: "Two Seater",
      material: "Leather",
      price: "$100",
      imageSrc: "https://pluspng.com/img-png/sofa-hd-png-green-sofa-png-image-3502.jpg",
    },
    {
      to: "/common/card2",
      title: "Myca Sofa",
      material: "Leather",
      price: "$120",
      imageSrc: "https://clipart.info/images/ccovers/1496091487sofa-hd-furniture-png-transparent.png",
    },
    {
      to: "/common/card3",
      title: "Burma Woods",
      material: "Teak",
      price: "$800",
      imageSrc: "https://www.pngkey.com/png/full/35-354907_castle-wooden-sofa-set-outdoor-sofa.png",
    },
    {
      to: "/common/card4",
      title: "Family Seater",
      material: "Fabric",
      price: "$100",
      imageSrc: "https://pngimg.com/uploads/sofa/sofa_PNG6958.png",
    },
    {
      to: "/common/card5",
      title: "Couple Seater",
      material: "Fabric",
      price: "$180",
      imageSrc: "https://www.efr.com.sg/wp-content/uploads/2018/06/HD-2243-2.jpg",
    },
    {
      to: "/common/card6",
      title: "Luxury Seater",
      material: "Fabric",
      price: "$80",
      imageSrc: "http://www.avetexfurniture.com/images/products/2/48162/classic-sofa-chic-fabric-hd450-b2.jpg",
    },
    {
      to: "/common/card7",
      title: "Premium Seater",
      material: "Fabric",
      price: "$700",
      imageSrc: "https://wallpaperaccess.com/full/3683906.jpg",
    },
    {
      to: "/common/card8",
      title: "Corner Sofa",
      material: "Leather",
      price: "$1000",
      imageSrc: "https://www.efr.com.sg/wp-content/uploads/2018/06/HD-2210-1.jpg",
    },
    {
      to: "/common/card9",
      title: "Burma Woods",
      material: "Wood",
      price: "$1800",
      imageSrc: "https://www.pngitem.com/pimgs/m/248-2485885_sheesham-wood-sofa-set-hd-png-download.png",
    },
    {
      to: "/common/card10",
      title: "Single Sofa",
      material: "Fabric",
      price: "$200",
      imageSrc: "https://www.efr.com.sg/wp-content/uploads/2018/06/HD-2240-1.jpg",
    },
    {
      to: "/common/card11",
      title: "Couple sofa",
      material: "Leather",
      price: "$180",
      imageSrc: "https://www.yonohomedesign.com/wp-content/uploads/2017/08/2-seater-sofa-jlmdvmz-.jpg",
    },
    {
      to: "/common/card12",
      title: "Family Set Sofa",
      material: "Fabric",
      price: "$200",
      imageSrc: "https://i.pinimg.com/originals/c7/88/f8/c788f82766dd680b323f3c6c9bd4c1f8.jpg",
    },
  ];
  
  
  return (
    <ThemeProvider theme={blackTheme}>
      <CssBaseline />
      {loading ? <Preloader /> : null}
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="fixed" style={{ width: '100%' }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, display: 'flex', justifyContent: 'center' }}
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