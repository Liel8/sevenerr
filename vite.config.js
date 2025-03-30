// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	build: {
// 		outDir: '../backend/public',
// 		emptyOutDir: true,
// 	},
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	build: {
// 		outDir: '../backend/public',
// 		emptyOutDir: true,
// 	},
// 	server: {
// 		proxy: {
// 			'/api': {
// 				target: 'http://localhost:3030', // כתובת ה-backend שלך
// 				changeOrigin: true,
// 				rewrite: (path) => path.replace(/^\/api/, '')
// 			}
// 		}
// 	}
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../backend/public',
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3030', // כתובת ה-backend שלך
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})


