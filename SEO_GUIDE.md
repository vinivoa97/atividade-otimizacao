# Guia de Implementação SEO - Plataforma Lattes

## ✅ Implementações Realizadas

### 1. Arquivos Básicos de SEO

-   **robots.txt** - Configurado para permitir indexação e indicar sitemap
-   **sitemap.xml** - Mapa do site com URLs principais
-   **manifest.json** - Para Progressive Web App (PWA)
-   **.htaccess** - Configurações de servidor para performance e segurança

### 2. Meta Tags Otimizadas

-   Title dinâmico e descritivo
-   Meta description otimizada
-   Keywords relevantes
-   Meta tags Open Graph (Facebook)
-   Meta tags Twitter Card
-   Meta tags para mobile (viewport, theme-color)

### 3. Dados Estruturados (Schema.org)

-   JSON-LD implementado
-   Estrutura de WebPage/Article
-   Informações de organização
-   Rich snippets preparados

### 4. Componentes React para SEO

-   **SEO Component** (`src/components/SEO.tsx`)
-   **useSEO Hook** (`src/hooks/useSEO.ts`)

### 5. Otimizações Técnicas

-   Canonical URLs
-   Compressão GZIP
-   Cache do navegador
-   Headers de segurança
-   Redirecionamento HTTPS

## 🚀 Como Usar

### 1. Usando o Componente SEO

```tsx
import SEO from './components/SEO';

function HomePage() {
	return (
		<>
			<SEO
				title="Página Inicial - Plataforma Lattes"
				description="Descrição específica da página"
				keywords="palavras, chave, específicas"
				url="/home"
			/>
			{/* Conteúdo da página */}
		</>
	);
}
```

### 2. Usando o Hook useSEO

```tsx
import useSEO from './hooks/useSEO';

function BlogPost({ post }) {
	useSEO({
		title: post.title,
		description: post.excerpt,
		keywords: post.tags.join(', '),
		url: `/blog/${post.slug}`,
		type: 'article',
	});

	return <div>{/* Conteúdo do post */}</div>;
}
```

## 📝 Próximos Passos

### 1. Configurações Obrigatórias

-   [ ] Atualizar URLs de `https://seudominio.com` para seu domínio real
-   [ ] Configurar Google Search Console
-   [ ] Configurar Google Analytics 4
-   [ ] Criar e enviar sitemap real com todas as páginas

### 2. Melhorias Recomendadas

-   [ ] Implementar breadcrumbs
-   [ ] Adicionar schema de avaliações/ratings
-   [ ] Otimizar imagens (WebP, lazy loading)
-   [ ] Implementar Service Worker para PWA
-   [ ] Adicionar página 404 customizada

### 3. Monitoramento

-   [ ] Core Web Vitals
-   [ ] Page Speed Insights
-   [ ] Mobile-Friendly Test
-   [ ] Rich Results Test

## 🔧 Arquivos para Editar

### Atualizar domínio nos seguintes arquivos:

1. `public/robots.txt` - linha do Sitemap
2. `public/sitemap.xml` - todas as URLs
3. `src/components/SEO.tsx` - siteUrl constant
4. `src/hooks/useSEO.ts` - siteUrl constant
5. `index.html` - meta tags Open Graph e Twitter

### Personalizar conteúdo:

1. `index.html` - meta tags básicas
2. `public/manifest.json` - informações do PWA
3. `src/components/SEO.tsx` - valores padrão
4. `src/hooks/useSEO.ts` - valores padrão

## 📊 Ferramentas de Teste

### Validação SEO:

-   [Google Search Console](https://search.google.com/search-console)
-   [Google PageSpeed Insights](https://pagespeed.web.dev/)
-   [Google Rich Results Test](https://search.google.com/test/rich-results)
-   [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Validação de Schema:

-   [Schema.org Validator](https://validator.schema.org/)
-   [Google Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool)

### Outras ferramentas:

-   [SEO Site Checkup](https://seositecheckup.com/)
-   [GTmetrix](https://gtmetrix.com/)
-   [WebPageTest](https://www.webpagetest.org/)

## 🎯 Checklist Final

-   [ ] Título único para cada página (máx 60 caracteres)
-   [ ] Meta description única (máx 160 caracteres)
-   [ ] URLs amigáveis e descritivas
-   [ ] Imagens com alt text
-   [ ] Estrutura de cabeçalhos (H1, H2, H3) lógica
-   [ ] Links internos relevantes
-   [ ] Velocidade de carregamento < 3s
-   [ ] Site responsivo
-   [ ] HTTPS ativo
-   [ ] XML sitemap atualizado
-   [ ] robots.txt configurado
