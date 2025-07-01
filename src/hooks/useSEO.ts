import { useEffect } from 'react';

interface UseSEOProps {
	title?: string;
	description?: string;
	keywords?: string;
	image?: string;
	url?: string;
	type?: string;
	author?: string;
}

export const useSEO = ({
	title,
	description,
	keywords,
	image,
	url,
	type = 'website',
	author = 'Plataforma Lattes',
}: UseSEOProps) => {
	useEffect(() => {
		if (!title && !description) return;

		const siteUrl = 'https://seudominio.com';
		const fullUrl = url
			? url.startsWith('http')
				? url
				: `${siteUrl}${url}`
			: window.location.href;

		// Update document title
		if (title) {
			document.title = title;
		}

		// Function to update or create meta tag
		const updateMeta = (
			name: string,
			content: string,
			property = false
		) => {
			const selector = property
				? `meta[property="${name}"]`
				: `meta[name="${name}"]`;
			let meta = document.querySelector(selector) as HTMLMetaElement;

			if (!meta) {
				meta = document.createElement('meta');
				if (property) {
					meta.setAttribute('property', name);
				} else {
					meta.setAttribute('name', name);
				}
				document.head.appendChild(meta);
			}
			meta.setAttribute('content', content);
		};

		// Update meta tags
		if (description) updateMeta('description', description);
		if (keywords) updateMeta('keywords', keywords);
		if (author) updateMeta('author', author);

		// Open Graph meta tags
		if (title) updateMeta('og:title', title, true);
		if (description) updateMeta('og:description', description, true);
		updateMeta('og:type', type, true);
		updateMeta('og:url', fullUrl, true);

		// Twitter meta tags
		if (title) updateMeta('twitter:title', title);
		if (description) updateMeta('twitter:description', description);
		updateMeta('twitter:url', fullUrl);

		// Update canonical URL
		let canonical = document.querySelector(
			'link[rel="canonical"]'
		) as HTMLLinkElement;
		if (canonical) {
			canonical.setAttribute('href', fullUrl);
		}

		// Update JSON-LD structured data
		const jsonLd = document.querySelector(
			'#json-ld-seo'
		) as HTMLScriptElement;
		if (jsonLd && title && description) {
			const structuredData = {
				'@context': 'https://schema.org',
				'@type': type === 'article' ? 'Article' : 'WebPage',
				name: title,
				description: description,
				url: fullUrl,
				author: {
					'@type': 'Organization',
					name: author,
				},
				publisher: {
					'@type': 'Organization',
					name: 'Plataforma Lattes',
				},
				mainEntityOfPage: {
					'@type': 'WebPage',
					'@id': fullUrl,
				},
			};

			jsonLd.textContent = JSON.stringify(structuredData);
		}
	}, [title, description, keywords, image, url, type, author]);
};

export default useSEO;
