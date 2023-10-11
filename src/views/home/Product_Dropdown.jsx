import { Box, Grid, Typography } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import { Link } from 'react-router-dom';

const items = [
  {
    title: 'FOOD',
    items: ['Drinks', 'Preserved Food', 'Fresh Food', 'Frozen Food'],
  },
  {
    title: 'COSMETICS',
    items: ['Hair Care', 'Body Care', 'Child Care', 'Men Care'],
  },
  {
    title: 'HAIR',
    items: ['Synthetic Hair', 'Natural Hair', 'Mixed Hair', 'Accessories'],
  },

];

const Product_Dropdown = () => {
  // States
  const [isFood, setIsFood] = useState(false);
  const [isCosmetics, setIsCosmetics] = useState(false);
  const [isHair, setisHair] = useState(false);
  const [isBrand, setisBrand] = useState(false);

  // Functions
  const toggleFood = () => { setIsFood(!isFood); setIsCosmetics(false); setisHair(false); setisBrand(false) }
  const toggleCosmetics = () => { setIsCosmetics(!isCosmetics); setIsFood(false); setisHair(false); setisBrand(false) }
  const toggleHair = () => { setisHair(!isHair); setIsCosmetics(false); setIsFood(false); setisBrand(false) }
  const toggleBrand = () => { setIsCosmetics(false); setisHair(false); setIsFood(false); setisBrand(!isBrand) }

  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
      {items.map((section, index) => (
        <Grid item key={index} sx={{ width: '100%' }}>
          <Typography
            sx={{ '&:hover': { color: '#000' }, color: 'red', fontWeight: '600', fontSize: '12px', justifyContent: 'space-between', pt: '10px' }}
            onClick={() => {
              if (section.title === 'FOOD') { toggleFood(); } else if (section.title === 'COSMETICS') { toggleCosmetics() } else if (section.title === 'HAIR') {
                toggleHair();
              } else if (section.title === 'EXCLUSIVE BRANDS') { toggleBrand(); }
            }}>
            {section.title} {section.title === 'FOOD' && (isFood ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
            {section.title === 'COSMETICS' && (isCosmetics ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
            {section.title === 'HAIR' && (isHair ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
            {section.title === 'EXCLUSIVE BRANDS' && (isBrand ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
          </Typography>
          <Box style={{ width: '100%', height: '0.5px', backgroundColor: '#E6E6E6', margin: '8px 0' }}></Box>
          {/* Food DropDown */}
          {isFood && section.title === 'FOOD' && (
            <Box>
              {section.items.map((item, itemIndex) => (
                <Box key={itemIndex}>
                  <Link to="/Drinks" style={{ textDecoration: 'none' }}>
                    <Typography sx={{ '&:hover': { color: '#000' }, color: 'grey', fontSize: '12px', paddingTop: '10px' }}>{item}</Typography>
                  </Link>
                  <Box />
                </Box>
              ))}
            </Box>
          )}

          {/* Cosmetics Dropdown */}
          {isCosmetics && section.title === 'COSMETICS' && (
            <Box>
              {section.items.map((item, itemIndex) => (
                <Box key={itemIndex}>
                  <Link to="/Cosmetics" style={{ textDecoration: 'none' }}>
                    <Typography sx={{ '&:hover': { color: '#000' }, color: 'grey', fontSize: '12px', paddingTop: '10px' }}>{item}</Typography>
                  </Link>
                  <Box />
                </Box>
              ))}
            </Box>
          )}
          {/* Hair Dropdown */}
          {isHair && section.title === 'HAIR' && (
            <Box>
              {section.items.map((item, itemIndex) => (
                <Box key={itemIndex}>
                  <Link to="/Hair" style={{ textDecoration: 'none' }}>
                    <Typography sx={{ '&:hover': { color: '#000' }, color: 'grey', fontSize: '12px', paddingTop: '10px' }}>{item}</Typography>
                  </Link>
                  <Box />
                </Box>
              ))}
            </Box>
          )}
          {/* Brand Dropdown */}
          {isBrand && section.title === 'EXCLUSIVE BRANDS' && (
            <Box>
              {section.items.map((item, itemIndex) => (
                <Box key={itemIndex}>
                  <Typography sx={{ '&:hover': { color: 'red' }, color: 'grey', fontSize: '12px', paddingTop: '10px' }}>{item}</Typography>
                  <Box />
                </Box>
              ))}
            </Box>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default Product_Dropdown;
