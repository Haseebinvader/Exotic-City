import { Box, Paper, Typography } from '@mui/material';
// import { categories, sub_categories, brand } from '../../Data/Project_Data';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Filter() {
    const [data, setData] = useState([]);

    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTcwMDk4ODQxMywibmJmIjoxNzAwOTg4NDEzLCJleHAiOjE3MDA5OTIzMTMsImFpbyI6IkUyVmdZRGc0L2VwV28zT1RQeGRuUFg4Nmo3WDRIZ0E9IiwiYXBwaWQiOiJhODM5MWI5Yy00NTgzLTQ2YzMtYTQ0OS1hMGRlNmUxOTkxNjEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI1ZmNkNzk2Yy1kNWE0LTRiYzAtOWRkMS02YmQyMmZhNWFlZjUiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiNWZjZDc5NmMtZDVhNC00YmMwLTlkZDEtNmJkMjJmYTVhZWY1IiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoic0ZDQUJSNGREa2UxZ0NmcGtXMjVBUSIsInZlciI6IjEuMCJ9.PHZrR5Wxic3w-pMkBrvfViBs-2VysL9FY_sBatr7pLclH4qjdsbzUYEqOkNvECzWsRd_09Qb3462wtdM2uSCo5b_45N2IKJ7hfTLTfHSyENQTTODNMp2U8eRd_slcLXUqnucUjg-Vb66YpST_n4fYOFSIac5LuVkU4gB7tG73NY0IVBRVLj1f0sYVlz6HtyOXjJEiLkduyVNf4NGiKZ4PT8F8S7aaePhE14HSr-17PRw9IYldhDSCzY8jrNXnyQNicRi8xpcI1IT4z_L1vQO7U2yxlAntymROxl9OMBYPuwPQMGRCx7lJU-66Q-jtCQj4MEv4-DrArtOQrMPC3zCBA';

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
                        <Typography variant='h6' sx={{ fontWeight: '600' }}>
                            Categories
                        </Typography>
                        <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem', mr: '4rem' }}></Box>
                        {[...new Set(data.map(item => item.ParentCategory))].map((uniqueParentCategory) => (
                            <div key={uniqueParentCategory}>
                                <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
                                    <li style={{ marginRight: '8px', textAlign: 'left' }}>{uniqueParentCategory}</li>
                                    <div style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
                                        <input type='checkbox' style={{ marginLeft: '4px' }} />
                                    </div>
                                </ul>
                            </div>
                        ))}

                    </Box>
                    <Box>
                        <Typography variant='h6' sx={{ fontWeight: '600' }}>
                            Sub Categories
                        </Typography>
                        <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem', mr: '4rem' }}></Box>
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

                    </Box>
                    <Box>
                        <Typography variant='h6' sx={{ fontWeight: '600' }}>
                            Brands
                        </Typography>
                        <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem', mr: '4rem' }}></Box>
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
                    </Box>
                </Box>
            </Paper>
        </>
        // <Grid container>
        //     <Hidden mdDown>
        //         <Grid item xs={4} md={4} lg={12} sx={{ width: { xs: 'auto' } }}>
        //             <Box sx={{ ml: { md: '4rem' }, mt: '1rem' }}>
        //                 <Typography sx={{ textAlign: 'left', fontSize: '25px', fontWeight: '600' }}>Search</Typography>
        //                 <Box sx={{ width: '90vw', height: '2px', backgroundColor: 'orange', margin: '8px 0' }}></Box>
        //             </Box>
        //             <Box sx={{ ml: { md: '4rem', sm: '4rem', lg: '4rem' }, mt: '1rem' }}>
        //                 <TextField
        //                     sx={{ backgroundColor: '#F5F5F5', width: '100%' }}
        //                     size='small'
        //                     variant='outlined'
        //                     placeholder='Search Products'
        //                     InputProps={{
        //                         endAdornment: (
        //                             <IconButton sx={{ backgroundColor: '#E6E6E6', color: '#fff' }} onClick={search}>
        //                                 <SearchIcon />
        //                             </IconButton>
        //                         ),
        //                     }}
        //                     value={query}
        //                     onChange={(e) => setQuery(e.target.value)}
        //                 />
        //             </Box>
        //         </Grid>
        //     </Hidden>
        //     <Grid item xs={12} md={8} lg={12} sx={{ ml: '2rem', width: '18rem' }}>
        //         <Box sx={{ textAlign: 'center', border: '1px solid #f2f2f2', backgroundColor: '#fff', mt: { md: '2rem' } }}>
        //             <Box>
        //                 <Typography variant='h6' sx={{ fontWeight: '600' }}>
        //                     Categories
        //                 </Typography>
        //                 <Box sx={{ width: '9rem', height: '2px', backgroundColor: 'orange', margin: '8px 0', ml: '4rem', mt: '1rem', mr: '4rem' }}></Box>
        //                 {categories.map((item) => (
        //                     <div key={item}>
        //                         <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '6rem', marginLeft: '6rem' }}>
        //                             <li style={{ marginRight: '8px', textAlign: 'left' }}>{item}</li>
        //                             <div style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
        //                                 <input type='checkbox' style={{ marginLeft: '4px' }} />
        //                             </div>
        //                         </ul>
        //                     </div>
        //                 ))}
        //             </Box>
        //             <Box>
        //                 <Typography variant='h6' sx={{ fontWeight: '600' }}>
        //                     Sub Categories
        //                 </Typography>
        //                 <Box sx={{ width: '9rem', height: '2px', backgroundColor: 'orange', margin: '8px 0', ml: '4rem', mt: '1rem', mr: '4rem' }}></Box>
        //                 {sub_categories.map((item) => (
        //                     <div key={item}>
        //                         <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '6rem', marginLeft: '6rem' }}>
        //                             <li style={{ marginRight: '8px', textAlign: 'left' }}>{item}</li>
        //                             <div style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
        //                                 <input type='checkbox' style={{ marginLeft: '4px' }} />
        //                             </div>
        //                         </ul>
        //                     </div>
        //                 ))}
        //             </Box>
        //             <Box>
        //                 <Typography variant='h6' sx={{ fontWeight: '600' }}>
        //                     Brands
        //                 </Typography>
        //                 <Box sx={{ width: '9rem', height: '2px', backgroundColor: 'orange', margin: '8px 0', ml: '4rem', mt: '1rem', mr: '4rem' }}></Box>
        //                 {brand.map((item) => (
        //                     <div key={item}>
        //                         <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '6rem', marginLeft: '6rem' }}>
        //                             <li style={{ marginRight: '8px', textAlign: 'left' }}>{item}</li>
        //                             <div style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
        //                                 <input type='checkbox' style={{ marginLeft: '4px' }} />
        //                             </div>
        //                         </ul>
        //                     </div>
        //                 ))}
        //             </Box>
        //         </Box>
        //     </Grid>
        // </Grid>
    );
}
