import React from 'react';
import { Typography } from "@mui/material";
import { AddToCartButton, ItemActionsWrapper, ItemTitleWrapper, ListItemRoot } from "./ItemList.styled";

export const ListItem = ({ item, isInCart, handleAddOrRemoveFromCartClicked }) => {
    const handleToggleItemInCart = () => {
        handleAddOrRemoveFromCartClicked(item.id)
    }

    return (
        <ListItemRoot>
            <ItemTitleWrapper>
                <Typography variant='body1'>{item.name}</Typography>
            </ItemTitleWrapper>
            <ItemActionsWrapper>
                <AddToCartButton variant='contained' onClick={handleToggleItemInCart}>{isInCart ? 'Remove' : 'Add'}</AddToCartButton>
            </ItemActionsWrapper>
        </ListItemRoot>
    )
}
