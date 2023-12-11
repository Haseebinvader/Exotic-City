/* eslint-disable react/prop-types */
import SearchIcon from '@mui/icons-material/Search';
import { Box, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
// import { useLocation } from 'react-router-dom';

const Search = ({ handleSearch }) => {
    // States
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => { const inputValue = e.target.value; setQuery(inputValue); };


    return (
        <>
            <div style={{ paddingLeft: '1rem', display: 'flex', alignItems: 'center', paddingTop: '18px' }}>
                <Paper sx={{ padding: '5px', marginTop: '10px', py: '20px' }} elevation={2}>
                    <div>
                        <h1>Search</h1>
                        <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange' }}></Box>
                        <TextField sx={{ marginTop: '10px', width: '16vw' }} id="standard-basic" label="Search products" variant="outlined" htmlFor="search" size='small' fullWidth value={query} onChange={handleInputChange}
                            InputProps={{
                                endAdornment: (
                                    <>
                                        <SearchIcon style={{ cursor: 'pointer' }} onClick={() => handleSearch(query.toLowerCase(),)} />
                                    </>
                                ),
                            }}
                        />
                    </div>
                </Paper>
                <Paper sx={{ padding: '5px', marginTop: '10px', py: '20px', ml: '1rem', height: '9rem', width: 'auto' }} elevation={2}>
                    <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
                        <Typography variant='h6' sx={{ fontWeight: '600', paddingLeft: '2rem', color: 'grey' }}>EXOTIC CITY - AFRICAN & ASIAN EXCLUSIVE PRODUCTS</Typography>
                    </div>
                </Paper>
            </div>

        </>
    );
};

export default Search;
