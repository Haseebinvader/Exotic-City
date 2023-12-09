import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Filter() {
    // States
    const [isparent, setIsParent] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTcwMjExNDc3OCwibmJmIjoxNzAyMTE0Nzc4LCJleHAiOjE3MDIxMTg2NzgsImFpbyI6IkUyVmdZSGd0Wk05eFN2NDlRL1F5RjUwZHU1K0dBUUE9IiwiYXBwaWQiOiJhODM5MWI5Yy00NTgzLTQ2YzMtYTQ0OS1hMGRlNmUxOTkxNjEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI1ZmNkNzk2Yy1kNWE0LTRiYzAtOWRkMS02YmQyMmZhNWFlZjUiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiNWZjZDc5NmMtZDVhNC00YmMwLTlkZDEtNmJkMjJmYTVhZWY1IiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoiQm9fMkVGVW0zVWE1Y3lGUW9md0xBQSIsInZlciI6IjEuMCJ9.Vw35Ese_pAbpCXkprfckFAvhlYnZnbcHRMTJRqqk7MyH_CW3QHSH8s00yLonDgCsCSmCoi-E9RHp5HhUaOCMh81V8q3AxDTdrMkbH-8gtP2qyIiRPggx4q49BiVMWo8SqTQ8y935mZqac4uAS_2me1pOBU9PuEmptgd9TJexwGCbg2iDgeCdntFUd7uJvzrWMf-vv-lKQqDedbyChm4AtOjLmw2yMmPRB9xhMC3Kv01n7vRKOUXWD9KGF2Ewn0QUwoX0lYfMOT9bu-HfawlAg5g3VQDjajwJdASkhrBsSbKY6l_p_ECJt0ZrtRxIdAXh-Ki1We1NS6SMhaMdnkq30g';

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

    console.log("parent", isparent);
    console.log("subCategories", subCategories);


    return (
        <Paper sx={{ width: { xs: '16rem', md: '16rem', lg: '16rem' }, mr: '1rem', ml: { xs: '0.5rem', md: '0.5rem', lg: '1rem' } }}>
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
                    {/* <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '3px', overflowY: 'scroll', height: '50vh' }}>
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
                    </div> */}
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
