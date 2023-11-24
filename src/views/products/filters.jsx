/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Box, Grid, Hidden, IconButton, Paper, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { categories, sub_categories, brand } from '../../Data/Project_Data';

export default function Filter({ handleSearch }) {
    // States
    const [query, setQuery] = useState('');

    // Functions
    const search = () => {
        handleSearch(query);
    };

    return (
        <>
            <Paper sx={{ width: { xs: '12rem', md: '16rem', lg: '16rem' }, mr: '1rem', ml: { xs: '0.5rem', md: '0.5rem', lg: '1rem' } }}>
                <Box sx={{ textAlign: 'center', border: '1px solid #f2f2f2', backgroundColor: '#fff', p: '2rem' }}>
                    <Box>
                        <Typography variant='h6' sx={{ fontWeight: '600' }}>
                            Categories
                        </Typography>
                        <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem', mr: '4rem' }}></Box>
                        {categories.map((item) => (
                            <div key={item}>
                                <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
                                    <li style={{ marginRight: '8px', textAlign: 'left' }}>{item}</li>
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
                        {sub_categories.map((item) => (
                            <div key={item}>
                                <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
                                    <li style={{ marginRight: '8px', textAlign: 'left' }}>{item}</li>
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
                        {brand.map((item) => (
                            <div key={item}>
                                <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
                                    <li style={{ marginRight: '8px', textAlign: 'left' }}>{item}</li>
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
