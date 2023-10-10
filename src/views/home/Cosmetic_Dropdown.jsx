import { Box, Grid, Typography } from "@mui/material";

const items = [
  {
    title: 'HAIR CARE',
    items: ['Relaxer & Color Treatments', 'Shampoo & Conditioners', 'Styling', 'Hair Treatments', 'Other Hair Care'],
  },
  {
    title: 'BODY CARE',
    items: ['Cream, Gel & Lotions', 'Shower & Soap', 'Serum Glucerin & Oils', 'Makeup', 'Other Body Care'],
  },
  {
    title: 'CHILDREN CARE',
    items: ['Hair Care','Body Care','Others Children Care', ],
  },
  {
    title: 'MEN CARE',
    items: ['Hair Care','Body Care','Others Men Care', ],
  },
];

const Cosmetic_Dropdown = () => {
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'left', gap: '2rem', height: '10rem', width: '100%' }}>
      {items.map((section, index) => (
        <Grid item key={index}>
          <Typography sx={{ '&:hover': { color: '#F7A92E' }, color: 'red', fontWeight: '600' }}>{section.title}</Typography>
          <Box style={{ width: '100% ', height: '1px', backgroundColor: 'black', margin: '8px 0', }} ></Box>

          {section.items.map((item, itemIndex) => (
            <Typography key={itemIndex} sx={{ '&:hover': { color: 'red' }, color: 'grey' }}>{item}</Typography>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Cosmetic_Dropdown;
