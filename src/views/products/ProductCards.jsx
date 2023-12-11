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
    const handleDecrement = (index) => {
        setCounts((prevCounts) => {
            const currentCount = prevCounts[index] || 0;

            if (currentCount > 0) {
                const newCounts = { ...prevCounts, [index]: currentCount - 1 };
                localStorage.setItem('itemCounts', JSON.stringify(newCounts));

                // Update cartItems in localStorage to reflect the decrease in quantity
                const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
                const itemIndex = storedItems.findIndex(item => item.id === data[index].id);

                if (itemIndex !== -1) {
                    storedItems.splice(itemIndex, 1);
                    localStorage.setItem("cartItems", JSON.stringify(storedItems));
                }

                return newCounts;
            }

            return prevCounts;
        });
    };
    // Checking user in session storage
    const userExist = sessionStorage.getItem("useriD")
    if (loading) { return <CircularProgress style={{ marginLeft: '38rem' }} /> }

    return (
        <>
            <Grid container spacing={1} sx={{ pl: { sx: '4rem', md: '4rem', lg: '5rem' } }}>
                {data.map((item, index) => (
                    <Grid key={`${item.id}-${index}`} item xs={10} sm={5} md={4} lg={2.5} sx={{ width: { xs: '20rem', md: '20rem', lg: '16rem' }, ml: '2rem' }}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                <img src={imaged} alt="" style={{ width: '95%', height: 'auto' }} />
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
