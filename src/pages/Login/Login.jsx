/* eslint-disable no-unused-vars */
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // States
    const usenavigate = useNavigate()
    const [userId, setuserId] = useState('');
    const [password, setPassword] = useState('')
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    // useEffect(() => { sessionStorage.clear() }, [])
    // const ProceedLogin = async (e) => {
    //     e.preventDefault();
    //     if (!Validate() || isLoggingIn) { return; }
    //     setIsLoggingIn(true);
    //     try {
    //         const response = await fetch(
    //             `https://api.businesscentral.dynamics.com/v2.0/Sandbox1/api/bctech/demo/v2.0/Companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/customer?$top=2`,
    //             {
    //                 method: 'GET',
    //                 headers: {
    //                     "Authorization": `Bearer ${accessToken}`,
    //                     "Content-Type": "application/json",
    //                 },
    //             }
    //         );
    //         if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`); }
    //         const data = await response.json();
    //         console.log("USer", data);
    //         if (!data.value || data.value.length === 0) { toast.error("No users found"); return; }
    //         for (const user of data.value) {
    //             const { UserId, Password } = user;
    //             if (!UserId && !Password) { toast.error(`Invalid credentials for user: ${UserId}`); continue; }
    //             if (UserId === userId && Password === password) {
    //                 const loginResponse = await attemptLogin(UserId, Password);
    //                 if (loginResponse.success) {
    //                     toast.success(`Login successful, Welcome: ${UserId}`);
    //                     sessionStorage.setItem('useriD', UserId); usenavigate('/'); return;
    //                 } else { toast.error(`Login failed for user: ${UserId}`); break; }
    //             }
    //         } toast.error("Login failed for all users");
    //     } catch (error) { toast.error('Login Failed', error); } finally { setIsLoggingIn(false); }
    // };

    // const attemptLogin = async () => {
    //     try {
    //         const response = await fetch(`https://api.businesscentral.dynamics.com/v2.0/Sandbox1/api/bctech/demo/v2.0/Companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/customer?$top=2`, {
    //             method: 'GET',
    //             headers: {
    //                 "Authorization": `Bearer ${accessToken}`,
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`); }
    //         const resp = await response.json();
    //         return { success: Object.keys(resp).length > 0 };
    //     } catch (error) {
    //         console.error('Login Failed', error);
    //         return { success: false };
    //     }
    // };
    // const Validate = () => {
    //     let result = true;
    //     if (!userId || userId.trim() === '') { result = false; toast.error('Please Enter User ID'); }
    //     if (!password || password.trim() === '') { result = false; toast.error('Please Enter password'); }
    //     return result;
    // };
    return (
        <Grid container sx={{ width: '98vw', pt: '2rem', pb: '4rem', backgroundColor: '#f2f2f2' }}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <form >
                    <Card sx={{ mx: { xs: '1rem', lg: '29rem' }, width: { xs: '90vw', lg: '40vw' }, height: 'auto', p: '2.5rem', mt: '2rem' }}>
                        <Box> <Typography variant='h4' sx={{ fontWeight: '600', pt: '2rem' }}>LOGIN</Typography> </Box>
                        <Box sx={{ pt: '2rem' }}>
                            <Typography sx={{ fontSize: '13px' }}>User ID</Typography>
                            <TextField type="text" value={userId} size="small" fullWidth onChange={(e) => setuserId(e.target.value)} />
                        </Box>
                        <Box sx={{ pt: '2rem' }}>
                            <Typography sx={{ fontSize: '13px' }}>Password</Typography>
                            <TextField type="password" value={password} size="small" fullWidth onChange={(e) => setPassword(e.target.value)} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', pt: '2rem' }}><Typography sx={{ fontSize: '13px' }}> <Checkbox /> REMEMBER ME</Typography> </Box>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', pt: '2rem' }}>
                            <Button variant='contained' color='primary' type='submit' sx={{ mb: { xs: '1rem', sm: 0 } }} disabled={isLoggingIn}>LOG IN</Button>
                            <Typography sx={{ fontSize: '13px', mt: { xs: '1rem', sm: 0 } }}>Forgot your password?</Typography>
                        </Box>
                    </Card>
                </form>
            </Grid>
        </Grid >
    )
}

export default Login;
