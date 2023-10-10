import { Grid, Hidden, Typography } from '@mui/material'
import LOGO from '../../assets/jpeg/LOGO.jpg'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const Nav_Search = () => {

    return (
        <Grid container sx={{ width: '92%', display: 'flex', justifyContent: 'space-evenly', pt: '1.2rem' }} xs={12}>
            <Hidden mdUp>
                <Grid item display={'flex'} alignItems={'center'}>
                    <MenuIcon />
                </Grid>
            </Hidden>

            <Hidden mdDown>
                <Grid item>
                    <img src={LOGO} style={{ width: '140px' }} />
                </Grid>
            </Hidden>

            <Grid item >
                <TextField
                    sx={{ backgroundColor: '#F5F5F5', width: '25rem', border: 'none' }} // Removed borderColor property
                    size='small'
                    variant="outlined"
                    value="Search our catalog"
                    InputProps={{
                        endAdornment: (
                            <IconButton sx={{ backgroundColor: '#E6E6E6', color: '#fff' }}>
                                <SearchIcon />
                            </IconButton>
                        ),
                    }}
                />


            </Grid>
            <Hidden mdDown>

                <Grid item sx={{ display: 'flex', gap: '1rem', pt: '1rem' }}>
                    <Typography>Signin</Typography>
                    <PersonIcon />
                    <ShoppingCartIcon />
                </Grid>
            </Hidden>

        </Grid>
    )
}

export default Nav_Search