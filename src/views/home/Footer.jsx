import { Typography, Grid, Box } from '@mui/material';
import logo from '../../assets/jpeg/footer-logo.jpg';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Footer = () => {
  const sections = [
    { title: 'Contact Us', items: ['Av. de l Expansion 1', '4432 Alleur', '04 228 04 00', 'info@exoticcity.be',] },
    { title: 'Navigation', items: ['Legal notice', 'Privacy', 'Services', 'Contact us', 'Brands'] },
    { title: 'Food Products', items: ['DRINKS', 'PRESERVED FOOD', 'FRESH FOOD', 'FROZEN FOODs'] },
    { title: 'Cosmetics Products', items: ['BODY CARE', 'MEN CARE', 'CHILDREN CARE'] },
    { title: 'Hair Products', items: ['HAIR CARE', 'ACCESSORIES', 'MIXED HAIR', 'SYNTHETIC HAIR', 'NATURAL HAIR',] },
    { title: 'Nominated', items: [<img src={logo} alt="Nominated Logo" key="logo" />] },
  ];

  return (
    <Grid container
      sx={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#4A4A4A', color: '#fff', padding: '30px', gap: '4rem', }}>
      {sections.map((section, index) => (
        <Grid item key={index}>
          <Typography fontSize={'16px'} fontWeight={'600'} color={'#DADADA'}> {section.title} </Typography>
          <Box style={{ width: '2rem', height: '2px', backgroundColor: '#fff', margin: '8px 0', }} ></Box>
          {section.items.map((item, itemIndex) => (
            <Box key={itemIndex}>
              <Typography color={'#BDBDBD'} pt={'10px'} fontSize={'12px'} >
                {typeof item === 'string' && section.title !== 'Contact Us' ? (<span> <KeyboardArrowRightIcon /> {item} </span>) : (item)} </Typography>
              {section.title === 'Contact Us' && (
                <Box
                  style={{ width: '100%', height: '0.2px', backgroundColor: '#E6E6E6', margin: '8px 0' }} ></Box>
              )}
            </Box>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Footer;
