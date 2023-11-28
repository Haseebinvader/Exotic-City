import Checkbox from '@mui/material/Checkbox';
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [userId, setuserId] = useState('');
    const [password, setPassword] = useState('')
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const usenavigate = useNavigate()
    useEffect(() => {
        sessionStorage.clear()
    }, [])

    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTcwMTE5NTA1NSwibmJmIjoxNzAxMTk1MDU1LCJleHAiOjE3MDExOTg5NTUsImFpbyI6IkUyVmdZTGlpdDduazcvSk5jMjBxSnphTC90cWFEZ0E9IiwiYXBwaWQiOiJhODM5MWI5Yy00NTgzLTQ2YzMtYTQ0OS1hMGRlNmUxOTkxNjEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI1ZmNkNzk2Yy1kNWE0LTRiYzAtOWRkMS02YmQyMmZhNWFlZjUiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiNWZjZDc5NmMtZDVhNC00YmMwLTlkZDEtNmJkMjJmYTVhZWY1IiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoieTduSUo4N1VpVUNxdFY5YUYxVWFBZyIsInZlciI6IjEuMCJ9.DZR5_TQxEvT8CoaMTIHC3wcWW-JQdroL1i0KpXs1sTSueIuCFES3mxC7TWVzD_JpyitZZBIXX11KzubXU9H9g0YSdUadACvkwBDg-oVhp5A66zHY9hGmZUFBMNatejyita2kJZuLrCP9ET7YztnrYrYu-VTjjcWt9lrezJNyNyS-BPgWOmKsMGueLMTUw12QxV6LyVidkr9ECEAL5NVr8-TLATOLR6TgIi9Raq8pNFcJaN25LNA8xoj352DxCIJIFoDKy02fog3kwJQWbHQUCaUAqrCq_LwvsbS-ukUdao7yGffc7t4DFN_N987F-tM0fgi5aytAlzbCxBWFQYm6FA';
    const ProceedLogin = async (e) => {
        e.preventDefault();
        if (!Validate() || isLoggingIn) {
            return;
        }
        setIsLoggingIn(true);


        try {
            const response = await fetch(
                'https://api.businesscentral.dynamics.com/v2.0/Sandbox1/api/bctech/demo/v2.0/Companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/customer',
                {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (!data.value || data.value.length === 0) {
                toast.error("No users found");
                return;
            }
            

            for (const user of data.value) {
                const { UserId, Password } = user;

                // Validate UserId and Password
                if (!UserId || !Password) {
                    toast.error(`Invalid credentials for user: ${UserId}`);
                    continue;
                }

                // Check for a match with entered credentials
                if (UserId === userId && Password === password) {
                    // Attempt login
                    const loginResponse = await attemptLogin(UserId, Password);

                    if (loginResponse.success) {
                        toast.success(`Login successful for user: ${UserId}`);
                        sessionStorage.setItem('useriD', UserId);
                        usenavigate('/');
                        return; // Exit the loop if login is successful
                    } else {
                        toast.error(`Login failed for user: ${UserId}`);
                        break; // Exit the loop if login fails
                    }
                }
            }

            toast.error("Login failed for all users");
        } catch (error) {
            toast.error('Login Failed', error);
        } finally {
            setIsLoggingIn(false);
        }
    };

    const attemptLogin = async (userId, password) => {
        try {
            const response = await fetch('https://api.businesscentral.dynamics.com/v2.0/Sandbox1/api/bctech/demo/v2.0/Companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/customer', {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const resp = await response.json();

            return { success: Object.keys(resp).length > 0 };
        } catch (error) {
            console.error('Login Failed', error);
            return { success: false };
        }
    };


    const Validate = () => {
        let result = true;

        if (!userId || userId.trim() === '') {
            result = false;
            toast.error('Please Enter User ID');
        }

        if (!password || password.trim() === '') {
            result = false;
            toast.error('Please Enter password');
        }

        return result;
    };
    return (
        <Grid container sx={{ width: '98vw', pt: '2rem', pb: '4rem', backgroundColor: '#f2f2f2' }}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <form onSubmit={ProceedLogin}>
                    <Card
                        sx={{
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
                            <Typography sx={{ fontSize: '13px' }}>User ID</Typography>
                            <TextField type="text" value={userId} size="small" fullWidth onChange={(e) => setuserId(e.target.value)} />
                        </Box>
                        <Box sx={{ pt: '2rem' }}>
                            <Typography sx={{ fontSize: '13px' }}>Password</Typography>
                            <TextField type="password" value={password} size="small" fullWidth onChange={(e) => setPassword(e.target.value)} />
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
                            <Button variant='contained' color='primary' type='submit' sx={{ mb: { xs: '1rem', sm: 0 } }} disabled={isLoggingIn}
                            >LOG IN</Button>
                            <Typography sx={{ fontSize: '13px', mt: { xs: '1rem', sm: 0 } }}>Forgot your password?</Typography>
                        </Box>
                    </Card>
                </form>
            </Grid>
        </Grid >
    )
}

export default Login;
