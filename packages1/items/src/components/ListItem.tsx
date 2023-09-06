import { Typography } from "@mui/material";
import { Item } from "../types";
import { AddToCartButton, ItemActionsWrapper, ItemTitleWrapper, ListItemRoot } from "./ItemList.styled";

type ListItemProps = {
    item: Item;
    isInCart: boolean;
    handleAddOrRemoveFromCartClicked: (id: number) => void
}

export const ListItem = ({ item, isInCart, handleAddOrRemoveFromCartClicked }: ListItemProps) => {
    const handleToggleItemInCart = () => {
        handleAddOrRemoveFromCartClicked(item.id)
    }

    return (
        <ListItemRoot>
            <ItemTitleWrapper>
                <Typography variant='body1'>{item.name}</Typography>
            </ItemTitleWrapper>
            <ItemActionsWrapper>
                <AddToCartButton variant='contained' onClick={handleToggleItemInCart}>{isInCart ? 'Add' : 'Remove'}</AddToCartButton>
            </ItemActionsWrapper>
        </ListItemRoot>
    )
}
