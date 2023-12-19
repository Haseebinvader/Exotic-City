import { Box, Grid, Typography } from "@mui/material"
import Services_cards from "../../views/services/services_cards"
const Services = () => {
  return (
    <Grid container>
      <Grid item>
        <Box sx={{ ml: '4rem', mt: '2rem' }}>
          <Typography sx={{ textAlign: 'left', fontSize: '25px', fontWeight: '600' }}>Services</Typography>
        </Box>
        <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', ml: '4rem', mt: '1rem' }} ></Box>
      </Grid>
      <Services_cards />
    </Grid>

  )
}

export default Services