/* eslint-disable no-unused-vars */
import { Box, Grid, Typography } from "@mui/material";
import Filters from "../../views/products/filters";
import Food_Card from "../../views/products/Food_Card";
import { useContext, useState } from "react";
import Search from "../../views/products/Search";
import ProductCards from "../../views/products/ProductCards";
import { Button } from "@mui/material";
import { Context } from "../../App";
const Products = () => {
    const [counts, setCounts, data, setData, loading, setLoading, itemsPerPage, setItemsPerPage, currentPage, setCurrentPage, prices, setPrices] = useContext(Context)

    const [query, setQuery] = useState("");

    const handleSearch = (newQuery) => {
        setQuery(newQuery);
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

    return (
        <Grid container sx={{ backgroundColor: "#f9f9f9", width: { xs: '50rem', md: '62rem', lg: '100%' } }}>
            <Grid item>
                {/* <Search handleSearch={handleSearch} /> */}
            </Grid>
            <Grid item sx={{ width: "100%", display: "flex", mt: "2rem" }} >
                <Box sx={{ width: { xs: "11rem" } }}>
                    <Filters />
                </Box>
                <Box>
                    <Grid item sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', pl: '3rem', maxWidth: { xs: '12rem', md: '25rem', lg: '94%' }, justifyContent: 'flex-end' }}>
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

                    </Grid>
                    <ProductCards />
                    <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-around', p: '10px', flexDirection: { xs: 'column', md: 'row', lg: 'row' }, width: { xs: '12.4rem', md: '100%', lg: '100%' } }}>
                        <Button onClick={handlePrevPage} disabled={currentPage === 1} sx={{ backgroundColor: 'lightgray', '&:hover': { backgroundColor: 'darkgray' } }}>Previous</Button>
                        <Typography sx={{ margin: '0 1rem' }}>Page {currentPage}</Typography>
                        <Button onClick={handleNextPage} sx={{ backgroundColor: 'lightgray', '&:hover': { backgroundColor: 'darkgray' } }}>Next</Button>
                    </Box>
                </Box>
            </Grid >
        </Grid >
    );
};

export default Products;
