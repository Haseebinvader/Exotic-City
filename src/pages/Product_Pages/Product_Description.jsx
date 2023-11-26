import { Grid, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { food_data } from "../../Data/Project_Data";

const Product_Description = () => {
    const [isIncrement, setisIncrement] = useState(Array(food_data.length).fill(0));
    const location = useLocation();
    const selectedItem = location.state?.selectedItem;

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
        <Grid container sx={{ height: '80vh', backgroundColor: '#F8F8F9' }}>
            <Grid item sx={{ display: 'flex', pl: '20rem', gap: '2rem', height: '70vh', pt: '4rem', width: '100%' }}>
                <Card>
                    <img src={selectedItem.Image} alt={selectedItem.Name} style={{ width: '20rem', paddingTop: '4rem' }} />
                </Card>
                <Box>
                    <Typography sx={{ fontWeight: '600' }} variant="h5">{selectedItem.Description}</Typography>
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
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '7rem', mt: '8rem' }}>
                        <Box>
                            <Button onClick={() => handleDecrement(0)} sx={{ backgroundColor: 'orange', color: 'white', '&:hover': { backgroundColor: 'orange' } }}>-</Button>
                        </Box>
                        <Box>
                            <Typography>{isIncrement[0]}</Typography>
                        </Box>
                        <Box>
                            <Button onClick={() => handleIncrement(0)} sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'green' } }}>+</Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Product_Description;
