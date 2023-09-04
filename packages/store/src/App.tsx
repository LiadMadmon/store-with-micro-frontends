import { lazy, Suspense } from 'react'
import './App.css'
const Cart = lazy(() => import('cart/Cart'));

function Store() {
  return (
      <div>
        <h1>Host Application</h1>
        <Suspense fallback={<div>Loading Remote Component...</div>}>
          <Cart />
        </Suspense>
      </div>
  )
}

export default Store
