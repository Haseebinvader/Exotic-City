// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import { Box, Grid, Hidden, IconButton, TextField, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
// import Pagination from '@mui/material/Pagination';
import SearchIcon from '@mui/icons-material/Search';
import { categories, sub_categories, brand, } from '../../Data/Project_Data';


// eslint-disable-next-line react/prop-types
export default function Filter({ handleSearch }) {
    // States
    // const [page, setPage] = useState(1);
    // const handleChange = (event, value) => { setPage(value); };
    // const [category, setCategory] = useState('Category');
    // const [subCategory, setSubCategory] = useState('Sub Category');
    // const [selectedBrand, setSelectedBrand] = useState('Brand');
    const [query, setQuery] = useState('');

    // Functions
    const search = () => { handleSearch(query) };
    // const handleCategoryChange = (e) => { setCategory(e.target.value); setSubCategory('Sub Category'); };
    return (
        <Fragment>
            <Grid container sx={{}}>
                <Hidden mdDown>
                    <Grid item>
                        <Box sx={{ ml: '4rem', mt: '1rem' }}>
                            <Typography sx={{ textAlign: 'left', fontSize: '25px', fontWeight: '600' }}>Search</Typography>
                            <Box sx={{ width: '90vw', height: '2px', backgroundColor: 'orange', margin: '8px 0' }} ></Box>
                        </Box>
                        <Box sx={{ ml: '4rem', mt: '1rem' }}>
                            <TextField sx={{ backgroundColor: '#F5F5F5', width: '100%' }} size='small' variant="outlined" placeholder="Search Products"
                                InputProps={{
                                    endAdornment: (<IconButton sx={{ backgroundColor: '#E6E6E6', color: '#fff' }} onClick={search} > <SearchIcon />
                                    </IconButton>)
                                }} value={query} onChange={(e) => setQuery(e.target.value)} />
                        </Box>
                    </Grid>
                </Hidden >
                {/* <Grid item>
                    <Box sx={{ ml: '4rem', mt: '1rem' }}>
                        <Typography sx={{ textAlign: 'left', fontSize: '25px', fontWeight: '600' }}>Order Before</Typography>
                    </Box>
                </Grid> */}
                {/* <Box sx={{ width: '90vw', height: '2px', backgroundColor: 'orange', margin: '8px 0', ml: '4rem', mt: '1rem', mr: '4rem' }} ></Box> */}

                <Grid sx={{ textAlign: 'center', width: '100%', border: '1px solid #f2f2f2', ml: '3.7rem', backgroundColor: '#fff', mt: '2rem' }} xs={12} md={8} lg={12}>
                    <Box>
                        <Typography variant='h6' sx={{ fontWeight: '600' }}>Categories</Typography>
                        <Box sx={{ width: '9rem', height: '2px', backgroundColor: 'orange', margin: '8px 0', ml: '4rem', mt: '1rem', mr: '4rem' }} ></Box>
                        {categories.map((item) => (
                            <div key={item}>
                                <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '6rem', marginLeft: '6rem' }}>
                                    <li style={{ marginRight: '8px', textAlign: 'left'  }}>{item}</li>
                                    <div style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
                                        <input type="checkbox" style={{ marginLeft: '4px' }} />
                                    </div>
                                </ul>
                            </div>
                        ))}

                    </Box>
                    <Box>
                        <Typography variant='h6' sx={{ fontWeight: '600' }}>Sub Categories</Typography>
                        <Box sx={{ width: '9rem', height: '2px', backgroundColor: 'orange', margin: '8px 0', ml: '4rem', mt: '1rem', mr: '4rem' }} ></Box>
                        {sub_categories.map((item) => (
                            <div key={item}>
                                <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '6rem', marginLeft: '6rem' }}>
                                    <li style={{ marginRight: '8px', textAlign: 'left'  }}>{item}</li>
                                    <div style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
                                        <input type="checkbox" style={{ marginLeft: '4px' }} />
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </Box>
                    <Box>
                        <Typography variant='h6' sx={{ fontWeight: '600' }}>Brands</Typography>
                        <Box sx={{ width: '9rem', height: '2px', backgroundColor: 'orange', margin: '8px 0', ml: '4rem', mt: '1rem', mr: '4rem' }} ></Box>
                        {brand.map((item) => (
                            <div key={item}>
                                <ul style={{ listStyle: 'none', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '6rem', marginLeft: '6rem' }}>
                                    <li style={{ marginRight: '8px', textAlign: 'left' }}>{item}</li>
                                    <div style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
                                        <input type="checkbox" style={{ marginLeft: '4px' }} />
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </Box>
                </Grid>
            </Grid >
        </Fragment >
    );
}
