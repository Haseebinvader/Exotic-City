import { useState, useEffect } from 'react';
import { Box, Button, Card, Grid, Typography } from '@mui/material';

const RequestQuote = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve items from local storage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  console.log("cart", cart);
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <Grid item sx={{ backgroundColor: 'orange', width: '100%', textAlign: 'center', color: '#fff', height: '10rem' }}>
        <Typography variant="h4" sx={{ fontWeight: '600', pl: '3rem', pt: '2rem' }}>REQUEST PRICE QUOTATION</Typography>
        <Typography sx={{ pl: '3rem' }}>The following products are listed for the quotation.</Typography>
        <Typography sx={{ pl: '3rem' }}>Click on the button on the bottom to request a price quote.</Typography>
      </Grid>
      <Grid item>
        <Box>
          <Typography>Items:</Typography>
          {/* Render the cart items */}
          {cart.length === 0 ? (
            <Typography>No items in the cart</Typography> 
          ) : (
            cart.map((cartItem) => (
              <Card key={cartItem.SystemId} sx={{ width: '50rem', margin: '20px' }}>
                <Typography sx={{ fontSize: '13px', height: '2rem', pt: '10px' }}>{cartItem.Name}</Typography>
                <Typography sx={{ fontSize: '13px', height: '2rem', pt: '10px' }}>{cartItem.size}</Typography>
                {/* Add other properties you want to display */}
              </Card>
            ))
          )}
        </Box>
        <Button variant="contained" color="info">
          Request Price Quotation
        </Button>
      </Grid>
    </Grid>
  );
};

export default RequestQuote;
