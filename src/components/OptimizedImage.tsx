import { getOptimizedImageProps } from '../config/assets';

interface OptimizedImageProps {
	src: string;
	alt: string;
	className?: string;
	style?: React.CSSProperties;
	priority?: boolean;
	sizes?: string;
}

/**
 * Componente de imagem otimizado para Lighthouse
 * - Lazy loading por padrão
 * - Fetch priority configurável
 * - Atributos de performance otimizados
 */
export default function OptimizedImage({
	src,
	alt,
	className,
	style,
	priority = false,
	sizes,
}: OptimizedImageProps) {
	const imageProps = getOptimizedImageProps(src, alt, {
		loading: priority ? 'eager' : 'lazy',
		fetchPriority: priority ? 'high' : 'low',
		sizes,
	});

	return <img {...imageProps} className={className} style={style} />;
}
