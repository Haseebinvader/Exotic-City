import { Grid, Hidden, Typography } from '@mui/material'
import LOGO from '../../assets/jpeg/LOGO.jpg'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Nav_Search = () => {

    return (
        <Grid container sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', pt: '1.2rem', height: '6rem', textAlign: 'center' }} xs={12}>
            <Hidden mdUp><Grid item alignItems='center'><MenuIcon /></Grid></Hidden>
            <Grid item>
                <Link to='/'>
                    <img src={LOGO} style={{ width: '140px' }} />
                </Link>
            </Grid>
            <Hidden mdDown>
                <Grid item > <TextField
                    sx={{ backgroundColor: '#F5F5F5', width: '30rem', border: 'none', position: 'end' }} size='small' variant="outlined" placeholder="Search Catalog"
                    InputProps={{ endAdornment: (<IconButton sx={{ backgroundColor: '#E6E6E6', color: '#fff' }}><SearchIcon /></IconButton>) }} />
                </Grid>
            </Hidden>
            <Hidden mdDown>
                <Grid item sx={{ display: 'flex', gap: '1rem', pt: '1rem' }}>
                    <Link to='/Login' style={{ color: '#000', textDecoration: 'none' }}>
                        <Typography sx={{ alignItems: 'center' }}>Signin<PersonIcon /></Typography>
                    </Link>
                    <ShoppingCartIcon />
                </Grid>
            </Hidden>
        </Grid >
    )
}

export default Nav_Search