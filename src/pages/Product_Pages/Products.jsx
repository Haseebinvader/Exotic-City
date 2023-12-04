/* eslint-disable no-unused-vars */
import { Box, Grid } from "@mui/material";
import Filters from "../../views/products/filters";
import Food_Card from "../../views/products/Food_Card";
import { useState } from "react";
import Search from "../../views/products/Search";
import ProductCards from "../../views/products/ProductCards";
const Products = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (newQuery) => {
        setQuery(newQuery);
    };

    return (
        <Grid container sx={{ backgroundColor: "#f9f9f9" }}>
            <Grid item>
                <Search handleSearch={handleSearch} />
            </Grid>
            <Grid item sx={{ width: "calc(100% - 140px)", display: "flex", mt: "2rem", }} >
                <Box sx={{ width: "240px", mr: "2rem" }}>
                    <Filters />
                </Box>
                <Box>
                    <ProductCards />
                </Box>
            </Grid>
        </Grid>
    );
};

export default Products;
