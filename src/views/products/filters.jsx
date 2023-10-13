import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Grid, IconButton, TextField, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import SearchIcon from '@mui/icons-material/Search';

// Arrays
const categories = ['Category', 'Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander', 'Carlos Abbott'];
const sub_categories = ['Sub Category', 'Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander', 'Carlos Abbott'];
const brand = ['Brand', 'Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander', 'Carlos Abbott'];

export default function SingleSelect() {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const [category, setCategory] = useState('Category');
    const [subCategory, setSubCategory] = useState('Sub Category');
    const [selectedBrand, setSelectedBrand] = useState('Brand');

    return (
        <Fragment>
            <Grid container>
                <Grid item>
                    <Box sx={{ ml: '4rem', mt: '1rem' }}>
                        <Typography sx={{ textAlign: 'left', fontSize: '25px', fontWeight: '600' }}>Search</Typography>
                        <Box sx={{ width: '86rem', height: '2px', backgroundColor: 'orange', margin: '8px 0' }} ></Box>
                        <TextField sx={{ backgroundColor: '#F5F5F5', border: 'none', width: '100%' }} size='small' variant="outlined" placeholder="Search Products"
                            InputProps={{ endAdornment: (<IconButton sx={{ backgroundColor: '#E6E6E6', color: '#fff' }}><SearchIcon /></IconButton>) }} />
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{ ml: '4rem', mt: '1rem' }}>
                        <Typography sx={{ textAlign: 'left', fontSize: '25px', fontWeight: '600' }}>Order Before</Typography>
                        <Box sx={{ width: '86rem ', height: '2px', backgroundColor: 'orange', margin: '8px 0' }} ></Box>
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                        {/* Categories Dropwosn */}
                        <FormControl sx={{ ml: 8, width: '20%', mt: 3 }}>
                            <Select size='small' value={category} onChange={(e) => setCategory(e.target.value)} sx={{ backgroundColor: 'orange', color: '#fff' }}>
                                {categories.map((name) => (<MenuItem key={name} value={name} >{name}</MenuItem>))}
                            </Select>
                        </FormControl>
                        {/* Sub Categories Dropdown */}
                        <FormControl sx={{ ml: 2, width: 300, mt: 3 }}>
                            <Select size='small' value={subCategory} onChange={(e) => setSubCategory(e.target.value)} sx={{ backgroundColor: 'orange', color: '#fff' }}>
                                {sub_categories.map((name) => (<MenuItem key={name} value={name}>{name}</MenuItem>))}
                            </Select>
                        </FormControl>
                        {/* Brand Dropdown */}
                        <FormControl sx={{ ml: 2, width: 300, mt: 3 }}>
                            <Select size='small' value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} sx={{ backgroundColor: 'orange', color: '#fff' }}>
                                {brand.map((name) => (<MenuItem key={name} value={name}>{name}</MenuItem>))}
                            </Select>
                        </FormControl>
                        {/* Pagination */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: '1.5rem', ml: '6rem' }}>
                            <Typography width={'8rem'}> Per Page: <span style={{ border: '2px solid #000', padding: '10px' }}>{page}</span> </Typography>
                            <Pagination sx={{ width: '30rem' }} count={10} page={page} onChange={handleChange} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Fragment>
    );
}
