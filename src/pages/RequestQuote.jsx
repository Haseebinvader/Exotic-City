import { useState, useEffect } from 'react';
import { Box, Button, Card, Grid, Typography } from '@mui/material';

const RequestQuote = () => {
  const [cart, setCart] = useState([]);

  // Retrieve cart from local storage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

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
          {cart.map((item) => (
            <Card key={item.id}>
              {/* Display the image stored in local storage */}
              <img src={localStorage.getItem(`image_${item.id}`)} alt="" />
              <Typography sx={{ fontSize: '14px' }}>{item.Name}</Typography>
              <Typography sx={{ fontSize: '12px' }}>{item.size}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', mt: '2rem', pb: '1rem' }}>
                <Box>
                  <Button sx={{ backgroundColor: 'orange', color: 'white', '&:hover': { backgroundColor: 'orange' } }}> - </Button>
                </Box>
                <Box>
                  {/* You can uncomment the following line if you have 'isIncrement' state */}
                  {/* <Typography>{isIncrement[index]}</Typography> */}
                </Box>
                <Box>
                  <Button sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'green' } }}> +</Button>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
        <Button variant="contained" color="info">
          Request Price Quotation
        </Button>
      </Grid>
    </Grid>
  );
};

export default RequestQuote;
