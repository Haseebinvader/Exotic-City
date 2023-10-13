import { Box, Card, Grid, Typography, Button } from "@mui/material";

import { useState } from "react";
import { food_data } from "../../Data/Project_Data";



const Food_Card = () => {
    // States
    const [isIncrement, setisIncrement] = useState(Array(food_data.length).fill(0));

    // Functions
    const handleIncrement = (index) => { const newisIncrement = [...isIncrement]; newisIncrement[index] += 1; setisIncrement(newisIncrement); };
    const handleDecrement = (index) => { const newIncrements = [...isIncrement]; newIncrements[index] -= 1; setisIncrement(newIncrements); };


    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', p: '4rem' }}>
            {food_data.map((item, index) => (
                <Grid item xs={8} sm={6} md={4} lg={3} key={item.id}>
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
        </Grid>
    );
}

export default Food_Card;
