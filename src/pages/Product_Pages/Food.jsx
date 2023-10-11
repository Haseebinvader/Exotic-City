import { Grid, Typography } from "@mui/material"
import Drinks_Img from '../../assets/jpeg/DRINKS.jpg'
// import Filters from "../../views/products/filters"
import Food_Card from "../../views/products/Food_Card"
const Food = () => {
    return (
        <Grid container>
            <Grid item  >
                <img src={Drinks_Img} width='1510px' />
                <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: '600', color: '#fff', backgroundColor: 'orange' }}>DRINKS</Typography>
            </Grid>
            {/* <Filters /> */}
            <Food_Card />
        </Grid>

    )
}

export default Food