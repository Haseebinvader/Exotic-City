import { Box, Grid, Hidden, Pagination, Typography } from "@mui/material"
import Drinks_Img from '../../assets/jpeg/DRINKS.jpg'
import Filters from "../../views/products/filters"
import Food_Card from "../../views/products/Food_Card"
import { useState } from "react"
const Food = () => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');

    const handleChange = (event, value) => { setPage(value); };
    const handleSearch = (newQuery) => { setQuery(newQuery); };
    return (
        <Grid container sx={{ width: '98.9vw' }}>
            <Grid item sx={{ width: '100%' }}>
                <img src={Drinks_Img} style={{ width: '100%' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: '600', color: '#fff', backgroundColor: 'orange' }}>DRINKS</Typography>
            </Grid>
            <Filters handleSearch={handleSearch} />
            <Food_Card query={query} />
            <Hidden lgUp>
                <Grid item>
                    <Box sx={{ width: '100%', pl: '1rem' }}>
                        <Typography textAlign='center'>Page: <span style={{ border: '2px solid #000' }}>{page}</span> </Typography>
                        <Pagination count={10} page={page} onChange={handleChange} />
                    </Box>
                </Grid>
            </Hidden>
        </Grid>

    )
}

export default Food