/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Box, Card, Grid, Typography, Button } from '@mui/material';
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
    console.log("hello", isIncrement);

    // Functions
    const handleIncrement = (index) => {
        const newisIncrement = [...isIncrement];
        newisIncrement[index] += 1;
        setisIncrement(newisIncrement);
        const updatedCart = [...cart, filteredFoodData[index]];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        localStorage.setItem('increments', JSON.stringify(newisIncrement));
    };
    const handleDecrement = (index) => {
        if (isIncrement[index] > 0) {
            const newIncrements = [...isIncrement];
            newIncrements[index] -= 1;
            setisIncrement(newIncrements);
            const updatedCart = cart.filter((item) => item.id !== filteredFoodData[index].id);
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            localStorage.setItem('increments', JSON.stringify(newIncrements));
        }
    };
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTcwMDg4ODQ1OSwibmJmIjoxNzAwODg4NDU5LCJleHAiOjE3MDA4OTIzNTksImFpbyI6IkUyVmdZTmk3OVB1bGg2Y1Q5V3ZhZEk3ZlcydGVEUUE9IiwiYXBwaWQiOiJhODM5MWI5Yy00NTgzLTQ2YzMtYTQ0OS1hMGRlNmUxOTkxNjEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI1ZmNkNzk2Yy1kNWE0LTRiYzAtOWRkMS02YmQyMmZhNWFlZjUiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiNWZjZDc5NmMtZDVhNC00YmMwLTlkZDEtNmJkMjJmYTVhZWY1IiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoiVGtVeFpjYi1yay1CaTJfa1F4VVRBUSIsInZlciI6IjEuMCJ9.fZxwaQCIWXTsQcxq7vZVK81SRBkFtswmk2r8emvKIKnmipnYwt2ltQeeoz5wpmBOSVL18YIsaS7fkeAK12ZdtFP2b_U9nKyqzP08mI3p00YazSzOSrSoC3sKiSOj3gqoZchCal2284KgsQ1R8h8ayqykCj8sYmBPG7_7FCpIllZIWg0i56CsNC7XAk-a7QJy-giMh1tkN2RrKuIBYl0U133QFHZxTCqrWPRCJ2kjclWJBC7wsrSxv8DwJVjf0r0JrZHdueZaxckTY_jtim9O6WnasVBsKA8JKBE7Z0G8CkB1WhWnzJKKjs6tIhEUxE8VFe9GHHPbHLM9QxNsyq8bPw'

    useEffect(() => {
        axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox1/ODataV4/Company(%27My%20Company%27)/ItemApi', {
            headers: { "Authorization": `Bearer ${accessToken}` }, params: {
                '$top': 10
            }
        }).then(async (res) => { console.log(res); setdata(res.data.value); console.log(res.data.value); })
            .catch((error) => { console.error("Error fetching data", error); });
    }, []);


    const handleItemClick = (item) => {
        localStorage.setItem('selectedItem', JSON.stringify(item));
        localStorage.setItem('selectedItemImage', item.Image);
        setSelectedItem(item);
        navigate('/ProductDescription', { state: { selectedItem: item } });
    };
    // Effect to retrieve cart from local storage on component mount
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) { setCart(JSON.parse(storedCart)); }
    }, []);
    // Filter the food_data based on the search query
    const filteredFoodData = data.filter((item) => item.Description.includes(query));
    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', width: '112%', px: 2 }}>
            {data.map((item, index) => (
                <Grid item xs={12} sm={8} md={5} lg={3} key={item.id} sx={{ mb: 2 }}>
                    <Card sx={{ maxWidth: 250, height: 'auto', textAlign: 'center', mb: '2rem' }}>
                        <img src={item.Image} alt={item.Name} width="80%" onClick={() => handleItemClick(item)} />
                        <Typography sx={{ fontSize: '14px' }}>{item.Description}</Typography>
                        <Typography sx={{ fontSize: '12px' }}>{item.Packaging}</Typography>
                        <Typography sx={{ fontSize: '12px' }}>{item.SearchDescription}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', pb: '1rem', mt: '10px' }}>
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
