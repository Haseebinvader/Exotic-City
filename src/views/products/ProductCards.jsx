/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Card, CardContent, Grid, Typography, Button, CircularProgress } from "@mui/material";
import imaged from '../../assets/jpeg/olive.jpg';
import { useContext, useEffect, useState } from 'react';
import { Context } from "../../App";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductCards = () => {
    // Context 
    const [counts, setCounts, data, setData, loading, setLoading, itemsPerPage, setItemsPerPage, currentPage, setCurrentPage, prices, setPrices] = useContext(Context)
    // UseEffects
    useEffect(() => {
        const storedCounts = JSON.parse(localStorage.getItem('itemCounts')) || {};
        if (Object.keys(storedCounts).length === 0) { const initialCounts = data.reduce((acc, _, index) => { acc[index] = 0; return acc; }, {}); setCounts(initialCounts); } else { setCounts(storedCounts); }
        const storedItemsPerPage = parseInt(localStorage.getItem('itemsPerPage'), 10) || 10;
        setItemsPerPage(storedItemsPerPage);
        const storedCurrentPage = parseInt(localStorage.getItem('currentPage'), 10) || 1;
        setCurrentPage(storedCurrentPage);
    }, [data]);

    // Functions
    const getPricesForItem = (itemNo) => { const itemPrices = prices.filter(price => price.ItemNo === itemNo); return itemPrices; };

    const handleIncrement = (index) => {
        toast.success("Item Added to Cart Successfully")
        setCounts((prevCounts) => {
            const currentCount = prevCounts[index] || 0;
            const newCounts = { ...prevCounts, [index]: currentCount + 1 };
            localStorage.setItem('itemCounts', JSON.stringify(newCounts));
            const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            storedItems.push(data[index]);
            localStorage.setItem("cartItems", JSON.stringify(storedItems));
            return newCounts;
        });
    };

    // Checking user in session storage
    const userExist = sessionStorage.getItem("useriD")
    const handleDecrement = (index) => {
        if (counts[index] > 0) {
            setCounts((prevCounts) => ({ ...prevCounts, [index]: prevCounts[index] - 1 }));
            localStorage.setItem('itemCounts', JSON.stringify({ ...counts, [index]: counts[index] - 1 }));
            const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            if (counts[index] > 1) {
                const updatedItems = storedItems.map((item, i) => (i === index ? { ...item, count: item.count - 1 } : item));
                localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            } else {
                const updatedItems = storedItems.filter((_, i) => i !== index);
                localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            }
            toast.success("Item Removed from Cart Successfully");
        } else {
            toast.error("Quantity cannot be less than 0");
        }
    };

    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
        localStorage.setItem('itemsPerPage', newItemsPerPage);
        localStorage.setItem('currentPage', 1);
    };
    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
        localStorage.setItem('currentPage', currentPage + 1);
        localStorage.setItem('itemCounts', JSON.stringify(counts));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
        localStorage.setItem('currentPage', Math.max(currentPage - 1, 1));
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
                            <CardContent style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                <img src={imaged} alt="" style={{ width: '100%', height: 'auto' }} />
                                <Typography variant="body" sx={{ fontSize: '14px' }}>{item.Description}</Typography>
                                <Typography variant="body" sx={{ fontSize: '14px' }}>{item.ParentCategory}</Typography>
                                <Typography variant="h6" sx={{ fontSize: '12px', fontWeight: '600' }}>{item.Brand}</Typography>
                                {userExist ? (
                                    getPricesForItem(item.ItemNo).map((price, priceIndex) => (
                                        <Typography key={`${price.SystemId}-${priceIndex}`} variant="body" sx={{ fontSize: '14px' }}>
                                            {/* Code: {price.SalesCode}, */}
                                            Price: € {price.UnitPrice.toFixed(2)}
                                        </Typography>
                                    ))
                                ) : (
                                    <Typography variant="body" sx={{ fontSize: '14px' }}>
                                        Please login to view prices.
                                    </Typography>
                                )}
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
