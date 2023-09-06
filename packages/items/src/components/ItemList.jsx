import React, { Suspense } from 'react';
import { Box, Typography } from '@mui/material';
import { ListItem } from './ListItem';
import { ItemListRoot, ItemsListHeaderWrapper, ListItemsGridWrapper } from './ItemList.styled';

const CartCountSummary =  React.lazy(() => import('Cart/CartCountSummary'));

const ItemList = ({
    handleAddOrRemoveFromCartClicked,
    itemsInCartIds,
    items,
}) => {
    const itemsInCart = Object.keys(itemsInCartIds).length

    return (
        <ItemListRoot>
            <Box>
                <ItemsListHeaderWrapper>
                    <Typography marginBottom={2} variant='h6'>Items:</Typography>
                    <Suspense fallback={<Box>Loading Remote Component...</Box>}>
                        <CartCountSummary itemsInCart={itemsInCart} />
                    </Suspense>
                </ItemsListHeaderWrapper>
                <ListItemsGridWrapper container>
                    {items.map((item) => 
                        <ListItem
                            handleAddOrRemoveFromCartClicked={handleAddOrRemoveFromCartClicked}
                            key={item.id} 
                            isInCart={itemsInCartIds[item.id]} 
                            item={item} 
                        />
                    )}
                </ListItemsGridWrapper>
            </Box>
        </ItemListRoot>
    );
}

export default ItemList;
