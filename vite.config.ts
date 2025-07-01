import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: { 'process.env': {} },
	build: {
		// Otimizações para SEO e performance
		minify: 'esbuild',
		cssMinify: true,
		rollupOptions: {
			output: {
				// Nomes de arquivo consistentes para cache
				assetFileNames: 'assets/[name]-[hash][extname]',
				chunkFileNames: 'assets/[name]-[hash].js',
				entryFileNames: 'assets/[name]-[hash].js',
			},
		},
	},
	server: {
		// Headers para desenvolvimento local
		headers: {
			'X-Content-Type-Options': 'nosniff',
			'X-Frame-Options': 'DENY',
			'X-XSS-Protection': '1; mode=block',
		},
	},
});
