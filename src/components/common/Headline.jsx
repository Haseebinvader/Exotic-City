import { Typography, Grid, Divider } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
const Headline = () => {
  return (
    <Grid container position="relative" sx={{ height: '1.8rem', backgroundColor: "#E6E6E6", width: '100%', pl: '50px' }}>
      <Grid item sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', gap: '10px' }}>
        <FacebookIcon sx={{ color: '#000', width: '15px' }} />
        <InstagramIcon sx={{ color: '#000', width: '15px' }} />
        <LinkedInIcon sx={{ color: '#000', width: '15px' }} />
      </Grid>
      <Divider style={{ backgroundColor: '#A8A8A8', margin: '2px', width: '1px' }} />
      <Grid item sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
        <Typography sx={{ color: '#A8A8A8', fontSize: '13px', width: '4rem', pt: '4px' }} >Delivery</Typography>
        <Divider style={{ backgroundColor: '#A8A8A8', margin: '2px', width: '1px' }} />
        <Link to='Legalnotice' style={{textDecoration: 'none'}}>
          <Typography sx={{ color: '#A8A8A8', fontSize: '13px', pt: '4px' }}>Legal Notice</Typography>
        </Link>
      </Grid>
      <Grid item></Grid>
    </Grid>
  )
}

export default Headline