import { Box, Grid, Typography } from "@mui/material";

const items = [
  {
    title: 'DRINKS',
    items: ['Juices & Sodas', 'Malt Drinks', 'Milk Products', 'Sirops & Concentrates', 'Tea & Coffee', 'Other Drinks'],
  },
  {
    title: 'PRESERVED FOOD',
    items: ['Flours & Semolina', 'Rices', 'Lentils & Beans', 'Oils', 'Heat & Eat', 'Spices & Sauces Mix', 'Canned Food', 'Snacks & Sweets', 'Other Preserved Food'],
  },
  {
    title: 'FRESH FOOD',
    items: ['Fruits & Vegetables','Salted Fish','Other Fresh Food', ],
  },
  {
    title: 'FROZEN FOODS',
    items: ['Fruits & Vegetables', 'Meat Fsh & Poultry','Other Frozen Food', ],
  },
];

const Food_Dropdown = () => {
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'left',   height: '10rem', width: '100%' }}>
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

export default Food_Dropdown;
