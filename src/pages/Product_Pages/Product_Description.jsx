import { Grid, Typography, Box, Button } from "@mui/material"; // Correct import
import { useState } from "react";
import { Card } from "react-bootstrap"; // You might want to remove this import
import { useLocation } from "react-router-dom";
import { food_data } from "../../Data/Project_Data";

const Product_Description = () => {
    const [isIncrement, setisIncrement] = useState(Array(food_data.length).fill(0));

    const location = useLocation();
    const selectedItem = location.state?.selectedItem;

    if (!selectedItem) {
        return <div>No item selected.</div>;
    }

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
        <Grid container >
            <Grid item sx={{ display: 'flex', pl: '20rem', gap: '2rem', height: '32rem', pt: '4rem', backgroundColor: '#F8F8F9', width: '100%' }}>
                <Card>
                        <img src={selectedItem.Image} alt={selectedItem.Name} style={{ width: '20rem', paddingTop: '4rem' }} />
                </Card>
                <Box>
                    <Typography sx={{ fontWeight: '600' }} variant="h5">{selectedItem.Name}</Typography>
                    <Typography variant="body1" sx={{ paddingTop: '10px' }}>{selectedItem.size}</Typography>
                    <Typography sx={{ paddingTop: '10px' }}>Product Number:</Typography>
                    <Typography sx={{ paddingTop: '10px' }}>Packaging:</Typography>
                    <Typography sx={{ paddingTop: '10px' }}>Block pallet:</Typography>
                    <Typography sx={{ paddingTop: '10px' }}>Brand:</Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '7rem', mt: '11rem' }}>
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
            <Grid item>
                
            </Grid>
        </Grid>
    );
}

export default Product_Description;
