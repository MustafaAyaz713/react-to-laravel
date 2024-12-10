import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/App.jsx'], // React uygulamanızın giriş dosyası
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: 'localhost', // IPv4 kullan
        port: 5173,        // Varsayılan port
        strictPort: true,  // Port çakışmasında hata ver
    },
    resolve: {
        alias: {
            '@': '/resources/js', // Kısa yol tanımları
        },
    },
});
