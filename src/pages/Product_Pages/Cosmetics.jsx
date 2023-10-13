import { Grid, Typography } from "@mui/material"
import Drinks_Img from '../../assets/jpeg/DRINKS.jpg'
import Filters from "../../views/products/filters"
import Cosmetic_Card from "../../views/products/Cosmetic_Card"
const Cosmetics = () => {
    return (
        <Grid container>
            <Grid item  >
                <img src={Drinks_Img} width='1510px' />
                <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: '600', color: '#fff', backgroundColor: 'orange' }}>COSMETICS</Typography>
            </Grid>
            <Filters />
            <Cosmetic_Card />
        </Grid>

    )
}

export default Cosmetics