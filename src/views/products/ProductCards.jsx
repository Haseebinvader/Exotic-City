/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Card, CardContent, Grid, Typography, Button, CircularProgress, Paper, CardMedia, } from "@mui/material";
import imaged from '../../assets/jpeg/olive.jpg';
import { useContext, useEffect, useState } from 'react';
import { Context } from "../../App";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemsDropdown from "./ItemsDropdown";
import Pagination from "./Pagination";
import { Link } from 'react-router-dom';

const CardsData = [
    { Name: "Pepsi", Brand: "Coke", Price: 300, Image: imaged },
    { Name: "Coke", Brand: "Coke", Price: 300, Image: imaged },
    { Name: "Marinda", Brand: "Coke", Price: 300, Image: imaged },
    { Name: "Dew", Brand: "Coke", Price: 300, Image: imaged },
    { Name: "7up", Brand: "Coke", Price: 300, Image: imaged },
    { Name: "Marinda", Brand: "Coke", Price: 300, Image: imaged },
    { Name: "Coke", Brand: "Coke", Price: 300, Image: imaged },
    { Name: "Pepsi", Brand: "Coke", Price: 300, Image: imaged },
]

const ProductCards = () => {
    // // Context 
    // const [counts, setCounts, data, setData, loading, setLoading, itemsPerPage, setItemsPerPage, currentPage, setCurrentPage, prices, setPrices] = useContext(Context)
    // // UseEffects
    // useEffect(() => {
    //     const storedCounts = JSON.parse(localStorage.getItem('itemCounts')) || {};
    //     if (Object.keys(storedCounts).length === 0) { const initialCounts = data.reduce((acc, _, index) => { acc[index] = 0; return acc; }, {}); setCounts(initialCounts); } else { setCounts(storedCounts); }
    //     const storedItemsPerPage = parseInt(localStorage.getItem('itemsPerPage'), 10) || 10;
    //     setItemsPerPage(storedItemsPerPage);
    //     const storedCurrentPage = parseInt(localStorage.getItem('currentPage'), 10) || 1;
    //     setCurrentPage(storedCurrentPage);
    // }, [data]);

    // // Functions
    // const getPricesForItem = (itemNo) => { const itemPrices = prices.filter(price => price.ItemNo === itemNo); return itemPrices; };

    // const handleIncrement = (index) => {
    //     toast.success("Item Added to Cart Successfully")
    //     setCounts((prevCounts) => {
    //         const currentCount = prevCounts[index] || 0;
    //         const newCounts = { ...prevCounts, [index]: currentCount + 1 };
    //         localStorage.setItem('itemCounts', JSON.stringify(newCounts));
    //         const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    //         storedItems.push(data[index]);
    //         localStorage.setItem("cartItems", JSON.stringify(storedItems));
    //         return newCounts;
    //     });
    // };
    // const handleDecrement = (index) => {
    //     setCounts((prevCounts) => {
    //         const currentCount = prevCounts[index] || 0;

    //         if (currentCount > 0) {
    //             const newCounts = { ...prevCounts, [index]: currentCount - 1 };
    //             localStorage.setItem('itemCounts', JSON.stringify(newCounts));

    //             // Update cartItems in localStorage to reflect the decrease in quantity
    //             const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    //             const itemIndex = storedItems.findIndex(item => item.id === data[index].id);

    //             if (itemIndex !== -1) {
    //                 storedItems.splice(itemIndex, 1);
    //                 localStorage.setItem("cartItems", JSON.stringify(storedItems));
    //             }

    //             return newCounts;
    //         }

    //         return prevCounts;
    //     });
    // };
    // // Checking user in session storage
    // const userExist = sessionStorage.getItem("useriD")
    // // if (loading) { return <CircularProgress style={{ marginLeft: '38rem' }} /> }

    return (
        <>
            {/* <Grid container spacing={1} sx={{ pl: { sx: '4rem', md: '4rem', lg: '5rem' }, border: '1px solid red', width: '89%', ml: '8rem', height: '100vh' }}>
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
            </Grid> */}
            <Paper elevation={3} sx={{ height: '100%', m: '1rem', p: '10px', width: 'auto' }}>
                <ItemsDropdown />
                <Grid container >
                    {/* <Typography>Cards Will be Displayed Here</Typography> */}
                    {CardsData.map((item, index) => (
                        <Link key={index} to={`/ProductsDescription/${index}`}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', m: '10px' }} key={index}>
                                <CardMedia>
                                    <img src={item.Image} alt="" style={{ width: '100%', height: 'auto' }} />
                                </CardMedia>
                                <CardContent style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                    <Typography>{item.Name}</Typography>
                                    <Typography>{item.Brand}</Typography>
                                    <Typography>{item.Price}</Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '10px', borderTop: '1px solid #f2f2f2' }}>
                                    <Button variant="contained" size="small" color="info">  -  </Button>
                                    <Typography variant="body">0</Typography>
                                    <Button variant="contained" size="small" color="success"> +  </Button>
                                </Box>
                            </Card>
                        </Link>
                    ))}



                    {/* <Typography variant="body" sx={{ fontSize: '14px' }}>{item.Description}</Typography>
                     <Typography variant="body" sx={{ fontSize: '14px' }}>{item.ParentCategory}</Typography>
                     <Typography variant="h6" sx={{ fontSize: '12px', fontWeight: '600' }}>{item.Brand}</Typography> */}
                    {/* {userExist ? (
                         getPricesForItem(item.ItemNo).map((price, priceIndex) => (
                             <Typography key={`${price.SystemId}-${priceIndex}`} variant="body" sx={{ fontSize: '14px' }}>
                                 Price: € {price.UnitPrice.toFixed(2)}
                             </Typography>
                         ))
                     ) : (
                         <Typography variant="body" sx={{ fontSize: '14px' }}>
                             Please login to view prices.
                         </Typography>
                     )} */}

                    {/* {data.map((item, index) => (
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
                        ))} */}
                </Grid>
                <Pagination />
            </Paper>
        </>
    );
}

export default ProductCards;
