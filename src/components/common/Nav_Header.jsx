import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typography } from '@mui/material';
import Hidden from '@mui/material/Hidden';
// import LanguageIcon from '@mui/icons-material/Language';
import Product_Dropdown from '../../views/home/Product_Dropdown';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import Dropdown from './dropdown';
import Brand_Dropdown from '../../views/home/Brand_Dropdown';
import i18next from 'i18next';
import './Styles.css'
const Nav_Header = () => {
    // Language Translation
    const { t } = useTranslation();
    const handleClick = (e) => {
        const selectedLanguage = e.target.value;
        if (i18next.isInitialized) { i18next.changeLanguage(selectedLanguage); } else { console.error("i18next is not initialized properly."); }
    }
    // States
    const [isProduct, setisProduct] = useState(false)
    const [isBrand, setisBrand] = useState(false)
    // Functions
    const toggleProduct = () => { setisProduct(!isProduct); setisBrand(false) }
    const toggleBrand = () => { setisBrand(!isBrand); setisProduct(false) }
    return (
        <Hidden lgDown>

            <Grid container xs={12} sx={{ pl: '8rem', paddingTop: '1.8rem' }}>
                <Grid item >
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', cursor: 'pointer' }}>
                        <Typography sx={{ fontSize: '14px' }}> <Link to='/'><HomeIcon sx={{ color: '#000' }} /></Link>  </Typography>
                        <Box >
                            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#5B5B5B', fontWeight: '600' }} onClick={toggleProduct}>
                                {t('PRODUCTS')}  <KeyboardArrowDownIcon />
                            </Typography>
                            {isProduct && (
                                <Box sx={{ backgroundColor: '#fff', border: '1px solid lightgrey', position: 'absolute', color: '#000', padding: '1rem', borderRadius: '4px', zIndex: 10, ml: '4rem', width: '14rem', marginLeft: '-1rem' }}>
                                    <Product_Dropdown product={setisProduct} />
                                </Box>)}
                        </Box>
                        <Box sx={{ position: 'relative' }}>
                            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#5B5B5B', fontWeight: '600' }} onClick={toggleBrand}>
                                {t('EXCLUSIVE BRANDS')}  <KeyboardArrowDownIcon />
                            </Typography>
                            {isBrand && (
                                <Box sx={{ backgroundColor: '#fff', border: '1px solid lightgrey', position: 'absolute', color: '#000', width: '60rem', height: '18rem', padding: '1rem', borderRadius: '4px', zIndex: 10 }}>
                                    <Brand_Dropdown />
                                </Box>)}
                        </Box>
                        <Box>
                            <Link to='/About' style={{ textDecoration: 'none' }}>
                                <Typography onClick={() => { setisBrand(false); setisProduct(false); }}
                                    sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#5B5B5B', fontWeight: '600', textDecoration: 'none', cursor: 'pointer', }}>
                                    {t('ABOUT US')}
                                </Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Link to='/Services' style={{ textDecoration: 'none' }}>
                                <Typography onClick={() => { setisBrand(false); setisProduct(false); }}
                                    sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#5B5B5B', fontWeight: '600', textDecoration: "none" }} >
                                    {t('SERVICES')}
                                </Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Link to='/Contact' style={{ textDecoration: 'none' }}>
                                <Typography onClick={() => { setisBrand(false); setisProduct(false); }}
                                    sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#5B5B5B', fontWeight: '600', textDecoration: "none" }} >
                                    {t('CONTACT US')}
                                </Typography>
                            </Link>
                        </Box>
                        <Dropdown brand={setisBrand} product={setisProduct} onChange={(e) => handleClick(e)} />
                    </Box>
                </Grid>
            </Grid>
        </Hidden >
    )
}

export default Nav_Header;