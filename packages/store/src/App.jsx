import React, { useState, Suspense } from 'react';
import { ItemsMock } from './tests/mocks/items';
import { StoreContentWrapper, StoreRoot } from './App.styled';
import { Typography } from '@mui/material';

const CartItems = React.lazy(() => import('Cart/CartItems'));
const ItemList = React.lazy(() => import('Items/ItemList'));

function Store() {
  const [itemsInCartIds, setItemsInCartIds] = useState({})

  const handleAddOrRemoveFromCartClicked = (id) => {
    const isItemInCart = itemsInCartIds[id];
    if (isItemInCart) {
      const itemsWithoutCurrItem = { ...itemsInCartIds }
      delete itemsWithoutCurrItem[id];
      setItemsInCartIds(itemsWithoutCurrItem)
    } else {
      setItemsInCartIds({
          ...itemsInCartIds,
          [id]: true
      })
    }
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
