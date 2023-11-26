import { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import logo from '.././assets/jpeg/drink.jpg'
const RequestQuote = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) { setCart(JSON.parse(storedCart)); }
  }, []);

  // Calculate the total quantity for each item
  const calculateTotalQuantity = (itemId) => {
    return cart.reduce((total, cartItem) => (cartItem.SystemId === itemId ? total + 1 : total), 0);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" minHeight="100vh" spacing={2}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4" fontWeight="bold" mb={2}>   REQUEST PRICE QUOTATION   </Typography>
        <Typography color="textSecondary">  The following products are listed for the quotation. Click on the button below to request a price quote.  </Typography>
      </Grid>

      <Grid item xs={12} md={8} lg={6}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h5" mb={2}>Cart:  </Typography>
          {cart.length === 0 ? (
            <Typography>No items in the cart</Typography>
          ) : (
            cart.map((cartItem) => (
              <Paper key={cartItem.SystemId} elevation={2} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center' }}>
                <Box>
                  <img src={logo} width={"100px"} alt="" />
                </Box>
                <Box>
                  <Typography variant="h6" mb={1}>  {cartItem.Description}  </Typography>
                  <Typography>{cartItem.Packaging}</Typography>
                  {calculateTotalQuantity(cartItem.SystemId) > 1 && (
                    <Typography variant="caption" color="textSecondary">
                      Total Quantity: {calculateTotalQuantity(cartItem.SystemId)}
                    </Typography>
                  )}
                </Box>
              </Paper>
            ))
          )}
          <Button variant="contained" color="primary" sx={{ mt: 3, width: '100%' }}>
            Request Price Quotation
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RequestQuote;
