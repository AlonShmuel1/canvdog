import React from "react";
import { Container, Typography } from "@mui/material";
import ProductGrid from "../components/ProductGrid";
import ProductService from "../services/ProductService";

const HomePage = () => {
    const products = ProductService.getProducts();

    return (
        <Container style={{ marginTop: "20px" }}>
            <Typography variant="h3" align="center" gutterBottom>
                Canvas Shop
            </Typography>
            <ProductGrid products={products} />
        </Container>
    );
};

export default HomePage;
