/* eslint-disable no-unused-vars */
import { Box, Grid, Typography } from "@mui/material";
import { Context } from "../../App";
import { useContext } from "react";
import Search from "./Search";

const ItemsDropdown = () => {
    const [counts, setCounts, data, setData, loading, setLoading, itemsPerPage, setItemsPerPage, currentPage, setCurrentPage, prices, setPrices,] = useContext(Context);

    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
        localStorage.setItem('itemsPerPage', newItemsPerPage);
        localStorage.setItem('currentPage', 1);
    };

    return (
        <Grid item sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box> <Search /> </Box>
            <Box sx={{ display: 'flex', gap: '10px' }}>
                <Typography sx={{ borderRadius: '6px', backgroundColor: '#f2f2f2', height: '45px', p: '10px' }}>Items per page:</Typography>
                <select value={itemsPerPage} onChange={handleItemsPerPageChange} style={{ padding: '0.5rem', borderRadius: '4px', borderColor: 'lightgray' }}>
                    {[10, 20, 30, 40, 50].map((value) => (<option key={value} value={value}>{value} </option>))}
                </select>
            </Box>
        </Grid>
    );
};

export default ItemsDropdown;
