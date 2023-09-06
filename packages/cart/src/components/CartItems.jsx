import React from 'react';
import { Typography } from "@mui/material";
import { CartItem } from './CartItem';
import { CartItemsWrapper } from './CartItem.styled';

const CartItems = ({ items }) => {
    return (
        <CartItemsWrapper>
            <Typography variant='body1'>Cart:</Typography>
            {items.map((item) => <CartItem key={item.id} item={item} />)}
        </CartItemsWrapper>
    );
}

export default CartItems;
