import { Box, Grid, Hidden, Typography } from "@mui/material";
import { About_Data } from "../../Data/Project_Data";
import { images } from '../../Data/About/index'
const Message = () => {
    return (
        <Grid container>
            <Grid item>
                <Box sx={{ ml: '4rem', mt: '2rem' }}>
                    <Typography sx={{ textAlign: 'left', fontSize: '25px', fontWeight: '600' }}>About Us</Typography>
                </Box>
                <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', ml: '4rem', mt: '1rem' }} ></Box>
            </Grid>

            <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#ECF0F1', padding: '2rem', gap: '2rem' }}>
                <Box width="65%">
                    <Typography sx={{ textAlign: 'center', fontSize: '40px', color: '#646464' }}>{About_Data.About_Title}</Typography>
                    <Typography sx={{ color: '#646464' }}>{About_Data.Exotic_Description}</Typography>
                </Box>
                <Hidden lgDown>
                    <Box>
                        <img src={images.Ceo_img} width="100%" />
                    </Box>
                </Hidden>
            </Grid>
            <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem' }} ></Box>
            <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#ECF0F1', padding: '2rem' }}>
                <Hidden lgDown>
                    <Box>
                        <img src={images.warehouse} width="95%" />
                    </Box>
                </Hidden>
                <Box sx={{ width: '55%' }}>
                    <Typography sx={{ textAlign: 'center', fontSize: '40px', color: '#646464' }}>{About_Data.Warehouse_Title}</Typography>
                    <Typography sx={{ color: '#646464' }}>{About_Data.Warehouse_Description}</Typography>
                </Box>
            </Grid>
            <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem' }} ></Box>
            <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#ECF0F1', padding: '2rem', gap: '5rem' }}>
                <Box width="60%" pl='1rem'>
                    <Typography sx={{ textAlign: 'center', fontSize: '40px', color: '#646464' }}>{About_Data.Coromuse_Title}</Typography>
                    <Typography sx={{ color: '#646464' }}>{About_Data.Coromuse_Description}</Typography>
                </Box>
                <Hidden lgDown>
                    <Box>
                        <img src={images.coromeuse} width="100%" />
                    </Box>
                </Hidden>
            </Grid>
            <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem' }} ></Box>
            <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', pl: '5rem', backgroundColor: '#ECF0F1', padding: '2rem', gap: '5rem' }}>
                <Hidden lgDown>
                    <Box>
                        <img src={images.brand_logos} width="95%" />
                    </Box>
                </Hidden>
                <Box width="53%" >
                    <Typography sx={{ textAlign: 'center', fontSize: '40px', color: '#646464' }}>{About_Data.Brand_Title}</Typography>
                    <Typography sx={{ color: '#646464' }}>{About_Data.Brand_Description}</Typography>
                </Box>
            </Grid>
            <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem' }} ></Box>


        </Grid>
    )
}
export default Message