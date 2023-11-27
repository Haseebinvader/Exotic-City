import { Box, Paper, Typography } from '@mui/material';
// import { categories, sub_categories, brand } from '../../Data/Project_Data';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Filter() {
    const [data, setData] = useState([]);

    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTcwMTA4MDE4MSwibmJmIjoxNzAxMDgwMTgxLCJleHAiOjE3MDEwODQwODEsImFpbyI6IkUyVmdZQkNyczZodFl1RzczdmQ5N2ZhSWZlNFZBQT09IiwiYXBwaWQiOiJhODM5MWI5Yy00NTgzLTQ2YzMtYTQ0OS1hMGRlNmUxOTkxNjEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI1ZmNkNzk2Yy1kNWE0LTRiYzAtOWRkMS02YmQyMmZhNWFlZjUiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiNWZjZDc5NmMtZDVhNC00YmMwLTlkZDEtNmJkMjJmYTVhZWY1IiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoiSEV1N3FVVVpQazZPbXNfT0RncDZBUSIsInZlciI6IjEuMCJ9.lnaHRrrvDmcxYZn3glNWAHcWu7H1hj9WJ-rHuXBX20w4jTVD3NzZSaw322RHuJ1HJOlWh8gkHwr-CMmzEonDaClUy0wnwxqOP1BIosiwctJ2F4-nJ9SJcokhMzvojW0feXkqxeV92ueGlrUDMHGglhZr8TuWWbDUEivrkutTwy_jLa3q6JI_dFtJPrKp4Z18YkztAolBtwxWJbx60iaSB24fJgjWP1bLeC5LY3RKXiBllQox0sdUFzM3dMAINWNjViBoDNmJENi423pNme8D6gJHLHLFBUWrsn_3jwA_Ss-6owwKkl3eSI5GftLOOewHaMUp6UAilsuTlBdnWdrEAQ';

    const fetchData = async () => {
        try {
            const res = await axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox1/ODataV4/Company(%27My%20Company%27)/ItemApi', {
                headers: { "Authorization": `Bearer ${accessToken}` },
                params: { '$top': 30 }
            });
            setData(res.data.value);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Paper sx={{ width: { xs: '16rem', md: '16rem', lg: '16rem' }, mr: '1rem', ml: { xs: '0.5rem', md: '0.5rem', lg: '1rem' } }}>
                <Box sx={{ textAlign: 'center', border: '1px solid #f2f2f2', backgroundColor: '#fff', p: '2rem' }}>
                    <Box>
                        <Typography variant='h6' sx={{ fontWeight: '600' }}> Categories </Typography>
                        <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem', mr: '4rem' }}></Box>
                        <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '3px' }}>
                            {[...new Set(data.map(item => item.ParentCategory))].map((uniqueParentCategory) => (
                                <div key={uniqueParentCategory} >
                                    <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
                                        <li style={{ marginRight: '8px', textAlign: 'left' }}>{uniqueParentCategory}</li>
                                        <div style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
                                            <input type='checkbox' style={{ marginLeft: '4px' }} />
                                        </div>
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </Box>
                    <Box>
                        <Typography variant='h6' sx={{ fontWeight: '600', mt: '1rem' }}> Sub Categories </Typography>
                        <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem', mr: '4rem' }}></Box>
                        <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '3px' }}>
                            {[...new Set(data.map(item => item.ItemSubCategoryCode))].map((uniqueItemSubCategoryCode) => (
                                <div key={uniqueItemSubCategoryCode}>
                                    <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
                                        <li style={{ marginRight: '8px', textAlign: 'left' }}>{uniqueItemSubCategoryCode}</li>
                                        <div style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
                                            <input type='checkbox' style={{ marginLeft: '4px' }} />
                                        </div>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Box>
                    <Box>
                        <Typography variant='h6' sx={{ fontWeight: '600', mt: '1rem' }}>  Brands </Typography>
                        <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem', mr: '4rem' }}></Box>
                        <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '3px' }}>
                            {[...new Set(data.map(item => item.Brand))].map((uniqueBrand) => (
                                <div key={uniqueBrand}>
                                    <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
                                        <li style={{ marginRight: '8px', textAlign: 'left' }}>{uniqueBrand}</li>
                                        <div style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
                                            <input type='checkbox' style={{ marginLeft: '4px' }} />
                                        </div>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Box>
                </Box>
            </Paper>
        </>
    );
}
