/* eslint-disable react/prop-types */
import SearchIcon from '@mui/icons-material/Search';
import { Box, Paper, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Search = ({ handleSearch }) => {
    // States
    const [query, setQuery] = useState('');
    const [lastUrlSegment, setLastUrlSegment] = useState('');
    const location = useLocation();

    // Functions
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
        handleSearch(inputValue);
    };

    useEffect(() => {
        const currentUrl = location.pathname;
        const urlSegments = currentUrl.split('/');
        const currentLastUrlSegment = urlSegments[urlSegments.length - 1];
        setLastUrlSegment(currentLastUrlSegment);
        // Fetch data
    }, [location.pathname]);

    return (
        <>
            <div style={{ paddingLeft: '1rem', display: 'flex', alignItems: 'center',paddingTop: '18px' }}>
                <Paper sx={{ padding: '5px', marginTop: '10px', py: '20px' }} elevation={2}>
                    <div>
                        <h1>Search</h1>
                        <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange' }}></Box>
                        <TextField
                            sx={{ marginTop: '10px' }}
                            id="standard-basic"
                            label="Search products"
                            variant="outlined"
                            htmlFor="search"
                            size='small'
                            fullWidth
                            value={query}
                            onChange={handleInputChange}
                            InputProps={{
                                endAdornment: <SearchIcon style={{ cursor: 'pointer' }} onClick={() => handleSearch(query)} />,
                            }}
                        />
                    </div>
                </Paper>
                <Paper sx={{ padding: '5px', marginTop: '10px', py: '20px', ml: '1rem', height: '9rem', width: '76vw' }} elevation={2}>
                    <div style={{ textAlign: 'center', paddingTop: '2rem'}}>
                        <Typography variant='h6' sx={{ fontWeight: '600', paddingLeft: '2rem', color: 'grey' }}> Products → {lastUrlSegment}</Typography>
                    </div>
                </Paper>

            </div>
        </>
    );
};

export default Search;
