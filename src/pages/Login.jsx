import Checkbox from '@mui/material/Checkbox';
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material"
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const history = useHistory(); // Initialize the history object

    const [userId, setuserId] = useState('');
    const [password, setPassword] = useState('')
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTcwMTE3MzcwOSwibmJmIjoxNzAxMTczNzA5LCJleHAiOjE3MDExNzc2MDksImFpbyI6IkUyVmdZRENZdVducjZsMnh5am9wTDlsNEN5WXdBQUE9IiwiYXBwaWQiOiJhODM5MWI5Yy00NTgzLTQ2YzMtYTQ0OS1hMGRlNmUxOTkxNjEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI1ZmNkNzk2Yy1kNWE0LTRiYzAtOWRkMS02YmQyMmZhNWFlZjUiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiNWZjZDc5NmMtZDVhNC00YmMwLTlkZDEtNmJkMjJmYTVhZWY1IiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoiRlJhXy0zd0tZa3FKMXpLX1NxanhBUSIsInZlciI6IjEuMCJ9.P8gd5Yyh0hJ9z8fXlQiaYTUdjEceSKN86fEzEmKVn5ZEgO12q680zPlY_aLRRAY27axvk7cQ_v-7FR0nBiRmPT1U2w-gIHq_NS4opvKrIVEKiefLtMgRi8VKtaOo7L17Ew2wtT9o71Q7vEV3btY866jav9KOPpuxF3NC6QMZUu_lGhCv0aH0cGi-K6O99KHCMuYgCY7KzdfqaQrSl5FFNUoM-EB6wCwqtzEyZI6bwp6KSWoqaWkrk5DnoOvBLBaRIRXX76uqBoHN8923UaTRJcesm88I-BQ_a0Lg6snx89H3ikpMGn8-GNZl1fEliukLQ-IgnkEMs8a1cNPQL-0hcw';

    async function login() {
        console.warn(userId, password);
        let item = { userId, password };
        try {
            let response = await fetch("https://api.businesscentral.dynamics.com/v2.0/Sandbox1/api/bctech/demo/v2.0/Companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/customer", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                body: JSON.stringify(item)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            let result = await response.json();
    
            // Check if the API response indicates success (customize this based on the actual response structure)
            if (result && result.success) {
                localStorage.setItem("user-info", JSON.stringify(result));
                history.push('/');
            } else {
                // Handle incorrect credentials
                console.error("Incorrect credentials");
                // You may want to show an error message to the user here
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }
    


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
                        <Typography sx={{ fontSize: '13px' }}>User ID</Typography>
                        <TextField type="text" size="small" fullWidth onChange={(e) => setuserId(e.target.value)} />
                    </Box>
                    <Box sx={{ pt: '2rem' }}>
                        <Typography sx={{ fontSize: '13px' }}>Password</Typography>
                        <TextField type="password" size="small" fullWidth onChange={(e) => setPassword(e.target.value)} />
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
                        <Button variant='contained' color='primary' sx={{ mb: { xs: '1rem', sm: 0 } }} onClick={login}>LOG IN</Button>
                        <Typography sx={{ fontSize: '13px', mt: { xs: '1rem', sm: 0 } }}>Forgot your password?</Typography>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Login;
