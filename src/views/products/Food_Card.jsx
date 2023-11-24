/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Box, Card, Grid, Typography, Button } from '@mui/material';
import { food_data } from '../../Data/Project_Data';
import { useNavigate } from 'react-router-dom';
const Food_Card = ({ query }) => {
    // States
    const [isIncrement, setisIncrement] = useState(() => {
        const storedIncrements = localStorage.getItem('increments');
        return storedIncrements ? JSON.parse(storedIncrements) : Array(food_data.length).fill(0);
    }); const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(null);

    // Functions
    const handleIncrement = (index) => {
        const newisIncrement = [...isIncrement];
        newisIncrement[index] += 1;
        setisIncrement(newisIncrement);

        // Add item to the cart state
        const updatedCart = [...cart, filteredFoodData[index]];
        setCart(updatedCart);

        // Save the entire cart in local storage
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        // Log the cart in the console
        console.log('Cart:', updatedCart);
        localStorage.setItem('increments', JSON.stringify(newisIncrement));

    };

    const handleDecrement = (index) => {
        if (isIncrement[index] > 0) {
            const newIncrements = [...isIncrement];
            newIncrements[index] -= 1;
            setisIncrement(newIncrements);

            // Remove item from the cart state
            const updatedCart = cart.filter((item) => item.id !== filteredFoodData[index].id);
            setCart(updatedCart);

            // Save the entire cart in local storage
            localStorage.setItem('cart', JSON.stringify(updatedCart));

            // Log the cart in the console
            console.log('Cart:', updatedCart);

            // Log the updated local storage
            console.log('Local Storage:', localStorage);
            localStorage.setItem('increments', JSON.stringify(newIncrements));

        }
    };

    const handleItemClick = (item) => {
        // Save the selected item to local storage
        localStorage.setItem('selectedItem', JSON.stringify(item));

        // Save the image of the selected item to local storage
        localStorage.setItem('selectedItemImage', item.Image);

        setSelectedItem(item);
        console.log('Selected item:', item);
        navigate('/ProductDescription', { state: { selectedItem: item } });
    };


    // Effect to retrieve cart from local storage on component mount
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Filter the food_data based on the search query
    const filteredFoodData = food_data.filter((item) =>
        item.Name.includes(query)
    );
    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            {filteredFoodData.map((item, index) => (
                <Grid item xs={8} md={6} lg={3} key={item.id}>
                    <Card sx={{ maxWidth: 250, height: 'auto', textAlign: 'center', mb: '2rem'}}>
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
