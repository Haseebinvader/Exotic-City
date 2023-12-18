import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Filter() {
    // States
    const [isparent, setIsParent] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTcwMjI5MTMzOCwibmJmIjoxNzAyMjkxMzM4LCJleHAiOjE3MDIyOTUyMzgsImFpbyI6IkUyVmdZSERJZjZQeDNmdnZmcDN0UVJZem9sMVRBQT09IiwiYXBwaWQiOiJhODM5MWI5Yy00NTgzLTQ2YzMtYTQ0OS1hMGRlNmUxOTkxNjEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI1ZmNkNzk2Yy1kNWE0LTRiYzAtOWRkMS02YmQyMmZhNWFlZjUiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiNWZjZDc5NmMtZDVhNC00YmMwLTlkZDEtNmJkMjJmYTVhZWY1IiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoiRnM4bTl2Wno4a2F5M0pVWEhQRkRBQSIsInZlciI6IjEuMCJ9.SkpGKaSRTGdhOQwnSn9soPk0vBaXjoxtMTfosJ-Q2lFo3BXVbVKhuoDEFLKwHiJDr5zhw7RiKm9mvJOFeGUKvhQlf65JSW8yIvrZTTqAYMmOyKLfkpZepjx0JwCAjSChpeywpIrSUT7ZLgCmfwWBtFgumcQXNfgixbZXCQMSvokAfatn2qQcLaJaOVDn5ejCugyQNxt8SKTz1Ap2KwqyRhTy2UnumUWtk0hbAESJRe3RSAXg2uhLmieHjWOTlI8ZHpKuiXd_xKV_ourQtv7scHxVYMwZKTQKpR4JYYZahKGQicxismL5G0SleobyvXypbwkK0fImoNayHtrNVU2dKw';

    // Functions
    const fetchData = async () => {
        try {
            // First API call
            const parentRes = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox1/ODataV4/Company('My%20Company')/parentcategorylist`, {
                headers: { "Authorization": `Bearer ${accessToken}` },
            });
            setIsParent(parentRes.data.value);

            // Second API call
            const subCategoryRes = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox1/ODataV4/Company('My%20Company')/sublist`, {
                headers: { "Authorization": `Bearer ${accessToken}` },
            });
            setSubCategories(subCategoryRes.data.value);

        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Paper elevation={3} sx={{ height: '100vh', m: '1rem', p: '10px' }}>
            <Box sx={{ textAlign: 'center', border: '1px solid #f2f2f2', backgroundColor: '#fff', p: '2rem' }}>
                <Box>
                    <Typography variant='h6' sx={{ fontWeight: '600' }}> Categories </Typography>
                    <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem', mr: '4rem' }}></Box>
                    <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '3px' }}>
                        {isparent.map((item, index) => (
                            <div key={index}>
                                <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', width: '100%' }}>
                                    <li style={{ marginRight: '8px', textAlign: 'left' }}>{item.Description.toUpperCase()}</li>
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
                    {/* Subcategories */}
                    <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '3px', overflowY: 'scroll', height: '50vh' }}>
                        {subCategories.map((item, index) => (
                            <div key={index}>
                                <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', width: '100%' }}>
                                    <li style={{ marginRight: '8px', textAlign: 'left' }}>{item.Item_Sub_category_Code}</li>
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
                    {/* <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '3px', overflowY: 'scroll', height: '50vh' }}>
                        {[...new Set(filteredBrands)].map((uniqueBrand) => (
                            <div key={uniqueBrand}>
                                <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', width: '100%' }}>
                                    <li style={{ marginRight: '8px', textAlign: 'left' }}>{uniqueBrand}</li>
                                    <div style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
                                        <input type='checkbox' style={{ marginLeft: '4px' }} />
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </div> */}
                </Box>
            </Box>
        </Paper>
    );
}
