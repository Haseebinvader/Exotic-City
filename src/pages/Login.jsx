import Checkbox from '@mui/material/Checkbox';
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material"

const Login = () => {
    return (
        <>
            <Grid container sx={{ width: '100vw', pt: '2rem', mb: '2rem' }}>
                <Grid item >
                    <Card sx={{ ml: '29rem', width: '40rem', height: '58vh', pl: '2.5rem' }}>
                        <Box>
                            <Typography variant='h4' sx={{ fontWeight: '600', pt: '2rem' }}>LOGIN</Typography>
                        </Box>
                        <Box sx={{ pt: '2rem' }}>
                            <Typography sx={{ fontSize: '13px' }}>E-Mail</Typography>
                            <TextField type="email" size="small" sx={{ width: '35rem' }} />
                        </Box>
                        <Box sx={{ pt: '2rem' }}>
                            <Typography sx={{ fontSize: '13px' }}>Password</Typography>
                            <TextField type="password" size="small" sx={{ width: '35rem' }} />
                        </Box>
                        <Box sx={{ display: 'flex', textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '13px' }}> <Checkbox /> REMEMBER ME</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', width: '93%', justifyContent: 'space-between', textAlign: 'center', pt: '2rem' }}>
                            <Button variant='contained' color='inherit'>SIGN IN</Button>
                            <Typography sx={{ fontSize: '13px' }}>Forgot your password?</Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Login