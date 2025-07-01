import React, { useEffect } from 'react';

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string;
	image?: string;
	url?: string;
	type?: string;
	author?: string;
}

const SEO: React.FC<SEOProps> = ({
	title = 'Plataforma Lattes - Pesquisa e Análise de Currículos CNPq',
	description = 'Sistema de busca e análise de currículos da plataforma Lattes CNPq. Encontre pesquisadores, visualize publicações e explore dados acadêmicos.',
	keywords = 'Lattes, CNPq, pesquisa, currículo, acadêmico, publicações, pesquisadores, Brasil, ciência',
	url = 'https://seudominio.com',
	type = 'website',
	author = 'Plataforma Lattes',
}) => {
	const siteUrl = 'https://seudominio.com';
	const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;

	useEffect(() => {
		// Update document title
		document.title = title;

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

		// Update canonical link
		let canonical = document.querySelector(
			'link[rel="canonical"]'
		) as HTMLLinkElement;
		if (!canonical) {
			canonical = document.createElement('link');
			canonical.setAttribute('rel', 'canonical');
			document.head.appendChild(canonical);
		}
		canonical.setAttribute('href', fullUrl);

		// Update meta tags
		updateMeta('description', description);
		updateMeta('keywords', keywords);
		updateMeta('author', author);
		updateMeta('robots', 'index, follow');
		updateMeta('language', 'pt-BR');

		// Open Graph meta tags
		updateMeta('og:type', type, true);
		updateMeta('og:url', fullUrl, true);
		updateMeta('og:title', title, true);
		updateMeta('og:description', description, true);
		updateMeta('og:locale', 'pt_BR', true);
		updateMeta('og:site_name', 'Plataforma Lattes', true);

		// Twitter meta tags
		updateMeta('twitter:card', 'summary_large_image');
		updateMeta('twitter:url', fullUrl);
		updateMeta('twitter:title', title);
		updateMeta('twitter:description', description);

		// Additional meta tags
		updateMeta('theme-color', '#1976d2');
		updateMeta('msapplication-TileColor', '#1976d2');

		// Add JSON-LD structured data
		let jsonLd = document.querySelector(
			'#json-ld-seo'
		) as HTMLScriptElement;
		if (!jsonLd) {
			jsonLd = document.createElement('script');
			jsonLd.id = 'json-ld-seo';
			jsonLd.type = 'application/ld+json';
			document.head.appendChild(jsonLd);
		}

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
	}, [title, description, keywords, fullUrl, type, author]);

	return null; // This component doesn't render anything
};

export default SEO;
