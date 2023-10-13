import { Hidden, Pagination, Grid, Typography, Box } from "@mui/material"
import Drinks_Img from '../../assets/jpeg/DRINKS.jpg'
import Filters from "../../views/products/filters"
import Cosmetic_Card from "../../views/products/Cosmetic_Card"
import { useState } from "react"

const Cosmetics = () => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <Grid container>
            <Grid item  >
                <img src={Drinks_Img} style={{ maxWidth: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: '600', color: '#fff', backgroundColor: 'orange' }}>COSMETICS</Typography>
            </Grid>
            <Filters />
            <Cosmetic_Card />
            <Hidden lgUp>
                <Grid item>
                    <Box sx={{ width: '100%', pl: '1rem'}}>
                        <Typography textAlign='center'> Per Page: <span style={{ border: '2px solid #000' }}>{page}</span> </Typography>
                        <Pagination count={10} page={page} onChange={handleChange} />
                    </Box>
                </Grid>
            </Hidden>
        </Grid>


    )
}

export default Cosmetics