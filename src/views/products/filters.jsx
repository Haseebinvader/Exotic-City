import { Box, Paper, Typography } from '@mui/material';
// import { categories, sub_categories, brand } from '../../Data/Project_Data';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Filter() {
    const [data, setData] = useState([]);

    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTcwMTA4NTc0NCwibmJmIjoxNzAxMDg1NzQ0LCJleHAiOjE3MDEwODk2NDQsImFpbyI6IkUyVmdZRGc0L2VwV28zT1RQeGRuUFg4Nmo3WDRIZ0E9IiwiYXBwaWQiOiJhODM5MWI5Yy00NTgzLTQ2YzMtYTQ0OS1hMGRlNmUxOTkxNjEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI1ZmNkNzk2Yy1kNWE0LTRiYzAtOWRkMS02YmQyMmZhNWFlZjUiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiNWZjZDc5NmMtZDVhNC00YmMwLTlkZDEtNmJkMjJmYTVhZWY1IiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoiV0VuU25lUURjMHVYU1N0WUs0MUFBZyIsInZlciI6IjEuMCJ9.H-SoS-5D4NZRnNJn_p-RbAJrphQR0-7eNbBwvD4DgygBcgm9FUKMiwjd9poHpCDxJCXlyt_Yy3glni6MnpL_1wec_KGoDe0zCnQIB8lNDjmeD29FRkvCOSZMPBQb8HN0toOn0NjP_dBbi_2kdwbFycAX6sLFGdtz6-M6HA8J6kfHRG4YRgwqIyqtIXcv9zpeeQPRgiPPCfZMLcyVIYWUBS27X9njtvLewcFUieYCu4o3_WuPGPqlfcYOif9HVh88BVQpo5w9EY6fHTTAj5aszMEgcYzJTpVziHh3H0WvFsBU1kVRjhHzk6bGj6iMOiFyfHrn-2hJpknbVTtY54tNcQ';

    const fetchData = async () => {
        try {
            const res = await axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox1/ODataV4/Company(\'My%20Company\')/ItemApi', {
                headers: { "Authorization": `Bearer ${accessToken}` },
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
                                    <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
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
                        <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '3px', overflowY: 'scroll', height: '50vh' }}>
                            {[...new Set(data.map(item => item.ItemSubCategoryCode))].map((uniqueItemSubCategoryCode) => (
                                <div key={uniqueItemSubCategoryCode}>
                                    <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', width: '100%' }}>
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
                        <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '3px', overflowY: 'scroll', height: '50vh' }}>
                            {[...new Set(data.map(item => item.Brand))].map((uniqueBrand) => (
                                <div key={uniqueBrand}>
                                    <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', width: '100%' }}>
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
