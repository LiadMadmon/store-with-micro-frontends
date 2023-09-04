import { Suspense, lazy } from 'react';
const CartCountSummary = lazy(() => import('cart/CartCountSummary'));

const ItemList = () => {
    return (
        <div>
            <div>Items View</div>
            <Suspense fallback={<div>Loading Remote Component...</div>}>
                <CartCountSummary />
            </Suspense>
        </div>

    );
}

export default ItemList;
