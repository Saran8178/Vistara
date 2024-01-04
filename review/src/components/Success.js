import React from 'react';

const Success = () => {
  const divStyle = {
    width: '100vw',
    height: '100vh',
    marginTop:'-200px',
    backgroundImage: 'url(https://i.pinimg.com/originals/30/7f/2c/307f2c75edf56e65b1517978ced5f081.gif)',
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Add more styles as needed
  };

  return (
    <div style={divStyle}>
      {/* Your component content goes here */}
    </div>
  );
}

export default Success;
