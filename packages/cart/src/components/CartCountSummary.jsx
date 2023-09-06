import { Box, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';

const CartCountSummary = ({ itemsInCart }) => {
    return (
        <Box display='flex' alignItems='center'>
            <Typography marginRight={1} variant='body1'>
                {itemsInCart}
            </Typography>
            <AddShoppingCartIcon />
        </Box>
    ) 
}

export default CartCountSummary;