import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import Hidden from '@mui/material/Hidden';
import LanguageIcon from '@mui/icons-material/Language';
import Products_DropDown from './Products_Dropdown';
import './Styles.css'

const Nav_Header = () => {
    // States
    const [islanguage, setisLanguage] = useState(false)
    const [isProducts, setisProducts] = useState(false)


    const language = ['Deutsch', 'English', 'Francias', 'Nederlands']
    const toggleProducts = () => { setisProducts(!isProducts) }
    const toggleLanguage = () => { setisLanguage(!islanguage) }

    return (
        <Hidden lgDown>
            <Grid container xs={12} sx={{ pl: '11.5rem', paddingTop: '1.8rem' }}>
                <Grid item >
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', cursor: 'pointer' }}>
                        <Typography sx={{ fontSize: '14px' }}> HOME </Typography>
                        <Box style={{ position: 'relative' }}>
                            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }} onClick={toggleProducts}>
                                PRODUCTS <KeyboardArrowDownIcon />
                            </Typography>
                            {isProducts && (
                                <Box sx={{ backgroundColor: '#193460', position: 'absolute', color: '#fff', width: '45rem', padding: '1rem', borderRadius: '4px', zIndex: 10 }}>
                                    <Products_DropDown />
                                </Box>)}
                        </Box>
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}> BRANDS</Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}> FAQS </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}> ABOUT UNIDEX </Typography>
                        <Typography sx={{ fontSize: '14px' }}> VACANCIES </Typography>
                        <Typography sx={{ fontSize: '14px' }}> CONTACT </Typography>
                        <Box>
                            <InputLabel
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}
                                onClick={toggleLanguage} >
                                <LanguageIcon sx={{ fontSize: '17px' }} /> EN <KeyboardArrowDownIcon />
                            </InputLabel>
                            {islanguage && (
                                <Box sx={{ border: '1px solid #ccc', borderRadius: '4px', position: 'absolute', backgroundColor: '#193460', zIndex: 1, marginTop: '5px', color: '#fff' }} >
                                    {language.map((category) => (
                                        <MenuItem key={category} onClick={() => console.log(category)} sx={{ borderTop: 'none' }}> {category}  </MenuItem>
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