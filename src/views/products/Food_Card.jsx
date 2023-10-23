/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Box, Card, Grid, Typography, Button } from '@mui/material';
import { food_data } from '../../Data/Project_Data';
import { useNavigate } from 'react-router-dom';

const Food_Card = ({ query }) => {
    // States
    const [isIncrement, setisIncrement] = useState(Array(food_data.length).fill(0));
    const [cart, setCart] = useState([]); // State to store items in the cart
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(null);

    // Functions
    const handleIncrement = (index) => {
        const newisIncrement = [...isIncrement];
        newisIncrement[index] += 1;
        setisIncrement(newisIncrement);

        // Add the item to the cart
        setCart([...cart, food_data[index]]);
    };

    const handleDecrement = (index) => {
        if (isIncrement[index] > 0) {
            const newIncrements = [...isIncrement];
            newIncrements[index] -= 1;
            setisIncrement(newIncrements);

            // Remove the item from the cart
            setCart(cart.filter((item, i) => i !== index));
        }
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        console.log('Selected item:', item);
        navigate('/ProductDescription', { state: { selectedItem: item } });
    };

    // Filter the food_data based on the search query
    const filteredFoodData = food_data.filter((item) =>
        item.Name.includes(query)
    );

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', p: '4rem' }}>
            {filteredFoodData.map((item, index) => (
                <Grid item xs={8} sm={6} md={4} lg={3} key={item.id}>
                    <Card sx={{ maxWidth: 330, height: 'auto', textAlign: 'center', mb: '2rem', mt: '2rem' }}>
                        <img src={item.Image} alt={item.Name} width="80%" onClick={() => handleItemClick(item)} />
                        <Typography sx={{ fontSize: '14px' }}>{item.Name}</Typography>
                        <Typography sx={{ fontSize: '12px' }}>{item.size}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', mt: '2rem', pb: '1rem' }}>
                            <Box>
                                <Button onClick={() => handleDecrement(index)} sx={{ backgroundColor: 'orange', color: 'white', '&:hover': { backgroundColor: 'orange' } }} > - </Button>
                            </Box>
                            <Box>
                                <Typography>{isIncrement[index]}</Typography>
                            </Box>
                            <Box>
                                <Button onClick={() => handleIncrement(index)} sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'green' } }} > +</Button>
                            </Box>
                        </Box>
                    </Card>
                </Grid >
            ))}
        </Grid >
    );
};

export default Food_Card;
