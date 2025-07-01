import React from 'react';
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Chip,
	Button,
	Stack,
	Avatar,
	IconButton,
} from '@mui/material';
import {
	AccessTime,
	Visibility,
	Share,
	BookmarkBorder,
	TrendingUp,
	School,
	Science,
	Public,
} from '@mui/icons-material';

interface NewsItem {
	id: string;
	title: string;
	summary: string;
	category: string;
	date: string;
	readTime: string;
	views: number;
	image: string;
	author: string;
	featured?: boolean;
}

const newsData: NewsItem[] = [
	{
		id: '1',
		title: 'CNPq anuncia novo edital de bolsas de produtividade em pesquisa para 2025',
		summary:
			'Processo seletivo irá contemplar todas as grandes áreas do conhecimento com investimento de R$ 180 milhões.',
		category: 'Editais',
		date: '2024-12-28',
		readTime: '5 min',
		views: 15420,
		image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
		author: 'CNPq Comunicação',
		featured: true,
	},
	{
		id: '2',
		title: 'Plataforma Lattes completa 25 anos e atinge marca de 5 milhões de currículos',
		summary:
			'Sistema revolucionou a gestão de informações acadêmicas no Brasil e se tornou referência mundial.',
		category: 'Institucional',
		date: '2024-12-25',
		readTime: '4 min',
		views: 23891,
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
		author: 'Assessoria CNPq',
		featured: true,
	},
	{
		id: '3',
		title: 'Inteligência Artificial na Pesquisa: Grupos brasileiros lideram estudos',
		summary:
			'Levantamento mostra crescimento de 340% em pesquisas sobre IA nos últimos 5 anos no país.',
		category: 'Ciência & Tecnologia',
		date: '2024-12-22',
		readTime: '6 min',
		views: 18756,
		image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
		author: 'Redação Científica',
	},
	{
		id: '4',
		title: 'Mulheres na Ciência: Participação feminina cresce 45% na última década',
		summary:
			'Dados do Lattes revelam aumento significativo de pesquisadoras em áreas tradicionalmente masculinas.',
		category: 'Diversidade',
		date: '2024-12-20',
		readTime: '7 min',
		views: 12543,
		image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop',
		author: 'Observatório da Ciência',
	},
	{
		id: '5',
		title: 'Sustentabilidade: Pesquisas ambientais ganham destaque no cenário nacional',
		summary:
			'Projetos focados em mudanças climáticas e energias renováveis recebem maior financiamento.',
		category: 'Meio Ambiente',
		date: '2024-12-18',
		readTime: '5 min',
		views: 9876,
		image: 'https://images.unsplash.com/photo-1569163139394-de44cb2150ed?w=400&h=250&fit=crop',
		author: 'Verde Ciência',
	},
	{
		id: '6',
		title: 'Colaboração Internacional: Brasil firma novos acordos de pesquisa',
		summary:
			'Parcerias com universidades europeias e asiáticas prometem acelerar desenvolvimento científico.',
		category: 'Internacional',
		date: '2024-12-15',
		readTime: '4 min',
		views: 7654,
		image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop',
		author: 'Global Research',
	},
];

const getCategoryIcon = (category: string) => {
	switch (category) {
		case 'Editais':
			return <TrendingUp />;
		case 'Institucional':
			return <School />;
		case 'Ciência & Tecnologia':
			return <Science />;
		case 'Internacional':
			return <Public />;
		default:
			return <Science />;
	}
};

const getCategoryColor = (category: string): string => {
	switch (category) {
		case 'Editais':
			return '#1976d2';
		case 'Institucional':
			return '#dc004e';
		case 'Ciência & Tecnologia':
			return '#00c853';
		case 'Diversidade':
			return '#7b1fa2';
		case 'Meio Ambiente':
			return '#558b2f';
		case 'Internacional':
			return '#00acc1';
		default:
			return '#757575';
	}
};

