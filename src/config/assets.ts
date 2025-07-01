/**
 * Assets Configuration - Otimizado para Lighthouse
 * Assets servidos diretamente da pasta public/ sem processamento do bundler
 */

// Configuração base para assets
const ASSETS_BASE_URL = '';

// Função helper para otimização de imagens
export const getOptimizedImageProps = (
	src: string,
	alt: string,
	options?: {
		loading?: 'lazy' | 'eager';
		fetchPriority?: 'high' | 'low' | 'auto';
		sizes?: string;
	}
) => ({
	src,
	alt,
	loading: options?.loading || 'lazy',
	fetchPriority: options?.fetchPriority || 'auto',
	decoding: 'async' as const,
	...(options?.sizes && { sizes: options.sizes }),
});
