/* eslint-disable no-unused-vars */
import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../App";

const Pagination = () => {
    const [counts, setCounts, data, setData, loading, setLoading, itemsPerPage, setItemsPerPage, currentPage, setCurrentPage, prices, setPrices,] = useContext(Context);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => {
            const nextPage = prevPage + 1;
            localStorage.setItem("currentPage", nextPage);
            localStorage.setItem("itemCounts", JSON.stringify(counts));
            return nextPage;
        });
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => {
            const newPage = Math.max(prevPage - 1, 1);
            localStorage.setItem("currentPage", newPage);
            localStorage.setItem("itemCounts", JSON.stringify(counts));
            return newPage;
        });
    };

    console.log("Current", currentPage);
    console.log("Count", counts);

    return (
        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "space-around", p: "10px", flexDirection: { xs: "column", md: "row", lg: "row" }, width: { xs: "12.4rem", md: "100%", lg: "100%" }, }} >
            <Button onClick={handlePrevPage} disabled={currentPage === 1} sx={{ backgroundColor: "lightgray", "&:hover": { backgroundColor: "darkgray" }, }}> Previous  </Button>
            <Typography sx={{ margin: "0 1rem" }}>Page {currentPage}</Typography>
            <Button onClick={handleNextPage} sx={{ backgroundColor: "lightgray", "&:hover": { backgroundColor: "darkgray" }, }} >  Next </Button>
        </Box>
    );
};

export default Pagination;
