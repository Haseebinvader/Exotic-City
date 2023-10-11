import { Box, Card, Grid, Typography, Button } from "@mui/material";
import hair1 from '../../assets/jpeg/hair1.jpg'
import hair2 from '../../assets/jpeg/hair2.jpg'
import hair3 from '../../assets/jpeg/hair3.jpg'
import hair4 from '../../assets/jpeg/hair3.jpg'
import { useState } from "react";

const product_data = [
    { id: 1, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: hair1 },
    { id: 2, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: hair2 },
    { id: 3, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: hair3 },
    { id: 4, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: hair4 },
    { id: 5, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: hair4 },
    { id: 6, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: hair1 },
    { id: 7, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: hair1 },
    { id: 8, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: hair4 },
    { id: 9, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: hair2 },
    { id: 10, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: hair1 },
    { id: 11, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: hair3 },
    { id: 12, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: hair2 },
];

const Hair_Card = () => {
    // States
    const [isIncrement, setisIncrement] = useState(Array(product_data.length).fill(0));

    // Functions
    const handleIncrement = (index) => { const newisIncrement = [...isIncrement]; newisIncrement[index] += 1; setisIncrement(newisIncrement); };
    const handleDecrement = (index) => { const newIncrements = [...isIncrement]; newIncrements[index] -= 1; setisIncrement(newIncrements); };


    return (
        <Grid container ml='4rem'>
            {product_data.map((item, index) => (
                <Grid item xs={8} lg={3} key={item.id}>
                    <Card sx={{ maxWidth: 280, height: '25rem', textAlign: 'center', mb: '2rem', mt: '2rem' }}>
                        <img src={item.Image} alt={item.Name} width='200px' />
                        <Typography sx={{ fontSize: '14px' }}>{item.Name}</Typography>
                        <Typography sx={{ fontSize: '12px' }}>{item.size}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', border: '1px solid lightgrey', mt: '1rem', width: '10.6rem', ml: '3.1rem' }}>
                            <Button onClick={() => handleDecrement(index)} sx={{ backgroundColor: 'orange', color: 'white', '&:hover': { backgroundColor: 'orange' } }}>-</Button>
                            <Typography>{isIncrement[index]}</Typography>
                            <Button onClick={() => handleIncrement(index)} sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'green' } }}>+</Button>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default Hair_Card;
