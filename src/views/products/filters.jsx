import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Grid, Hidden, IconButton, TextField, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import SearchIcon from '@mui/icons-material/Search';
import { categories, sub_categories, brand } from '../../Data/Project_Data';


// eslint-disable-next-line react/prop-types
export default function Filter({ handleSearch }) {
    // States
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => { setPage(value); };
    const [category, setCategory] = useState('Category');
    const [subCategory, setSubCategory] = useState('Sub Category');
    const [selectedBrand, setSelectedBrand] = useState('Brand');
    const [query, setQuery] = useState('');

    // Functions

    const search = () => {
        handleSearch(query);
    };
    return (
        <Fragment>
            <Grid container>
                <Hidden mdDown>
                    <Grid item>
                        <Box sx={{ ml: '4rem', mt: '1rem' }}>
                            <Typography sx={{ textAlign: 'left', fontSize: '25px', fontWeight: '600' }}>Search</Typography>
                            <Box sx={{ width: '90vw', height: '2px', backgroundColor: 'orange', margin: '8px 0' }} ></Box>
                        </Box>
                        <Box sx={{ ml: '4rem', mt: '1rem' }}>
                            <TextField
                                sx={{ backgroundColor: '#F5F5F5', border: 'none', width: 'auto' }}
                                size='small'
                                variant="outlined"
                                placeholder="Search Products"
                                InputProps={{
                                    endAdornment: (
                                        <IconButton
                                            sx={{ backgroundColor: '#E6E6E6', color: '#fff' }}
                                            onClick={search}
                                        >
                                            <SearchIcon />
                                        </IconButton>
                                    ),
                                }}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </Box>
                    </Grid>
                </Hidden >
                <Grid item>
                    <Box sx={{ ml: '4rem', mt: '1rem' }}>
                        <Typography sx={{ textAlign: 'left', fontSize: '25px', fontWeight: '600' }}>Order Before</Typography>
                    </Box>
                </Grid>
                <Box sx={{ width: '90vw', height: '2px', backgroundColor: 'orange', margin: '8px 0', ml: '4rem', mt: '1rem', mr: '4rem' }} ></Box>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', mt: '1.5rem' }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '2%', }} >
                        <Grid item sx={{ display: 'flex', gap: '1rem' }}>
                            <Box>
                                <FormControl >
                                    <Select size='small' value={category} onChange={(e) => setCategory(e.target.value)} sx={{ backgroundColor: 'orange', color: '#fff', width: 'auto' }}>
                                        {categories.map((name) => (<MenuItem key={name} value={name} >{name}</MenuItem>))}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl>
                                    <Select size='small' value={subCategory} onChange={(e) => setSubCategory(e.target.value)} sx={{ backgroundColor: 'orange', color: '#fff', width: 'auto' }}>
                                        {sub_categories.map((name) => (<MenuItem key={name} value={name}>{name}</MenuItem>))}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl >
                                    <Select size='small' value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} sx={{ backgroundColor: 'orange', color: '#fff', width: 'auto' }}>
                                        {brand.map((name) => (<MenuItem key={name} value={name}>{name}</MenuItem>))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                    </Grid>
                    <Hidden lgDown>
                        <Grid item>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography> Per Page: <span style={{ border: '2px solid #000', padding: '5px' }}>{page}</span> </Typography>
                                <Pagination count={10} page={page} onChange={handleChange} />
                            </Box>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid >
        </Fragment >
    );
}
