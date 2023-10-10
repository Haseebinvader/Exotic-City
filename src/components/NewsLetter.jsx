import { Grid, TextField, Typography, Box } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const NewsLetter = () => {
    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
            <Grid item>
                <Typography fontSize={'25px'} fontWeight={'600'}>Sign up to newsletter</Typography>
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
            <Grid item sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', gap: '10px' }}>
                <Box>
                    <FacebookIcon sx={{ color: '#000', width: '15px' }} />
                </Box>
                <Box>
                    <InstagramIcon sx={{ color: '#000', width: '15px' }} />
                </Box>
                <Box>
                    <LinkedInIcon sx={{ color: '#000', width: '15px' }} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default NewsLetter