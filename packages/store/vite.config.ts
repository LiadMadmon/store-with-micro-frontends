import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    federation({
      name: 'store',
      remotes: {
        cart: 'http://localhost:5500/assets/remoteEntry.js',
        items: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    })
  ],
})