import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import LOGO from '../../assets/jpeg/LOGO.jpg';
// import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';
// import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import Nav_Header from './Nav_Header'

const Nav_Search = () => {
    const usenavigate = useNavigate()
    // Retrieve user ID from sessionStorage
    const userID = sessionStorage.getItem('useriD');
    console.log(userID);

    const handleLogout = () => {
        sessionStorage.clear()
        usenavigate('/Login')
    }

    return (
        // <Grid container sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', pt: '1.2rem', height: '6rem', textAlign: 'center' }} sm={8} md={8} lg={12}>
        //     <Hidden mdUp><Grid item alignItems='center'><MenuIcon /></Grid></Hidden>
        //     <Grid item>
        //         <Link to='/'>
        //             <img src={LOGO} style={{ width: '140px' }} alt="Logo" />
        //         </Link>
        //     </Grid>
        //     <Hidden mdDown>
        //         <Grid item >
        //             {/* <TextField sx={{ backgroundColor: '#F5F5F5', width: '30rem', border: 'none', position: 'end' }} size='small' variant="outlined" placeholder="Search Catalog"
        //                 InputProps={{ endAdornment: (<IconButton sx={{ backgroundColor: '#E6E6E6', color: '#fff' }}><SearchIcon /></IconButton>) }} /> */}
        //             <Nav_Header />
        //         </Grid>
        //     </Hidden>
        //     <Hidden mdDown>
        //         <Grid item sx={{ display: 'flex', gap: '1rem', pt: '1rem', alignItems: 'center' }} >
        //             {/* Check if userID is available in sessionStorage */}
        //             {userID ? (
        //                 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        //                     <Box>
        //                         <Typography sx={{ alignItems: 'center' }}>{`Welcome, ${(userID).toLowerCase()}`}<PersonIcon /></Typography>
        //                     </Box>
        //                     <Box>
        //                         <Button variant='contained' size='small' color='error' onClick={handleLogout}>Logout</Button>
        //                     </Box>
        //                 </Box>
        //             ) : (
        //                 <Link to='/Login' style={{ color: '#000', textDecoration: 'none' }}>
        //                     <Typography sx={{ alignItems: 'center' }}>Signin<PersonIcon /></Typography>
        //                 </Link>
        //             )}
        //             <Link to='Requestaquote' style={{ color: '#000' }}>
        //                 <ShoppingCartIcon sx={{ fontSize: '20px' }} />
        //             </Link>
        //         </Grid>
        //     </Hidden>
        // </Grid>
        <Paper>
            <Grid
                container
                sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', p: '20px' }} >
                <Grid item>
                    <Link to='/'>
                        <img src={LOGO} style={{ width: '140px' }} alt="Logo" />
                    </Link>
                </Grid>
                <Grid item>
                    <Nav_Header />
                </Grid>
                <Grid item sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {userID ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <Typography sx={{ alignItems: 'center' }}>{`Welcome, ${(userID).toLowerCase()}`}<PersonIcon /></Typography>
                            </Box>
                            <Box>
                                <Button variant='contained' size='small' color='error' onClick={handleLogout}>Logout</Button>
                            </Box>
                        </Box>
                    ) : (
                        <Link to='/Login' style={{ color: '#000', textDecoration: 'none' }}>
                            <Typography sx={{ alignItems: 'center' }}>Sign in<PersonIcon /></Typography>
                        </Link>
                    )}
                    <Link to='/Cart' style={{ color: '#000' }}>
                        <ShoppingCartIcon sx={{ fontSize: '20px' }} />
                    </Link>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Nav_Search;
