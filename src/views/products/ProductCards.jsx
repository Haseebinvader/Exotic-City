/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Card, CardContent, Grid, Typography, Button, CircularProgress } from "@mui/material";
import imaged from '../../assets/jpeg/olive.jpg';
import { useContext, useEffect } from 'react';
import { Context } from "../../App";
const ProductCards = () => {
    // Context 
    const [counts, setCounts, data, setData, loading, setLoading, itemsPerPage, setItemsPerPage, currentPage, setCurrentPage] = useContext(Context)
    // UseEffects
    useEffect(() => {
        // Load counts from localStorage
        const storedCounts = JSON.parse(localStorage.getItem('itemCounts')) || {};
        setCounts(storedCounts);

        // Load itemsPerPage and currentPage from localStorage
        const storedItemsPerPage = parseInt(localStorage.getItem('itemsPerPage'), 10) || 10;
        setItemsPerPage(storedItemsPerPage);

        const storedCurrentPage = parseInt(localStorage.getItem('currentPage'), 10) || 1;
        setCurrentPage(storedCurrentPage);

        // Initialize counts if not present in localStorage
        const initialCounts = data.reduce((acc, _, index) => {
            acc[index] = 0;
            return acc;
        }, {});

        setCounts(initialCounts);
    }, [data]);
    useEffect(() => {
        // Load counts from localStorage based on the current page
        const storedCounts = JSON.parse(localStorage.getItem(`itemCountsPage${currentPage}`)) || {};
        setCounts(storedCounts);

        // ... rest of your useEffect logic
    }, [currentPage, data]);

    // Functions
    const handleIncrement = (index) => {
        setCounts((prevCounts) => {
            const currentCount = prevCounts[index] || 0;
            const newCounts = { ...prevCounts, [index]: currentCount + 1 };

            // Save counts to localStorage
            localStorage.setItem('itemCounts', JSON.stringify(newCounts));

            // Save item to cartItems in localStorage
            const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            storedItems.push(data[index]);
            localStorage.setItem("cartItems", JSON.stringify(storedItems));

            return newCounts;
        });
    };

    const handleDecrement = (index) => {
        if (counts[index] > 0) {
            setCounts((prevCounts) => ({ ...prevCounts, [index]: prevCounts[index] - 1 }));

            // Save counts to localStorage
            localStorage.setItem('itemCounts', JSON.stringify({ ...counts, [index]: counts[index] - 1 }));

            // Save updated items to cartItems in localStorage
            const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const updatedItems = storedItems.filter((_, i) => i !== index);
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        }
    };
    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);

        // Save itemsPerPage and currentPage to localStorage
        localStorage.setItem('itemsPerPage', newItemsPerPage);
        localStorage.setItem('currentPage', 1);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);

        // Save currentPage to localStorage
        localStorage.setItem('currentPage', currentPage + 1);

        // Save counts to localStorage
        localStorage.setItem('itemCounts', JSON.stringify(counts));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

        // Save currentPage to localStorage
        localStorage.setItem('currentPage', Math.max(currentPage - 1, 1));

        // Save counts to localStorage
        localStorage.setItem('itemCounts', JSON.stringify(counts));
    };

    if (loading) { return <CircularProgress style={{ marginLeft: '38rem' }} /> }

    return (
        <>
            <Grid container spacing={2} sx={{ ml: '2rem' }}>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ marginRight: '1rem', pt: '10px', borderRadius: '2px', backgroundColor: '#f2f2f2', height: '45px', p: '10px' }}>Items per page:</Typography>
                        <select value={itemsPerPage} onChange={handleItemsPerPageChange} style={{ padding: '0.5rem', borderRadius: '4px', borderColor: 'lightgray', marginRight: '1rem', marginBottom: '1rem' }}>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={40}>40</option>
                            <option value={50}>50</option>
                        </select>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                        <Button onClick={handlePrevPage} disabled={currentPage === 1} sx={{ backgroundColor: 'lightgray', '&:hover': { backgroundColor: 'darkgray' } }}>Previous</Button>
                        <Typography sx={{ margin: '0 1rem' }}>Page {currentPage}</Typography>
                        <Button onClick={handleNextPage} sx={{ backgroundColor: 'lightgray', '&:hover': { backgroundColor: 'darkgray' } }}>Next</Button>
                    </Box>
                </Grid>
                {data.map((item, index) => (
                    <Grid key={`${item.id}-${index}`} item xs={12} sm={6} md={4} lg={3} >
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent style={{ flex: 1, textAlign: 'center' }}>
                                <img src={imaged} alt="" style={{ width: '90%', height: 'auto' }} />
                                <Typography variant="body">{item.Description}</Typography>
                                <Typography variant="body">{item.ParentCategory}</Typography>
                                <Typography variant="body">{item.Brand}</Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '10px', borderTop: '1px solid #f2f2f2' }}>
                                <Button variant="contained" onClick={() => handleDecrement(index)} size="small" color="info">  -  </Button>
                                <Typography variant="body">{counts[index] || 0}</Typography>
                                <Button variant="contained" onClick={() => handleIncrement(index)} size="small" color="success"> +  </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default ProductCards;
