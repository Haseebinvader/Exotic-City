/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Box, Card, Grid, Typography, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import imaged from '../../assets/jpeg/olive.jpg'

const FoodCard = ({ query, onCategorySelect, selectedSubcategory }) => {
    // Constants
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTcwMTE3MzcwOSwibmJmIjoxNzAxMTczNzA5LCJleHAiOjE3MDExNzc2MDksImFpbyI6IkUyVmdZRENZdVducjZsMnh5am9wTDlsNEN5WXdBQUE9IiwiYXBwaWQiOiJhODM5MWI5Yy00NTgzLTQ2YzMtYTQ0OS1hMGRlNmUxOTkxNjEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI1ZmNkNzk2Yy1kNWE0LTRiYzAtOWRkMS02YmQyMmZhNWFlZjUiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiNWZjZDc5NmMtZDVhNC00YmMwLTlkZDEtNmJkMjJmYTVhZWY1IiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoiRlJhXy0zd0tZa3FKMXpLX1NxanhBUSIsInZlciI6IjEuMCJ9.P8gd5Yyh0hJ9z8fXlQiaYTUdjEceSKN86fEzEmKVn5ZEgO12q680zPlY_aLRRAY27axvk7cQ_v-7FR0nBiRmPT1U2w-gIHq_NS4opvKrIVEKiefLtMgRi8VKtaOo7L17Ew2wtT9o71Q7vEV3btY866jav9KOPpuxF3NC6QMZUu_lGhCv0aH0cGi-K6O99KHCMuYgCY7KzdfqaQrSl5FFNUoM-EB6wCwqtzEyZI6bwp6KSWoqaWkrk5DnoOvBLBaRIRXX76uqBoHN8923UaTRJcesm88I-BQ_a0Lg6snx89H3ikpMGn8-GNZl1fEliukLQ-IgnkEMs8a1cNPQL-0hcw';

    // States
    const [priceData, setPriceData] = useState([]);
    const [loadingPrices, setLoadingPrices] = useState(true);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isIncrement, setIsIncrement] = useState(() => {
        const storedIncrements = localStorage.getItem('increments');
        return storedIncrements ? JSON.parse(storedIncrements) : [];
    });
    // Use the selected category to filter the items
    const filteredFoodData = data.filter((item) => {
        if (selectedSubcategory) {
            return item.ItemSubCategoryCode === selectedSubcategory;
        }
        return item.Description.includes(query);
    });
    // Pagination state variables
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Use the selected category to filter the items and apply pagination
    const paginatedFoodData = filteredFoodData.slice(startIndex, endIndex);

    // Functions for pagination
    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };


    // Functions
    const fetchData = async () => {
        try {
            const res = await axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox1/ODataV4/Company(\'My%20Company\')/ItemApi', {
                headers: { "top": 30, "Authorization": `Bearer ${accessToken}` },
            });
            setData(res.data.value);
        } catch (error) {
            console.error("Error fetching data", error);
        } finally {
            setLoading(false);
        }
    };
    // Prices API
    const fetchPrices = async () => {
        try {
            const priceRes = await axios.get('https://api.businesscentral.dynamics.com/v2.0/Sandbox1/api/bctech/demo/v2.0/Companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/SalesPrice', {
                headers: { "top": 30, "Authorization": `Bearer ${accessToken}` },
            });
            setPriceData(priceRes.data.value);
        } catch (error) {
            console.error("Error fetching prices", error);
        } finally {
            setLoadingPrices(false);
        }
    };
    useEffect(() => {
        fetchPrices();
    }, []);
    useEffect(() => {
        const combineDataAndPrices = () => {
            // Check if both data and priceData have data
            if (data.length > 0 && priceData.length > 0) {
                // Combine item data with prices
                const updatedData = data.map(item => {
                    const pricesForItem = priceData.filter(price => price.ItemNo === item.ItemNo);
                    return { ...item, prices: pricesForItem };
                });
                setData(updatedData);
            }
        };

        // Call the function to combine data and prices
        combineDataAndPrices();
    }, [priceData, data]);


    const handleIncrement = (index) => {
        const newIsIncrement = [...isIncrement];
        newIsIncrement[index] += 1;
        setIncrementAndCart(newIsIncrement);
    };

    const handleDecrement = (index) => {
        if (isIncrement[index] > 0) {
            const newIncrements = [...isIncrement];
            newIncrements[index] -= 1;
            setIncrementAndCart(newIncrements);
        }
    };

    const setIncrementAndCart = (newIsIncrement) => {
        const updatedCart = data.filter((item, index) => newIsIncrement[index] > 0);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        localStorage.setItem('increments', JSON.stringify(newIsIncrement));
        setIsIncrement(newIsIncrement);
    };

    const navigate = useNavigate();

    const handleItemClick = (item) => {
        localStorage.setItem('selectedItem', JSON.stringify(item));
        localStorage.setItem('selectedItemImage', item.Image);
        setSelectedItem(item);
        navigate('/ProductDescription', { state: { selectedItem: item } });
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        const storedIncrements = localStorage.getItem('increments');
        if (storedCart) { setCart(JSON.parse(storedCart)) }
        if (storedIncrements) { setIsIncrement(JSON.parse(storedIncrements)) }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('increments', JSON.stringify(isIncrement));
    }, [isIncrement]);


    if (loading) {
        return <CircularProgress style={{ marginLeft: '38rem' }} />
    }

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', width: '81vw', px: 2, height: '180vh', overflowY: 'scroll' }}>
            {paginatedFoodData.map((item, index) => (
                <Grid item xs={12} sm={8} md={5} lg={3} key={item.id} sx={{ mb: 2 }}>
                    <Card sx={{ maxWidth: 270, height: 'auto', textAlign: 'center', mb: '2rem' }}>
                        <img src={imaged} alt="" width="80%" onClick={() => handleItemClick(item)} />
                        <Typography sx={{ fontSize: '14px', height: '65px' }}>{item.Description}</Typography>
                        {/* <Typography sx={{ fontSize: '12px' }}>{item.Packaging}</Typography> */}
                        <Typography sx={{ fontSize: '12px', height: '50px', fontWeight: '600' }}>{item.Brand}</Typography>
                        {item.prices && item.prices.map(price => (
                            <Typography key={price.SalesCode} sx={{ fontSize: '12px' }}>
                                {`Price (${price.SalesCode}): ${price.UnitPrice}`}
                            </Typography>
                        ))}
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', pb: '1rem', mt: '10px' }}>
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
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                    <Button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </Button>
                    <Typography>Page {currentPage}</Typography>
                    <Button onClick={handleNextPage} disabled={endIndex >= filteredFoodData.length}>
                        Next
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default FoodCard;
