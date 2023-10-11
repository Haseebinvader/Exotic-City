import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import Hidden from '@mui/material/Hidden';
import LanguageIcon from '@mui/icons-material/Language';
import Product_Dropdown from './Product_Dropdown';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

import './Styles.css'
// import Cosmetic_Dropdown from './Cosmetic_Dropdown';
// import Hair_Dropdown from './Hair_DropDown';
import Brand_Dropdown from './Brand_Dropdown';

const Nav_Header = () => {
    // States
    const [islanguage, setisLanguage] = useState(false)
    const [isProduct, setisProduct] = useState(false)

    // const [isCosmetic, setisCosmetic] = useState(false)
    // const [isHair, setisHair] = useState(false)
    const [isBrand, setisBrand] = useState(false)
    const language = ['DEUTSCH', 'ENGLISH', 'FRANCIAS', 'NEDERLANDS']

    // Functions
    const toggleProduct = () => { setisProduct(!isProduct); setisLanguage(false); setisBrand(false) }
    const toggleLanguage = () => { setisLanguage(!islanguage); setisProduct(false); setisBrand(false) }
    // const toggleCosmetics = () => { setisCosmetic(!isCosmetic) }
    // const toggleHair = () => { setisHair(!isHair) }
    const toggleBrand = () => { setisBrand(!isBrand); setisLanguage(false); setisProduct(false) }

    const navitems = [
        'FAQS', 'ABOUT US', 'SERVICES', 'CONTACT'
    ]

    return (
        <Hidden lgDown>
            <Grid container xs={12} sx={{ pl: '8rem', paddingTop: '1.8rem' }}>
                <Grid item >
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', cursor: 'pointer' }}>
                        <Typography sx={{ fontSize: '14px' }}> <Link to='/'><HomeIcon sx={{color: '#000'}}/></Link>  </Typography>
                        <Box >
                            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#5B5B5B', fontWeight: '600' }} onClick={toggleProduct}>
                                PRODUCTS <KeyboardArrowDownIcon />
                            </Typography>
                            {isProduct && (
                                <Box sx={{ backgroundColor: '#fff', border: '1px solid lightgrey',position: 'absolute', color: '#000', padding: '1rem', borderRadius: '4px', zIndex: 10, ml: '4rem', width: '12rem' }}>
                                    <Product_Dropdown />
                                </Box>)}
                        </Box>
                        {/* <Box style={{ position: 'relative' }}>
                            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#5B5B5B', fontWeight: '600' }} onClick={toggleCosmetics}>
                                COSMETICS <KeyboardArrowDownIcon />
                            </Typography>
                            {isCosmetic && (
                                <Box sx={{ backgroundColor: '#fff', position: 'absolute', color: '#000', width: '60rem', height: '18rem', padding: '1rem', borderRadius: '4px', zIndex: 10 }}>
                                    <Cosmetic_Dropdown />
                                </Box>)}
                        </Box> */}
                        {/* <Box style={{ position: 'relative' }}>
                            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#5B5B5B', fontWeight: '600' }} onClick={toggleHair}>
                                HAIR <KeyboardArrowDownIcon />
                            </Typography>
                            {isHair && (
                                <Box sx={{ backgroundColor: '#fff', position: 'absolute', color: '#000', width: '60rem', height: '18rem', padding: '1rem', borderRadius: '4px', zIndex: 10 }}>
                                    <Hair_Dropdown />
                                </Box>)}
                        </Box> */}
                        <Box style={{ position: 'relative' }}>
                            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#5B5B5B', fontWeight: '600' }} onClick={toggleBrand}>
                                EXCLUSIVE BRANDS <KeyboardArrowDownIcon />
                            </Typography>
                            {isBrand && (
                                <Box sx={{ backgroundColor: '#fff', border: '1px solid lightgrey', position: 'absolute', color: '#000', width: '60rem', height: '18rem', padding: '1rem', borderRadius: '4px', zIndex: 10 }}>
                                    <Brand_Dropdown />
                                </Box>)}
                        </Box>
                        {navitems.map((item, index) => (
                            <Typography key={index} sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#5B5B5B', fontWeight: '600' }}>{item}</Typography>
                        ))}
                        <Box>
                            <InputLabel
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#5B5B5B', fontWeight: '600' }}
                                onClick={toggleLanguage} >
                                <LanguageIcon sx={{ fontSize: '17px' }} /> EN <KeyboardArrowDownIcon />
                            </InputLabel>
                            {islanguage && (
                                <Box sx={{ border: '1px solid #ccc', borderRadius: '4px', position: 'absolute', backgroundColor: '#fff', zIndex: 1, marginTop: '5px', color: 'red' }} >
                                    {language.map((category) => (
                                        <MenuItem key={category} onClick={() => console.log(category)} sx={{ borderTop: 'none', fontSize: '12px', fontWeight: '600' }}> {category}  </MenuItem>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Hidden>
    )
}

export default Nav_Header;