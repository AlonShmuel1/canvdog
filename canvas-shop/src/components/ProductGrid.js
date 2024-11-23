import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => (
    <Grid container spacing={3}>
        {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductCard product={product} />
            </Grid>
        ))}
    </Grid>
);

export default ProductGrid;
