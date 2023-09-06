import { useState, lazy, Suspense } from 'react';
const CartItems = lazy(() => import('cart/CartItems'));
const ItemList = lazy(() => import('items/ItemList'));
import { ItemsMock } from './tests/mocks/items';
import { StoreContentWrapper, StoreRoot } from './App.styled';
import { Typography } from '@mui/material';

function Store() {
  const [itemsInCartIds, setItemsInCartIds] = useState<Record<string, boolean>>({})

    const handleAddOrRemoveFromCartClicked = (id: number) => {
        const isItemInCartNow = itemsInCartIds[id];
        setItemsInCartIds({
            ...itemsInCartIds,
            [id]: !isItemInCartNow
        })
    }

  return (
    <StoreRoot>
      <Typography variant='h4'>My Store</Typography>
      <Suspense fallback={<div>Loading Remote Component...</div>}>
        <StoreContentWrapper>
          <ItemList 
            handleAddOrRemoveFromCartClicked={handleAddOrRemoveFromCartClicked}
            itemsInCartIds={itemsInCartIds}
            items={ItemsMock}
          />
          <CartItems />
        </StoreContentWrapper>
      </Suspense>
    </StoreRoot>
  )
}

export default Store
