## store-with-micro-frontends
# Initialization
Run the cart microfrontend
cd packages/cart && pnpm i & pnpm run deploy

Run the items microfrontend
cd packages/items && pnpm i & pnpm run deploy

Consume them using the store project
cd packages/store && pnpm i & pnpm dev