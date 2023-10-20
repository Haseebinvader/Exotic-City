import { Typography, Grid, Box } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { FooterData } from '../../Data/Project_Data';
const Footer = () => {


  return (
    <Grid container
      sx={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#4A4A4A', color: '#fff', padding: '30px', gap: '4rem', }}>
      {FooterData.map((section, index) => (
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
