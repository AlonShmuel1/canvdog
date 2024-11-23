import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AppBarComponent = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                Canvas Shop
            </Typography>
            <IconButton color="inherit">
                <ShoppingCartIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
);

export default AppBarComponent;