interface NewsCardProps {
	news: NewsItem;
	featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, featured = false }) => {
	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('pt-BR', {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
		});
	};

	const formatViews = (views: number) => {
		if (views >= 1000) {
			return `${(views / 1000).toFixed(1)}k`;
		}
		return views.toString();
	};

	return (
		<Card
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: featured
					? { xs: 'column', md: 'row' }
					: 'column',
				transition: 'transform 0.2s, box-shadow 0.2s',
				'&:hover': {
					transform: 'translateY(-4px)',
					boxShadow: (theme) => theme.shadows[8],
				},
			}}
		>
			<CardMedia
				component="img"
				image={news.image}
				alt={news.title}
				sx={{
					height: featured ? { xs: 200, md: 'auto' } : 200,
					width: featured ? { xs: '100%', md: 300 } : '100%',
					objectFit: 'cover',
				}}
			/>
			<CardContent
				sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}
			>
				<Box sx={{ mb: 2 }}>
					<Chip
						icon={getCategoryIcon(news.category)}
						label={news.category}
						size="small"
						sx={{
							backgroundColor: `${getCategoryColor(
								news.category
							)}15`,
							color: getCategoryColor(news.category),
							fontWeight: 'bold',
						}}
					/>
				</Box>

				<Typography
					variant={featured ? 'h5' : 'h6'}
					component="h3"
					gutterBottom
					sx={{
						fontWeight: 'bold',
						lineHeight: 1.3,
						display: '-webkit-box',
						WebkitLineClamp: featured ? 3 : 2,
						WebkitBoxOrient: 'vertical',
						overflow: 'hidden',
					}}
				>
					{news.title}
				</Typography>

				<Typography
					variant="body2"
					color="text.secondary"
					paragraph
					sx={{
						flex: 1,
						display: '-webkit-box',
						WebkitLineClamp: 3,
						WebkitBoxOrient: 'vertical',
						overflow: 'hidden',
					}}
				>
					{news.summary}
				</Typography>

				<Box sx={{ mt: 'auto' }}>
					<Stack
						direction="row"
						spacing={2}
						alignItems="center"
						sx={{ mb: 2 }}
					>
						<Stack
							direction="row"
							spacing={1}
							alignItems="center"
							sx={{
								fontSize: '0.875rem',
								color: 'text.secondary',
							}}
						>
							<AccessTime sx={{ fontSize: 16 }} />
							<Typography variant="caption">
								{news.readTime}
							</Typography>
						</Stack>
						<Stack
							direction="row"
							spacing={1}
							alignItems="center"
							sx={{
								fontSize: '0.875rem',
								color: 'text.secondary',
							}}
						>
							<Visibility sx={{ fontSize: 16 }} />
							<Typography variant="caption">
								{formatViews(news.views)}
							</Typography>
						</Stack>
					</Stack>

					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 1,
							}}
						>
							<Avatar
								sx={{
									width: 24,
									height: 24,
									fontSize: '0.75rem',
								}}
							>
								{news.author.charAt(0)}
							</Avatar>
							<Box>
								<Typography
									variant="caption"
									color="text.secondary"
								>
									{news.author}
								</Typography>
								<Typography
									variant="caption"
									display="block"
									color="text.secondary"
								>
									{formatDate(news.date)}
								</Typography>
							</Box>
						</Box>

						<Stack direction="row">
							<IconButton
								size="small"
								color="primary"
								aria-label="salvar notícia"
							>
								<BookmarkBorder fontSize="small" />
							</IconButton>
							<IconButton
								size="small"
								color="primary"
								aria-label="compartilhar notícia"
							>
								<Share fontSize="small" />
							</IconButton>
						</Stack>
					</Stack>
				</Box>
			</CardContent>
		</Card>
	);
};

export const NewsSection: React.FC = () => {
	const featuredNews = newsData.filter((news) => news.featured);
	const regularNews = newsData.filter((news) => !news.featured);

	return (
		<Box>
			<Typography
				variant="h4"
				component="h2"
				gutterBottom
				sx={{ mb: 4, fontWeight: 'bold' }}
			>
				Últimas Notícias
			</Typography>

			{/* Notícias em Destaque */}
			<Box sx={{ mb: 4 }}>
				<Typography
					variant="h6"
					gutterBottom
					sx={{ mb: 3, color: 'primary.main' }}
				>
					Em Destaque
				</Typography>
				<Stack spacing={3}>
					{featuredNews.map((news) => (
						<NewsCard key={news.id} news={news} featured />
					))}
				</Stack>
			</Box>

			{/* Outras Notícias */}
			<Box>
				<Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
					Outras Notícias
				</Typography>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							xs: '1fr',
							md: '1fr 1fr',
							lg: '1fr 1fr 1fr',
						},
						gap: 3,
					}}
				>
					{regularNews.map((news) => (
						<NewsCard key={news.id} news={news} />
					))}
				</Box>
			</Box>

			<Box sx={{ textAlign: 'center', mt: 4 }}>
				<Button variant="outlined" size="large">
					Ver Todas as Notícias
				</Button>
			</Box>
		</Box>
	);
};
