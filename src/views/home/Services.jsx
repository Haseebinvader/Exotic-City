import { Box, Grid, Typography } from "@mui/material"
import services from '../../assets/jpeg/services.jpg'
import propos from '../../assets/jpeg/propos.jpg'
const Services = () => {
    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'space-around', mt: '2rem', height: '100%', pb: '2rem' }}>
            <Grid item>
                <Typography textAlign='center' fontSize='35px'>A PROPOS</Typography>
                <Box style={{ width: '100% ', height: '2px', backgroundColor: 'red', margin: '8px 0', }} ></Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: '4rem' }}>
                    <Typography><img src={propos} width='90%' /></Typography>
                    <Typography width='18rem' fontSize='14px'>Feel,To taste,To explore,Like, To share.Words that define the very essence of Exotic City, a major player in the production and distribution of food, beverages and personal care products from Asia and Africa. As a producer and distributor, we want to create a dialogue between cultures, encourage diversity and fully subscribe to the societal challenges of openness and integration. We are proud owners of brands like Africa Village, Congo nature, Royal Village, De Chez Nous, Care n Clear, Thai Village and many more. We also hold exclusive distribution rights of Shan, Rubicon, Regal, Crème of Nature, Dabur, ORS, Fair n White.</Typography>
                </Box>
            </Grid>
            <Grid item>
                <Typography textAlign='center' fontSize='35px'>SERVICES</Typography>
                <Box style={{ width: '100% ', height: '2px', backgroundColor: 'red', margin: '8px 0', }} ></Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: '4rem' }}>
                    <Typography><img src={services} width='90%' /></Typography>
                    <Typography width='18rem' fontSize='14px'>We specialize in African and Asian food products, operating as wholesaler and distributor in Belgium. We provide delivery across Europe and Scandinavian countries, our client portfolio exists in Germany, France, Netherlands, Austria, Switzerland, Sweden, Denmark, Finland and Norway. Exotic City offers over 6000 products in dry, frozen and fresh categories. Reserved for professionals (traders or restaurateurs), all our goods are available in self-service cash & carry that is a One Stop shop warehouse.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Services