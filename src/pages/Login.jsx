import Checkbox from '@mui/material/Checkbox';
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material"

const Login = () => {
    return (
        <Grid container sx={{ width: '98vw', pt: '2rem', mb: '2rem' }}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: '600', color: '#fff', backgroundColor: 'orange', width: '98.9vw' }} variant='h6'>ACCOUNT</Typography>

                <Card sx={{
                    mx: { xs: '1rem', lg: '29rem' },
                    width: { xs: '90vw', lg: '40vw' },
                    height: 'auto',
                    p: '2.5rem',
                    mt: '2rem'
                }}>
                    <Box>
                        <Typography variant='h4' sx={{ fontWeight: '600', pt: '2rem' }}>LOGIN</Typography>
                    </Box>
                    <Box sx={{ pt: '2rem' }}>
                        <Typography sx={{ fontSize: '13px' }}>E-Mail</Typography>
                        <TextField type="email" size="small" fullWidth />
                    </Box>
                    <Box sx={{ pt: '2rem' }}>
                        <Typography sx={{ fontSize: '13px' }}>Password</Typography>
                        <TextField type="password" size="small" fullWidth />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', pt: '2rem' }}>
                        <Typography sx={{ fontSize: '13px' }}> <Checkbox /> REMEMBER ME</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pt: '2rem'
                    }}>
                        <Button variant='contained' color='primary' sx={{ mb: { xs: '1rem', sm: 0 } }}>SIGN IN</Button>
                        <Typography sx={{ fontSize: '13px', mt: { xs: '1rem', sm: 0 } }}>Forgot your password?</Typography>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Login;
