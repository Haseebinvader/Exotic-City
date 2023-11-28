/* eslint-disable react/prop-types */
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Box, Paper, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Search = ({ handleSearch}) => {
    // States
    const [query, setQuery] = useState('');
    const [productName, setProductName] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [lastUrlSegment, setLastUrlSegment] = useState('');
    const [isAdvancedSearchOpen, setAdvancedSearchOpen] = useState(false);
    const location = useLocation();
    // Functions
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);
    };

    const handleAdvancedSearch = () => {
        setAdvancedSearchOpen(true);
    };

    const handleCloseAdvancedSearch = () => {
        setAdvancedSearchOpen(false);
    };

    const handleApplyAdvancedSearch = () => {
        const advancedSearchCriteria = {
            name: productName.toLowerCase(),
            minPrice,
            maxPrice,
        };
        console.log("Advanced Search Criteria:", advancedSearchCriteria);
        handleSearch(query.toLowerCase(), advancedSearchCriteria);
        handleCloseAdvancedSearch();
    };



    useEffect(() => {
        const currentUrl = location.pathname;
        const urlSegments = currentUrl.split('/');
        const currentLastUrlSegment = urlSegments[urlSegments.length - 1];
        setLastUrlSegment(currentLastUrlSegment);
    }, [location.pathname]);
    useEffect(() => {
        handleSearch(
            query.toLowerCase(),
            { name: productName.toLowerCase(), minPrice, maxPrice }
        );
    }, [query, productName, minPrice, maxPrice,handleSearch]);

    return (
        <>
            <div style={{ paddingLeft: '1rem', display: 'flex', alignItems: 'center', paddingTop: '18px' }}>
                <Paper sx={{ padding: '5px', marginTop: '10px', py: '20px' }} elevation={2}>
                    <div>
                        <h1>Search</h1>
                        <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange' }}></Box>
                        <TextField
                            sx={{ marginTop: '10px', width: '16vw' }}
                            id="standard-basic"
                            label="Search products"
                            variant="outlined"
                            htmlFor="search"
                            size='small'
                            fullWidth
                            value={query}
                            onChange={handleInputChange}
                            InputProps={{
                                endAdornment: (
                                    <>
                                        <SearchIcon style={{ cursor: 'pointer' }} onClick={() => handleSearch(query.toLowerCase(), )} />
                                        <FilterListIcon style={{ cursor: 'pointer', marginLeft: '5px' }} onClick={handleAdvancedSearch} />
                                    </>
                                ),
                            }}
                        />
                    </div>
                </Paper>
                <Paper sx={{ padding: '5px', marginTop: '10px', py: '20px', ml: '1rem', height: '9rem', width: '76vw' }} elevation={2}>
                    <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
                        <Typography variant='h6' sx={{ fontWeight: '600', paddingLeft: '2rem', color: 'grey' }}> Products → {lastUrlSegment}</Typography>
                    </div>
                </Paper>
            </div>

            {/* Advanced Search Dialog */}
            <Dialog open={isAdvancedSearchOpen} onClose={handleCloseAdvancedSearch}>
                <DialogTitle>Advanced Search</DialogTitle>
                <DialogContent>
                    {/* Add input fields for advanced search criteria (e.g., name and price) */}
                    <TextField
                        label="Product Name"
                        variant="outlined"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Minimum Price"
                        variant="outlined"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Maximum Price"
                        variant="outlined"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAdvancedSearch}>Cancel</Button>
                    <Button onClick={handleApplyAdvancedSearch}>Apply</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Search;
