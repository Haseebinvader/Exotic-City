import { Box, Card, Grid, Typography, Button } from "@mui/material";
import drink1 from '../../assets/jpeg/DRINK1.jpg';
import drink2 from '../../assets/png/DRINK2.png';
import drink3 from '../../assets/png/DRINK3.png';
import { useState } from "react";

const product_data = [
    { id: 1, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: drink1 },
    { id: 2, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: drink2 },
    { id: 3, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: drink3 },
    { id: 4, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: drink1 },
    { id: 5, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: drink2 },
    { id: 6, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: drink2 },
    { id: 7, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: drink3 },
    { id: 8, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: drink3 },
    { id: 9, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: drink2 },
    { id: 10, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: drink2 },
    { id: 11, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: drink1 },
    { id: 12, Name: 'OLD JAMAICA GINGER BEER', size: '4 x 6 x 250 ml', Image: drink2 },
];

const Food_Card = () => {
    // States
    const [isIncrement, setisIncrement] = useState(Array(product_data.length).fill(0));

    // Functions
    const handleIncrement = (index) => { const newisIncrement = [...isIncrement]; newisIncrement[index] += 1; setisIncrement(newisIncrement); };
    const handleDecrement = (index) => { const newIncrements = [...isIncrement]; newIncrements[index] -= 1; setisIncrement(newIncrements); };


    return (
        <Grid container ml='4rem'>
            {product_data.map((item, index) => (
                <Grid item xs={8} lg={3} key={item.id}>
                    <Card sx={{ maxWidth: 280, height: '22rem', textAlign: 'center', mb: '2rem', mt: '2rem' }}>
                        <img src={item.Image} alt={item.Name} />
                        <Typography sx={{ fontSize: '14px' }}>{item.Name}</Typography>
                        <Typography sx={{ fontSize: '12px' }}>{item.size}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  gap: '1rem', border: '1px solid lightgrey', mt: '1rem', width: '10.6rem', ml: '3.1rem'}}>
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

export default Food_Card;
