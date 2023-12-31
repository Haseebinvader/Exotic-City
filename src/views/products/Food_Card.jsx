/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Box, Card, Grid, Typography, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import imaged from '../../assets/jpeg/olive.jpg'

const FoodCard = ({ query, onCategorySelect, selectedSubcategory }) => {
    // Constants
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTcwMTY4MTQ3MSwibmJmIjoxNzAxNjgxNDcxLCJleHAiOjE3MDE2ODUzNzEsImFpbyI6IkUyVmdZSmdjSnFtOUpkQ0o5VlRjNTFVeDllWHhBQT09IiwiYXBwaWQiOiJhODM5MWI5Yy00NTgzLTQ2YzMtYTQ0OS1hMGRlNmUxOTkxNjEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI1ZmNkNzk2Yy1kNWE0LTRiYzAtOWRkMS02YmQyMmZhNWFlZjUiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiNWZjZDc5NmMtZDVhNC00YmMwLTlkZDEtNmJkMjJmYTVhZWY1IiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoiaHhtaVEwN0drVUN4UW5kaHYta0tBQSIsInZlciI6IjEuMCJ9.ZJ7cheQacH5H9TflIqFwmOYmDMWj5G7uqjwQ1T5ZpdELJbqZyHvcYsxL4W3D8RtWoc6hRVcYL_d5YGXrJHcq93iz2ZkPyAX2qhUCJKWd0bjazayyM_qMM5hXkoMSVsMEqC8ZEXqpulFpWq0hiLhoafuahjOjuUWUE2h9X2DX_OLu1q0ZuJfli953AFxtEidlVPHSPtDFhQngW7gXKOLVkSyhe2LPSJSmTRiquTam2CZapHKExxAK0RRdkhPtCIdJcP8BknYu3gqUgjYCWesk515QNKrB8G6OcEJmSm0QmFHSjg0phqBiMIicTVxq2LIB9-ap6NvZ3haY0eNe6VHlsQ';

    // States
    const navigate = useNavigate();
    const [priceData, setPriceData] = useState([]);
    const [loadingPrices, setLoadingPrices] = useState(true);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [products, setProducts] = useState(10);
    const [isIncrement, setIsIncrement] = useState(() => { const storedIncrements = localStorage.getItem('increments'); return storedIncrements ? JSON.parse(storedIncrements) : []; });
    const filteredFoodData = data.filter((item) => { if (selectedSubcategory) { return item.ItemSubCategoryCode === selectedSubcategory; } return item.Description.includes(query); });
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedFoodData = filteredFoodData.slice(startIndex, endIndex);
    // Functions for pagination
    const handleNextPage = () => { setCurrentPage((prevPage) => prevPage + 1); setProducts((prev) => prev + itemsPerPage); };
    const handlePrevPage = () => { setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); setProducts((prev) => Math.max(prev - itemsPerPage, 10)); };

    // Functions
    // Prices API
    const fetchPrices = async () => {
        try {
            const userCustomerPriceGroup = await fetchCustomerData();
            if (!userCustomerPriceGroup) {
                console.error("User's CustomerPriceGroup not available");
                return;
            }
            const priceRes = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/Sandbox1/api/bctech/demo/v2.0/Companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/SalesPrice`, {
                headers: { "Authorization": `Bearer ${accessToken}` },
            });
            const updatedPriceData = priceRes.data.value.map(price => {
                if (price.SalesCode === userCustomerPriceGroup) { return { ...price }; }
                return null;
            }).filter(Boolean);
            setPriceData(updatedPriceData);
        } catch (error) {
            console.error("Error fetching prices", error);
        } finally {
            setLoadingPrices(false);
        }
    };
    useEffect(() => { fetchPrices(); }, []);
    // Fetch Customers
    const fetchCustomerData = async () => {
        try {
            const customerRes = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/Sandbox1/api/bctech/demo/v2.0/Companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/customer`, {
                headers: { "Authorization": `Bearer ${accessToken}` },
            });
            const customerData = customerRes.data.value;
            const userId = sessionStorage.getItem('useriD');
            const user = customerData.find(customer => customer.UserId === userId);
            if (user) { return user.CustomerPriceGroup; } else {
                console.error("User not found in customer data");
                return null;
            }
        } catch (error) {
            console.error("Error fetching customer data", error);
            return null;
        }
    };
    
    // Fetch Items
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox1/ODataV4/Company(%27My%20Company%27)/ItemApi?$top=${products}`, {
                    headers: { "Authorization": `Bearer ${accessToken}` },
                });
                setData(res.data.value);
            } catch (error) {
                console.error("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [products, accessToken]);

    // Function to handle the change in items per page
    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset the current page when changing items per page
        setProducts(newItemsPerPage); // Update the products state accordingly
    };

    useEffect(() => {
        const combineDataAndPrices = () => {
            // Check if both data and priceData have data
            if (data.length > 0 && priceData.length > 0) {
                // Combine item data with prices
                const updatedData = data.map(item => { const pricesForItem = priceData.filter(price => price.ItemNo === item.ItemNo); return { ...item, prices: pricesForItem }; });
                setData(updatedData);
            }
        };
        // Call the function to combine data and prices
        combineDataAndPrices();
    }, [priceData, data]);
    const handleIncrement = (index) => { const newIsIncrement = [...isIncrement]; newIsIncrement[index] += 1; setIncrementAndCart(newIsIncrement); };
    const handleDecrement = (index) => { if (isIncrement[index] > 0) { const newIncrements = [...isIncrement]; newIncrements[index] -= 1; setIncrementAndCart(newIncrements); } };
    const setIncrementAndCart = (newIsIncrement) => {
        const updatedCart = paginatedFoodData.filter((item, index) => newIsIncrement[index] > 0);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        localStorage.setItem('increments', JSON.stringify(newIsIncrement));
        setIsIncrement(newIsIncrement);
    };

    const handleItemClick = (item) => {
        localStorage.setItem('selectedItem', JSON.stringify(item));
        localStorage.setItem('selectedItemImage', item.Image);
        setSelectedItem(item);
        navigate('/ProductDescription', { state: { selectedItem: item } });
    };
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        const storedIncrements = localStorage.getItem('increments');
        if (storedCart) { setCart(JSON.parse(storedCart)) }
        if (storedIncrements) { setIsIncrement(JSON.parse(storedIncrements)) }
    }, []);
    useEffect(() => { localStorage.setItem('cart', JSON.stringify(cart)); }, [cart]);
    useEffect(() => { localStorage.setItem('increments', JSON.stringify(isIncrement)); }, [isIncrement]);
    if (loading) { return <CircularProgress style={{ marginLeft: '38rem' }} /> }

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', width: '81vw', px: 2, height: 'auto' }}>
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
            {paginatedFoodData.map((item, index) => (
                <Grid item xs={12} sm={8} md={5} lg={3} key={item.id} sx={{ mb: 2 }}>
                    <Card sx={{ maxWidth: 270, height: 'auto', textAlign: 'center', mb: '2rem', padding: '20px' }}>
                        <img src={imaged} alt="" width="50%" onClick={() => handleItemClick(item)} />
                        <Typography sx={{ fontSize: '14px', height: '60px' }}>{item.Description}</Typography>
                        {/* <Typography sx={{ fontSize: '12px' }}>{item.Packaging}</Typography> */}
                        <Typography sx={{ fontSize: '12px', fontWeight: '600' }}>{item.Brand}</Typography>
                        <Typography sx={{ fontSize: '12px', height: '50px', fontWeight: '600' }}>{item.ItemNo}</Typography>
                        {item.prices ? (
                            item.prices.map(price => (
                                price && (
                                    <Typography key={price.SalesCode} sx={{ fontSize: '12px' }}>
                                        {`€ ${price.customerPrice ? price.customerPrice.UnitPrice : price.UnitPrice}`}
                                    </Typography>
                                )
                            ))
                        ) : (
                            <Typography sx={{ fontSize: '12px', fontStyle: 'italic', color: 'gray' }}>
                                Loading price...
                            </Typography>
                        )}

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', pb: '1rem' }}>
                            <Box>
                                <Button onClick={() => handleDecrement(index)} sx={{ backgroundColor: 'orange', color: 'white', '&:hover': { backgroundColor: 'orange' } }} > - </Button>
                            </Box>
                            <Box>
                                <Typography>{isIncrement[index]}</Typography>
                            </Box>
                            <Box>
                                <Button onClick={() => handleIncrement(index)} sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'green' } }} > +</Button>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default FoodCard;
