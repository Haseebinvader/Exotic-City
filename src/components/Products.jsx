import { Box, Button, Grid, Typography } from "@mui/material"
import NEW from '../assets/svg/NEW.svg'
import Drinks from '../assets/svg/DRINKS.svg'
import Flour from '../assets/svg/FLOUR.svg'
import BEANS from '../assets/svg/BEANS.svg'
import CATALOGUS from '../assets/svg/CATALOGUS.svg'
import COOKINGKIT from '../assets/svg/COOKINGKIT.svg'
import FISHMEAT from '../assets/svg/FISHMEAT.svg'
import MILK from '../assets/svg/MILK.svg'
import NONFOOD from '../assets/svg/NONFOOD.svg'
import OILS from '../assets/svg/OILS.svg'
import RICENOODLE from '../assets/svg/RICENOODLE.svg'
import SAUCES from '../assets/svg/SAUCES.svg'
import SEASONING from '../assets/svg/SEASONING.svg'
import VEGETABLES from '../assets/svg/VEGETABLES.svg'
import FROZEN from '../assets/svg/FROZEN.svg'
import SNACK from '../assets/svg/SNACKS.svg'



const Products = () => {
    return (
        <>
            <Typography textAlign={'center'} pt={'2rem'} color={'orange'} fontSize={'30px'} fontWeight={'600'}>Products</Typography>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', pt: '2rem', width: '100%' }} xs={8} lg={12}>
                <Grid item >
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} backgroundColor={'White'}>
                        <img src={NEW} width={90} />
                    </Box>
                    <Typography textAlign={'center'} color={'orange'} width={'7rem'}>New Brands & Products</Typography>
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} mt={'2rem'} backgroundColor={'White'}>
                        <img src={SNACK} width={90} />
                    </Box>
                    <Typography color={'orange'} width={'8rem'}>Sweets & Snacks</Typography>
                </Grid>
                <Grid item >
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} backgroundColor={'White'}>
                        <img src={Drinks} width={90} />
                    </Box>
                    <Typography textAlign={'center'} color={'orange'} width={'6rem'}>Drinks</Typography>
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} mt={'3.5rem'} backgroundColor={'White'}>
                        <img src={SEASONING} width={90} />
                    </Box>
                    <Typography color={'orange'} width={'8rem'}>Herbs & Spices</Typography>
                </Grid>
                <Grid item>
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} backgroundColor={'White'}>
                        <img src={Flour} width={90} />
                    </Box>
                    <Typography color={'orange'} width={'7.5rem'}>Flour & Cereals</Typography>
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} mt={'3.5rem'} backgroundColor={'White'}>
                        <img src={FISHMEAT} width={90} />
                    </Box>
                    <Typography textAlign={'center'} color={'orange'} width={'7rem'}>Fish, Meat & Soya Products</Typography>
                </Grid>
                <Grid item>
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} backgroundColor={'White'}>
                        <img src={RICENOODLE} width={90} />
                    </Box>
                    <Typography color={'orange'} width={'8rem'}>Rice & Noodles</Typography>
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} mt={'3.5rem'} backgroundColor={'White'}>
                        <img src={SAUCES} width={90} />
                    </Box>
                    <Typography textAlign={'center'} color={'orange'} width={'6rem'}>Sauces</Typography>
                </Grid>
                <Grid item>
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} backgroundColor={'White'}>
                        <img src={BEANS} width={90} />
                    </Box>
                    <Typography textAlign={'center'} color={'orange'} width={'6rem'}>Beans, Nuts & Pulses</Typography>
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} mt={'2rem'} backgroundColor={'White'}>
                        <img src={COOKINGKIT} width={90} />
                    </Box>
                    <Typography textAlign={'center'} color={'orange'} width={'7.5rem'}>Cooking Pastes & Cooking Kits</Typography>
                </Grid>
                <Grid item>
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} backgroundColor={'White'}>
                        <img src={VEGETABLES} width={90} />
                    </Box>
                    <Typography textAlign={'center'} color={'orange'} width={'6rem'}>Fruits & Vegetables</Typography>
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} mt={'2rem'} backgroundColor={'White'}>
                        <img src={FROZEN} width={90} />
                    </Box>
                    <Typography color={'orange'} width={'7rem'}>Frozen Foods</Typography>
                </Grid>
                <Grid item>
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} backgroundColor={'White'}>
                        <img src={MILK} width={90} />
                    </Box>
                    <Typography textAlign={'center'} color={'orange'} width={'7rem'}>Coconut & Milk Products</Typography>
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} mt={'2rem'} backgroundColor={'White'}>
                        <img src={NONFOOD} width={90} />
                    </Box>
                    <Typography textAlign={'center'} color={'orange'} width={'6rem'}>Non Food</Typography>
                </Grid>
                <Grid item>
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} backgroundColor={'White'}>
                        <img src={OILS} width={90} />
                    </Box>
                    <Typography textAlign={'center'} color={'orange'} width={'6rem'}>Oils & Butter</Typography>
                    <Box border={'2px solid orange'} borderRadius={'50px'} width={'6rem'} height={'6rem'} textAlign={'center'} mt={'3.5rem'} backgroundColor={'White'}>
                        <img src={CATALOGUS} width={90} />
                    </Box>
                    <Typography textAlign={'center'} color={'orange'} width={'6rem'}>Catalogues</Typography>
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item sx={{backgroundColor: 'orange', borderRadius: '30px',  mt: '2rem', mb: '2rem',  alignItems: 'center', width: 'auto'}}>
                        <Button sx={{color: '#fff', padding: '15px'}}>REQUEST PRICE QUOTATION  →</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Products