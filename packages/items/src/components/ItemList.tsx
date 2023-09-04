import { Suspense, lazy } from 'react';
import { Box, Typography } from '@mui/material';
import { ListItem } from './ListItem';
import { ItemListRoot, ItemsListHeaderWrapper, ListItemsGridWrapper } from './ItemList.styled';
import { Item } from '../types';

const CartCountSummary = lazy(() => import('cart/CartCountSummary'));

type ItemListProps = {
    handleAddOrRemoveFromCartClicked: (id: number) => void,
    itemsInCartIds: Record<string, boolean>,
    items: Item[],
}
const ItemList = ({
    handleAddOrRemoveFromCartClicked,
    itemsInCartIds,
    items,
}: ItemListProps) => {

    // const itemsInCart = Object.keys(itemsInCartIds).reduce((acc, isInCart) => isInCart ? acc + 1 : acc, 0)
    const itemsInCart = 3
    
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
