import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    base: '/embedded-israel/',
    plugins: [
        react(),
        tailwindcss(),
        {
            name: 'local-redirect',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    const url = (req as any).url;
                    if (url === '/' || url === '/embedded-israel') {
                        res.writeHead(302, { Location: '/embedded-israel/' });
                        res.end();
                    } else {
                        next();
                    }
                });
            }
        }
    ],
})
