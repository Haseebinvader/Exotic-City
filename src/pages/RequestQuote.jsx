import { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import logo from '.././assets/jpeg/drink.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestQuote = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Group cart items by SystemId and calculate total quantity for each group
  const groupedCart = cart.reduce((groups, cartItem) => {
    const { SystemId, Description, Packaging } = cartItem;
    const existingGroup = groups.find((group) => group.SystemId === SystemId);
    if (existingGroup) {
      existingGroup.quantity += 1;
    } else {
      groups.push({ SystemId, Description, Packaging, quantity: 1 });
    }
    return groups;
  }, []);

  const clearCart = () => {
    if (cart.length === 0) {
      toast.warning('Cart is already empty');
    } else {
      localStorage.removeItem('cartItems');
      setCart([]);
      toast.success('Cart cleared successfully');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" minHeight="100vh" spacing={2}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4" fontWeight="bold" mb={2}>REQUEST PRICE QUOTATION</Typography>
        <Typography color="textSecondary">The following products are listed for the quotation. Click on the button below to request a price quote.</Typography>
      </Grid>
      <Grid item xs={12} md={8} lg={6}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h5" mb={2}>Cart:</Typography>
          <Button variant='contained' size='small' onClick={clearCart}>Clear Cart</Button>
          {groupedCart.length === 0 ? (
            <Typography>No items in the cart</Typography>
          ) : (
            groupedCart.map((groupedCartItem) => (
              <Paper key={groupedCartItem.SystemId} elevation={2} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center' }}>
                <Box>
                  <img src={logo} width={'100px'} alt="" />
                </Box>
                <Box>
                  <Typography variant="h6" mb={1}>{groupedCartItem.Description}</Typography>
                  <Typography>{groupedCartItem.Packaging}</Typography>
                  <Typography variant="caption" color="textSecondary">Quantity: {groupedCartItem.quantity}</Typography>
                </Box>
              </Paper>
            ))
          )}
          <Button variant="contained" color="primary" sx={{ mt: 3, width: '100%' }}>Request Price Quotation</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RequestQuote;
