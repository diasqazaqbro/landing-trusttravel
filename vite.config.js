import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        price: 'price.html',
        notFound: 'not-found.html',
        portfolio: 'portfolio.html',
      },
    },
  },
})
