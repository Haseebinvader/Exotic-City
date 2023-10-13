import { Grid, Typography } from "@mui/material"
import Drinks_Img from '../../assets/jpeg/DRINKS.jpg'
import Filters from "../../views/products/filters"
import Hair_Card from "../../views/products/Hair_Card"
const Hair = () => {
    return (
        <Grid container>
            <Grid item  >
                <img src={Drinks_Img} width='1510px' />
                <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: '600', color: '#fff', backgroundColor: 'orange' }}>HAIR</Typography>
            </Grid>
            <Filters />
            <Hair_Card />
        </Grid>

    )
}

export default Hair