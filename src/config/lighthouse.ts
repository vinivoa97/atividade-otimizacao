/**
 * Configurações de Performance para Lighthouse
 * Otimizações específicas para melhorar a pontuação
 */

// Meta tags essenciais para SEO e Performance
export const META_CONFIG = {
	viewport: 'width=device-width, initial-scale=1.0',
	charset: 'utf-8',
	description: 'Blog otimizado para performance e acessibilidade',
	keywords: 'blog, performance, lighthouse, seo',
	author: 'Seu Nome',
	robots: 'index, follow',
	'theme-color': '#000000',
	'msapplication-TileColor': '#000000',
	'apple-mobile-web-app-capable': 'yes',
	'apple-mobile-web-app-status-bar-style': 'default',
};

// Configurações de preload para recursos críticos
export const PRELOAD_RESOURCES = [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	// Adicione outros recursos críticos aqui
];

// Configurações de lazy loading
export const LAZY_LOADING_CONFIG = {
	rootMargin: '50px',
	threshold: 0.1,
	// Configurações para Intersection Observer
};

// Headers de cache recomendados (para configurar no servidor)
export const CACHE_HEADERS = {
	images: 'public, max-age=31536000, immutable', // 1 ano
	fonts: 'public, max-age=31536000, immutable', // 1 ano
	css: 'public, max-age=31536000, immutable', // 1 ano
	js: 'public, max-age=31536000, immutable', // 1 ano
	html: 'public, max-age=0, must-revalidate', // Sem cache
};
