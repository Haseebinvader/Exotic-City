import { Grid, Typography } from "@mui/material";

const Products_DropDown = () => {
  return (
    <Grid container sx={{display: 'flex', justifyContent: 'space-around', textAlign: 'left', gap: '2rem', height: '10rem'}}>
      <Grid item>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>New Brands & Products</Typography>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Drinks</Typography>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Flour & Cereals</Typography>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Rice & Noodles</Typography>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Beans, Nuts & Pulses</Typography>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Fruit & Vegetables</Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Coconut & Milk powder</Typography>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Oils & Butter</Typography>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Sweets & Snacks</Typography>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Herbs & Spices</Typography>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Fish Meat & Soya Products</Typography>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Sauces</Typography>
      </Grid>
      <Grid item >
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Cooking Pastes & Cooking Kits</Typography>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Froozen Foods</Typography>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Non Food</Typography>
        <Typography sx={{ '&:hover': { color: '#F7A92E' }}}>Catalogue</Typography>
      </Grid>
    </Grid>
  );
};

export default Products_DropDown;
