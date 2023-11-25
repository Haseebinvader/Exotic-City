/* eslint-disable react/prop-types */
import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField } from '@mui/material';
import { useState } from 'react';

const Search = ({ handleSearch }) => {
    // States
    const [query, setQuery] = useState('');

    // Functions
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
        handleSearch(inputValue);
    };

    return (
        <>
            <div style={{ paddingLeft: '1rem' }}>
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
        </>
    );
};

export default Search;
