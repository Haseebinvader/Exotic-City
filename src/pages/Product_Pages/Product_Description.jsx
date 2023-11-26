/* eslint-disable no-unused-vars */
import { Grid, Typography, Box, Button, Paper } from "@mui/material";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { food_data } from "../../Data/Project_Data";

const Product_Description = () => {
    const [isIncrement, setisIncrement] = useState(Array(food_data.length).fill(0));
    const location = useLocation();
    const selectedItem = location.state?.selectedItem;
    const [isLogin, setisLogin] = useState(false)



    const handleIncrement = (index) => {
        const newisIncrement = [...isIncrement];
        newisIncrement[index] += 1;
        setisIncrement(newisIncrement);
    };

    const handleDecrement = (index) => {
        if (isIncrement[index] > 0) {
            const newIncrements = [...isIncrement];
            newIncrements[index] -= 1;
            setisIncrement(newIncrements);
        }
    };

    return (

        <Grid container sx={{ height: '100vh', backgroundColor: '#F8F8F9', p: '20px', justifyContent: 'center', alignItems: 'center' }}>
            <Paper elevation={3} sx={{ p: '20px', width: '70%' }}>
                <Grid item sx={{ display: 'flex', gap: '2rem', height: '70vh', width: '100%' }}>
                    <Card>
                        <img src={selectedItem.Image} alt={selectedItem.Name} style={{ width: '20rem', paddingTop: '4rem' }} />
                    </Card>
                    <Box sx={{ width: '50%' }}>
                        <Typography sx={{ fontWeight: '600' }} variant="h6">{selectedItem.Description}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography sx={{ paddingTop: '10px', fontWeight: '600' }}>Item Number:</Typography>
                            <Typography>{selectedItem.ItemNo}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography sx={{ paddingTop: '10px', fontWeight: '600' }}>Packaging:</Typography>
                            <Typography>{selectedItem.Packaging}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography sx={{ paddingTop: '10px', fontWeight: '600' }}>Brand:</Typography>
                            <Typography>{selectedItem.Brand}</Typography>
                        </Box>
                        {isLogin ? (<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '7rem', mt: '8rem' }}>
                            <Box>
                                <Button onClick={() => handleDecrement(0)} sx={{ backgroundColor: 'orange', color: 'white', '&:hover': { backgroundColor: 'orange' } }}>-</Button>
                            </Box>
                            <Box>
                                <Typography>{isIncrement[0]}</Typography>
                            </Box>
                            <Box>
                                <Button onClick={() => handleIncrement(0)} sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'green' } }}>+</Button>
                            </Box>
                        </Box>) : <Typography>Login to add to Cart</Typography>}

                    </Box>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default Product_Description;
