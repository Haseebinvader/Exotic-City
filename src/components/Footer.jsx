import { Typography, Grid } from '@mui/material';
import logo from '../assets/jpeg/footer-logo.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Footer = () => {

  return (
    <footer >
      <Grid container sx={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#4A4A4A', color: '#fff', padding: "30px", gap: '4rem' }}>
        <Grid item>
          <Typography fontSize={'20px'} fontWeight={'600'} color={'#DADADA'}>Contact Us</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}>  Av. de l Expansion 1</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}> <LocationOnIcon sx={{ width: '20px' }} />4432 Alleur</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}> <LocalPhoneIcon sx={{ width: '20px' }} />04 228 04 00</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}> <MailIcon sx={{ width: '20px' }} />info@exoticcity.be</Typography>
        </Grid>
        <Grid item>
          <Typography fontSize={'20px'} fontWeight={'600'} color={'#DADADA'}>Navigation</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />Legal notice</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />Privacy</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />Services</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />Contact us</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />Brands</Typography>
        </Grid>
        <Grid item>
          <Typography fontSize={'20px'} fontWeight={'600'} color={'#DADADA'}>Food Products</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />DRINKS</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />PRESERVED FOOD</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />FRESH FOOD</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />FROZEN FOOD</Typography>
        </Grid>
        <Grid item>
          <Typography fontSize={'20px'} fontWeight={'600'} color={'#DADADA'}>Cosmetics Products</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />BODY CARE</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />MEN CARE</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />CHILDREN CARE</Typography>
        </Grid>
        <Grid item>
          <Typography fontSize={'20px'} fontWeight={'600'} color={'#DADADA'}>Hair Products</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />HAIR CARE</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />ACCESSORIES</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />MIXED HAIR</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />SYNTHETIC HAIR</Typography>
          <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'14px'}><KeyboardArrowRightIcon />NATURAL HAIR</Typography>
        </Grid>
        <Grid item>
          <Typography fontSize={'20px'} fontWeight={'600'} color={'#DADADA'}>Nominated</Typography>
          <img src={logo} />
        </Grid>
      </Grid>

    </footer>
  );
};

export default Footer;
