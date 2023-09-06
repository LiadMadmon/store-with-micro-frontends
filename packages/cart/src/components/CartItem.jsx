import React from 'react';
import { StyledCartItem } from "./CartItem.styled"

export const CartItem = ({ item }) => {
    return (
        <StyledCartItem>{`${item.name} - ${item.price}$`}</StyledCartItem>
    )
}
