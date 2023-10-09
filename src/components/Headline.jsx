import { Typography, Grid, Box, Divider } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Headline = () => {
  return (
      <Grid container position="relative" sx={{ height: '1.8rem', backgroundColor: "#E6E6E6", width: '100%', pl: '50px' }}>
        <Grid item sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', gap: '10px' }}>
          <Box>
            <FacebookIcon sx={{ color: '#000', width: '15px' }} />
          </Box>
          <Box>
            <InstagramIcon sx={{ color: '#000', width: '15px' }} />
          </Box>
          <Box>
            <LinkedInIcon sx={{ color: '#000', width: '15px' }} />
          </Box>
        </Grid>
        <Divider style={{ backgroundColor: '#A8A8A8', margin: '2px', width: '1px' }} />
        <Grid item sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
          <Box >
            <Typography sx={{ color: '#A8A8A8', fontSize: '13px', width: '4rem', pt: '4px' }} >Delivery</Typography>
          </Box>
          <Divider style={{ backgroundColor: '#A8A8A8', margin: '2px', width: '1px' }} />
          <Box>
            <Typography sx={{ color: '#A8A8A8', fontSize: '13px', pt: '4px' }}>Legal Notice</Typography>
          </Box>
        </Grid>
        <Grid item></Grid>
      </Grid>
   )
}

export default Headline