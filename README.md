# If I had more time I would:
I encountered 2 issues, with vite federation - https://github.com/originjs/vite-plugin-federation/issues/294 and with mf-cra, which took most of my time, if I had more time I would:<br />
Convert to typescript and use a monorepo properly for type/util sharing.<br />
Write some unit tests.<br />
Try to make the layout more responsive and the design more slick.<br />

# store-with-micro-frontends
## Initialization
**Run the cart microfrontend** <br />
cd packages/cart && npm i && npm start

**Run the items microfrontend** <br />
cd packages/items && npm i && npm start

**Consume them using the store project** <br />
cd packages/store && npm i && npm start
