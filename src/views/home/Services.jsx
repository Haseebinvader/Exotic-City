import { Box, Grid, Hidden, Typography } from "@mui/material"
import { Images } from "../../Data/Home"
import { Home_Data } from "../../Data/Project_Data"
const Services = () => {
    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'space-around', mt: '2rem', height: '100%', pb: '2rem' }}>
            <Grid item>
                <Typography textAlign='center' fontSize='35px'>{Home_Data.Propos_Title}</Typography>
                <Box style={{ width: '100% ', height: '2px', backgroundColor: 'red', margin: '8px 0', }} ></Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: '4rem' }}>
                    <img src={Images.propos} width='50%' />
                    <Hidden mdDown>
                        <Typography width='18rem' fontSize='14px' pl='1rem'>{Home_Data.Propos_Description}</Typography>
                    </Hidden>
                </Box>
            </Grid>
            <Grid item>
                <Typography textAlign='center' fontSize='35px'>{Home_Data.Services_Title}</Typography>
                <Box style={{ width: '100% ', height: '2px', backgroundColor: 'red', margin: '8px 0', }} ></Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: '4rem' }}>
                    <img src={Images.services} width='50%' />
                    <Hidden mdDown>
                        <Typography width='18rem' fontSize='14px' pl='1rem'>{Home_Data.Services_Description}</Typography>
                    </Hidden>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Services