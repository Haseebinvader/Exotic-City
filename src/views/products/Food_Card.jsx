/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Box, Card, Grid, Typography, Button } from '@mui/material';
import { food_data } from '../../Data/Project_Data';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Food_Card = ({ query }) => {
    // States
    const [data, setdata] = useState([])
    const [isIncrement, setisIncrement] = useState(() => {
        const storedIncrements = localStorage.getItem('increments');
        return storedIncrements ? JSON.parse(storedIncrements) : Array(data.length).fill(0);
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
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTcwMDgyMzM4NSwibmJmIjoxNzAwODIzMzg1LCJleHAiOjE3MDA4MjcyODUsImFpbyI6IkUyVmdZTGh6SU5Db1Q4TkNkZjNkeWdYYUpScE9BQT09IiwiYXBwaWQiOiJhODM5MWI5Yy00NTgzLTQ2YzMtYTQ0OS1hMGRlNmUxOTkxNjEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI1ZmNkNzk2Yy1kNWE0LTRiYzAtOWRkMS02YmQyMmZhNWFlZjUiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiNWZjZDc5NmMtZDVhNC00YmMwLTlkZDEtNmJkMjJmYTVhZWY1IiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoiNGp1cERpbHJnMENQd3BrV0JEc29BUSIsInZlciI6IjEuMCJ9.eXXelnpGbqRqbLeJ8blOwF7ktZNiNjkz2MuJ9haYuXbS17cu5GzemZBU07NBYPch5JdXHsvbcZzwkJ13tOk4SVDBlQo5qegzCkwM5JAmzoLnj2r0sPc8zJ8D1VH0V51-eusa_cu2wtcivO5hl-3KfV194jzqGWw2VmIqDwSfR_Pz-S2ggeBKT0RUwgxlRxygbWvsSJWxj7OpoTscRx-Hliudlbp7RJG_utBT3g1bQ_qU_rHj83_RzlGVCUQbZn1bJDi-5N_0DBymmxsSvLjAoIkeZp8ODXn32UtfB4hzu33UWacnW1K8AdxoSH8QQ64B6tM1jRFQcxjwGBuYBffdDg'

    useEffect(() => {
        axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox1/ODataV4/Company(%27My%20Company%27)/ItemApi', {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }).then(async (res) => {
            console.log(res);
            setdata(res.data.value);

            console.log(res.data.value);

        })
            .catch((error) => {
                console.error("Error fetching data", error);
            });
    }, []);


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
        <Grid container sx={{ display: 'flex', justifyContent: 'center', width: '112%', px: 2 }}>
            {filteredFoodData.map((item, index) => (
                <Grid item xs={12} sm={8} md={5} lg={3} key={item.id} sx={{ mb: 2 }}>
                    <Card sx={{ maxWidth: 250, height: 'auto', textAlign: 'center', mb: '2rem' }}>
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
