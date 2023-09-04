import { lazy, Suspense } from 'react'
import './App.css'
const CartItems = lazy(() => import('cart/CartItems'));
const ItemList = lazy(() => import('items/ItemList'));

function Store() {
  return (
      <div>
        <Suspense fallback={<div>Loading Remote Component...</div>}>
          <CartItems />
          <ItemList />
        </Suspense>
      </div>
  )
}

export default Store
