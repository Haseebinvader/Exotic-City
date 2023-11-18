import { Box, Button, Grid, Typography } from "@mui/material";
import NEW from '../../assets/svg/NEW.svg'
import Drinks from '../../assets/svg/DRINKS.svg'
import Flour from '../../assets/svg/FLOUR.svg'
import BEANS from '../../assets/svg/BEANS.svg'
import CATALOGUS from '../../assets/svg/CATALOGUS.svg'
import COOKINGKIT from '../../assets/svg/COOKINGKIT.svg'
import FISHMEAT from '../../assets/svg/FISHMEAT.svg'
import MILK from '../../assets/svg/MILK.svg'
import NONFOOD from '../../assets/svg/NONFOOD.svg'
import OILS from '../../assets/svg/OILS.svg'
import RICENOODLE from '../../assets/svg/RICENOODLE.svg'
import SAUCES from '../../assets/svg/SAUCES.svg'
import SEASONING from '../../assets/svg/SEASONING.svg'
import VEGETABLES from '../../assets/svg/VEGETABLES.svg'
import FROZEN from '../../assets/svg/FROZEN.svg'
import SNACK from '../../assets/svg/SNACKS.svg'
import { Link } from "react-router-dom";

// Array of Products
const productItems = [
    { image: NEW, label: "New Brands & Products" },
    { image: Drinks, label: "Drinks" },
    { image: Flour, label: "Flour & Cereals" },
    { image: BEANS, label: "Beans, Nuts & Pulses" },
    { image: CATALOGUS, label: "Catalogues" },
    { image: COOKINGKIT, label: "Cooking Pastes & Cooking Kits" },
    { image: FISHMEAT, label: "Fish, Meat & Soya Products" },
    { image: MILK, label: "Coconut & Milk Products" },
    { image: NONFOOD, label: "Non Food" },
    { image: OILS, label: "Oils & Butter" },
    { image: RICENOODLE, label: "Rice & Noodles" },
    { image: SAUCES, label: "Sauces" },
    { image: SEASONING, label: "Herbs & Spices" },
    { image: VEGETABLES, label: "Fruits & Vegetables" },
    { image: FROZEN, label: "Frozen Foods" },
    { image: SNACK, label: "Sweets & Snacks" },
];


const Products = () => {
    // Split the productItems into two rows
    const itemsInRow1 = productItems.slice(0, 8); // First 8 items
    const itemsInRow2 = productItems.slice(8);    // Remaining items

    return (
        <>
            <Typography sx={{ textAlign: 'center', pt: '2rem', color: 'orange', fontSize: '30px', fontWeight: '600', backgroundColor: '#17315B', mt: '0.1rem' }}>Products</Typography>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', pt: '2rem', width: '100%', backgroundColor: '#17315B' }}>
                {/* Row 1 */}
                <Grid container item xs={4} md={12} lg={12} justifyContent="space-evenly" height='100%'>
                    {itemsInRow1.map((item, index) => (
                        <Grid item key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '3rem' }}>
                            <Link to={`/Products/${item.label.replace(/[^a-zA-Z]/g, '')}`} style={{ color: '#000', textDecoration: "none" }}>
                                <Box sx={{ border: '2px solid orange', borderRadius: '50px', width: '6rem', height: '6rem', textAlign: 'center', backgroundColor: 'White' }}>
                                    <img src={item.image} width={90} alt={`Item ${index}`} style={{ cursor: 'pointer' }} />
                                    <Typography sx={{ color: 'orange', pt: '10px', fontSize: '12px' }}> {item.label} </Typography>
                                </Box>
                            </Link>
                        </Grid>
                    ))}
                </Grid>

                {/* Row 2 */}
                <Grid container item xs={4} md={12} lg={12} justifyContent="space-evenly" height='100%'>
                    {itemsInRow2.map((item, index) => (
                        <Grid item key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '3rem' }}>
                            <Link to={`/Products/${item.label.replace(/[^a-zA-Z]/g, '')}`} style={{ color: '#000', textDecoration: "none" }}>
                                <Box sx={{ border: '2px solid orange', borderRadius: '50px', width: '6rem', height: '6rem', textAlign: 'center', backgroundColor: 'White' }}>
                                    <img src={item.image} width={90} alt={`Item ${index}`} style={{ cursor: 'pointer' }} />
                                    <Typography sx={{ color: 'orange', pt: '10px', fontSize: '12px' }} >{item.label} </Typography>
                                </Box>
                            </Link>
                        </Grid>
                    ))}
                </Grid>



                {/* Request Price Quotation Button */}
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item sx={{ backgroundColor: 'orange', borderRadius: '30px', mt: '4rem', mb: '2rem', alignItems: 'center', width: 'auto' }}>
                        <Button sx={{ color: '#fff', padding: '15px', fontSize: '12px' }}>  REQUEST PRICE QUOTATION → </Button>
                    </Grid>
                </Grid>
            </Grid >
        </>
    );
};

export default Products;
