import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const ProductCard = ({ product }) => (
    <Card>
        <CardMedia
            component="img"
            height="150"
            image={product.image}
            alt={product.name}
        />
        <CardContent>
            <Typography variant="h6" component="div">
                {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {product.price}
            </Typography>
        </CardContent>
        <Button variant="contained" color="primary" style={{ margin: "10px" }}>
            Add to Cart
        </Button>
    </Card>
);

export default ProductCard;
