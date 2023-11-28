import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Filter() {
    // States
    const [data, setData] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTcwMTE5NTk2OSwibmJmIjoxNzAxMTk1OTY5LCJleHAiOjE3MDExOTk4NjksImFpbyI6IkUyVmdZSEIrMlpPdzdzekZweit0Znp5N0tTSzlGd0E9IiwiYXBwaWQiOiJhODM5MWI5Yy00NTgzLTQ2YzMtYTQ0OS1hMGRlNmUxOTkxNjEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI1ZmNkNzk2Yy1kNWE0LTRiYzAtOWRkMS02YmQyMmZhNWFlZjUiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiNWZjZDc5NmMtZDVhNC00YmMwLTlkZDEtNmJkMjJmYTVhZWY1IiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoiclJaVFpRbmY3MC0tZXloQzVFT0NBUSIsInZlciI6IjEuMCJ9.haqMd6LaLJ7x_rkotxyzdreuo0mNm2DLpRZMGWpT3gySuQmz5EqDlz7GvoOjCn-r9xAKybmw87Jn-qwvNNqc9pkTwIj-lhp_Cu9XtZMZ4kSqrbAtegCd6CqTpsS6wCjSmzKxPvG-wHC0koAIU08yQPyGdIWBgbXpc80lswmxWo7JyerDmR1PTZZ6ulRQWJ2NDABGoiNFJWgUOwN0az3n9x3z858RIgsKWViWgCCQ3NWUlSDRR0QzZT-JDdpi2rtXK64r4eCGdEcNr9Gm3VBImtpbXEvR4CPpIKEaf_zrKvf9MzcKapZUNZ6FshwXVQvPO7AgPcrFHs3Be_Fo60ddHA';
    // Functions
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
    useEffect(() => { fetchData(); }, []);

    const handleCategoryChange = (category) => {
        // Check if the category is already selected
        if (selectedCategories.includes(category)) {
            // If selected, remove it from the list
            setSelectedCategories((prevCategories) =>
                prevCategories.filter((prevCategory) => prevCategory !== category)
            );
        } else {
            // If not selected, add it to the list
            setSelectedCategories((prevCategories) => [...prevCategories, category]);
        }
    };

    const filteredSubCategories = data
        .filter((item) => selectedCategories.length === 0 || selectedCategories.includes(item.ParentCategory))
        .map((item) => item.ItemSubCategoryCode);

    const filteredBrands = data
        .filter((item) => selectedCategories.length === 0 || selectedCategories.includes(item.ParentCategory))
        .map((item) => item.Brand);

    return (
        <Paper sx={{ width: { xs: '16rem', md: '16rem', lg: '16rem' }, mr: '1rem', ml: { xs: '0.5rem', md: '0.5rem', lg: '1rem' } }}>
            <Box sx={{ textAlign: 'center', border: '1px solid #f2f2f2', backgroundColor: '#fff', p: '2rem' }}>
                <Box>
                    <Typography variant='h6' sx={{ fontWeight: '600' }}> Categories </Typography>
                    <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem', mr: '4rem' }}></Box>
                    <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '3px' }}>
                        {[...new Set(data.map(item => item.ParentCategory))].map((uniqueParentCategory) => (
                            <div key={uniqueParentCategory} >
                                <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                    <li style={{ marginRight: '8px', textAlign: 'left' }}>
                                        {uniqueParentCategory}
                                    </li>
                                    <div style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
                                        <input style={{ marginLeft: '4px' }} type='checkbox' checked={selectedCategories.includes(uniqueParentCategory)}
                                            onChange={() => handleCategoryChange(uniqueParentCategory)} />
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
                        {[...new Set(filteredSubCategories)].map((uniqueItemSubCategoryCode) => (
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
                    </div>
                </Box>
            </Box>
        </Paper>
    );
}
