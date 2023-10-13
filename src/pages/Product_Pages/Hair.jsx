import { Box, Hidden, Pagination, Grid, Typography } from "@mui/material"
import Drinks_Img from '../../assets/jpeg/DRINKS.jpg'
import Filters from "../../views/products/filters"
import Hair_Card from "../../views/products/Hair_Card"
import { useState } from "react"

const Hair = () => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <Grid container>
            <Grid item  >
                <img src={Drinks_Img} style={{ maxWidth: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: '600', color: '#fff', backgroundColor: 'orange' }}>HAIR</Typography>
            </Grid>
            <Filters />
            <Hair_Card />
            <Hidden lgUp>
                <Grid item>
                    <Box sx={{ width: '100%', pl: '1rem'  }}>
                        <Typography textAlign='center'> Per Page: <span style={{ border: '2px solid #000' }}>{page}</span> </Typography>
                        <Pagination count={10} page={page} onChange={handleChange} />
                    </Box>
                </Grid>
            </Hidden>
        </Grid>

    )
}

export default Hair