import React, { useState } from 'react';



import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import Footer from './Footer';
import Nav from './Nav';

const Home = () => {
  const cardData = [
    {
      title: "Sofa",
      imageSrc: "https://pluspng.com/img-png/sofa-hd-png-green-sofa-png-image-3502.jpg",
    },
    {
      title: "Chair",
      imageSrc: "https://wallpapercave.com/wp/wp7430811.jpg",
    },
    {
      to: "/common/card3",
      title: "Bed",
      imageSrc: "https://pluspng.com/img-png/bed-hd-png-modern-reclaimed-wood-platform-bed-modern-beds-grand-rapids-by-woodland-creek-furniture-1561.png",
    },
  ];

  const CustomCard = ({ to, ...card }) => (
    <Card
      component={Link}
      to={to}
      onClick={() => { }}
      sx={{ backgroundColor: '#f5f5f5', flex: '1 1 23%', margin: '8px', textDecoration: 'none', color: 'inherit' }}
    >
      <CardContent>
        <Typography variant="h4" component="div">
          {card.title}
        </Typography>
        <CardMedia component="img" height="140" alt={`Image for ${card.title}`} src={card.imageSrc} />
      </CardContent>
    </Card>
  );

  // const handleNewUserMessage = (newMessage) => {
  //   // Handle incoming user messages here
  //   addResponseMessage("I'm sorry, I'm just a demo. I don't know how to respond!");
  // };

  return (
    <>
      <Nav />
      <div>
        {/* <img
          src="https://images8.alphacoders.com/109/thumb-1920-1099107.jpg"
          alt="Your Image"
          style={{ height: '500px', width: '90vw' }}
        /> */}
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
                  {...card}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>

      <Footer />


    </>
  );
};

export default Home;
