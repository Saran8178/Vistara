import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import "../Assests/CSS/App.css"

export default function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const initialProducts = [
      { id: 1, name: 'Sofa', price: 50, quantity: 10 },
      { id: 2, name: 'Dining', price: 75, quantity: 15 },
      { id: 3, name: 'Bed', price: 5000, quantity: 20 },
      { id: 4, name: 'Chair', price: 50, quantity: 10 },
      
    ];

    const storedProducts = JSON.parse(localStorage.getItem('products')) || initialProducts;
    setProducts(storedProducts);
  }, []);

  const addProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const updateProductPrice = (productId, newPrice) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, price: newPrice } : product
    );
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const getTotalItems = () => {
    return products.reduce((total, product) => total + product.quantity, 0);
  };

  const CustomTableRow = ({ id, name, price, quantity }) => {
    const [newPrice, setNewPrice] = useState(price);

    const handlePriceChange = (e) => {
      setNewPrice(parseFloat(e.target.value));
    };

    const totalValue = price * quantity;

    return (
      <TableRow style={{ borderBottom: '1px solid #ddd' }}>
        <TableCell>{name}</TableCell>
        <TableCell>${price}</TableCell>
        <TableCell>{quantity}</TableCell>
        <TableCell>${totalValue}</TableCell>
      
        <TableCell>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newPrice = parseFloat(e.target.price.value);
              updateProductPrice(id, newPrice);
            }}
          >
            <label>
              New Price:
              <input
                type="number"
                name="price"
                value={newPrice}
                onChange={handlePriceChange}
              />
            </label>
            <Button type="submit" style={{ backgroundColor: '#ff0000', color: '#fff' }}>
              Update Price
            </Button>
          </form>
        </TableCell>
      </TableRow>
    );
  };

  const blackTheme = createTheme({
    palette: {
      primary: {
        main: '#000',
      },
    },
  });

  return (
    <ThemeProvider theme={blackTheme}>
      <CssBaseline />
      <Box sx={{ marginTop: '-90px', display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor:'white' }}>
        <Typography variant="h4" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          Product Database
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total Value</TableCell>
                <TableCell>Update Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <CustomTableRow key={product.id} {...product} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack direction="row" spacing={2} sx={{ marginTop: '20px' }}>
          <Link to="/Addashboard">
            <Button variant="contained" color="primary">
              Back to Dashboard
            </Button>
          </Link>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
