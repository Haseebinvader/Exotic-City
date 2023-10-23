import { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Card } from 'react-bootstrap';
import { food_data } from '../Data/Project_Data';

const RequestQuote = () => {
  const [isIncrement, setisIncrement] = useState(Array(food_data.length).fill(0));
  const [cart, setCart] = useState([]);

  const handleIncrement = (index) => {
    const newisIncrement = [...isIncrement];
    newisIncrement[index] += 1;
    setisIncrement(newisIncrement);

    // Add the item to the cart when incremented
    setCart([...cart, food_data[index]]);
  };

  const handleDecrement = (index) => {
    if (isIncrement[index] > 0) {
      const newIncrements = [...isIncrement];
      newIncrements[index] -= 1;
      setisIncrement(newIncrements);

      // Remove the item from the cart when decremented
      setCart(cart.filter((item, i) => i !== index));
    }
  };

  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <Grid item sx={{ backgroundColor: 'orange', width: '100%', textAlign: 'center', color: '#fff', height: '10rem' }}>
        <Typography variant="h4" sx={{ fontWeight: '600', pl: '3rem', pt: '2rem' }}>REQUEST PRICE QUOTATION</Typography>
        <Typography sx={{ pl: '3rem' }}>The following products are listed for the quotation.</Typography>
        <Typography sx={{ pl: '3rem' }}>Click on the button on the bottom to request a price quote.</Typography>
      </Grid>
      <Grid item>
        <Box>
          {cart.map((item, index) => (
            <Grid item xs={8} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ maxWidth: 330, height: 'auto', textAlign: 'center', mb: '2rem', mt: '2rem' }}>
                <img src={item.Image} alt={item.Name} width='80%' />
                <Typography sx={{ fontSize: '14px' }}>{item.Name}</Typography>
                <Typography sx={{ fontSize: '12px' }}>{item.size}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', mt: '2rem', pb: '1rem' }}>
                  <Box>
                    <Button onClick={() => handleDecrement(index)} sx={{ backgroundColor: 'orange', color: 'white', '&:hover': { backgroundColor: 'orange' } }}>-</Button>
                  </Box>
                  <Box>
                    <Typography>{isIncrement[index]}</Typography>
                  </Box>
                  <Box>
                    <Button onClick={() => handleIncrement(index)} sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'green' } }}>+</Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Box>
        <Button variant="contained" color="info" >
          Request Price Quotation
        </Button>
      </Grid>
    </Grid>
  );
};

export default RequestQuote;
