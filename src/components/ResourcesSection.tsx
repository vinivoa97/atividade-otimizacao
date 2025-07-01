import React from 'react';
import {
	Box,
	Card,
	CardContent,
	Typography,
	Button,
	Stack,
	Chip,
	Avatar,
	IconButton,
	Tooltip,
	LinearProgress,
} from '@mui/material';
import {
	Analytics,
	Share,
	FileDownload,
	Description,
	Api,
	TrendingUp,
	Visibility,
	GetApp,
	Launch,
	Star,
	Update,
	Security,
	Speed,
} from '@mui/icons-material';

const tools = [
	{
		id: 1,
		name: 'Gerador de Relatórios',
		description:
			'Crie relatórios detalhados de suas pesquisas e publicações automaticamente',
		icon: <Analytics />,
		category: 'Produtividade',
		popularity: 95,
		downloads: 45672,
		rating: 4.8,
		features: [
			'Relatórios em PDF',
			'Gráficos automáticos',
			'Exportação Excel',
			'Templates customizáveis',
		],
		color: '#1976d2',
		isNew: false,
		isPremium: false,
	},
	{
		id: 2,
		name: 'Exportador de Currículo',
		description: 'Exporte seu currículo em diversos formatos profissionais',
		icon: <FileDownload />,
		category: 'Exportação',
		popularity: 88,
		downloads: 32145,
		rating: 4.6,
		features: [
			'PDF profissional',
			'Word editável',
			'LaTeX',
			'HTML responsivo',
		],
		color: '#00c853',
		isNew: false,
		isPremium: false,
	},
	{
		id: 3,
		name: 'API de Integração',
		description: 'Integre dados do Lattes em seus sistemas institucionais',
		icon: <Api />,
		category: 'Desenvolvimento',
		popularity: 72,
		downloads: 8934,
		rating: 4.9,
		features: [
			'REST API',
			'Webhooks',
			'Documentação completa',
			'SDKs múltiplas',
		],
		color: '#ff6f00',
		isNew: true,
		isPremium: true,
	},
	{
		id: 4,
		name: 'Compartilhamento Social',
		description: 'Compartilhe suas conquistas acadêmicas nas redes sociais',
		icon: <Share />,
		category: 'Social',
		popularity: 91,
		downloads: 28743,
		rating: 4.4,
		features: [
			'LinkedIn',
			'Twitter',
			'Facebook',
			'Templates personalizados',
		],
		color: '#7b1fa2',
		isNew: false,
		isPremium: false,
	},
	{
		id: 5,
		name: 'Análise de Impacto',
		description: 'Analise o impacto de suas publicações e colaborações',
		icon: <TrendingUp />,
		category: 'Analytics',
		popularity: 85,
		downloads: 19876,
		rating: 4.7,
		features: [
			'Métricas de citação',
			'Análise de colaboração',
			'Gráficos interativos',
			'Relatórios mensais',
		],
		color: '#dc004e',
		isNew: true,
		isPremium: true,
	},
	{
		id: 6,
		name: 'Visualizador de Dados',
		description: 'Visualize seus dados acadêmicos de forma interativa',
		icon: <Visibility />,
		category: 'Visualização',
		popularity: 79,
		downloads: 15432,
		rating: 4.5,
		features: [
			'Gráficos 3D',
			'Mapas interativos',
			'Timeline dinâmica',
			'Dashboards personalizados',
		],
		color: '#00acc1',
		isNew: false,
		isPremium: false,
	},
];

const resourceCategories = [
	{ name: 'Todos', count: tools.length },
	{
		name: 'Produtividade',
		count: tools.filter((t) => t.category === 'Produtividade').length,
	},
	{
		name: 'Exportação',
		count: tools.filter((t) => t.category === 'Exportação').length,
	},
	{
		name: 'Analytics',
		count: tools.filter((t) => t.category === 'Analytics').length,
	},
	{
		name: 'Desenvolvimento',
		count: tools.filter((t) => t.category === 'Desenvolvimento').length,
	},
	{
		name: 'Social',
		count: tools.filter((t) => t.category === 'Social').length,
	},
	{
		name: 'Visualização',
		count: tools.filter((t) => t.category === 'Visualização').length,
	},
];

interface ToolCardProps {
	tool: (typeof tools)[0];
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => (
	<Card
		sx={{
			height: '100%',
			transition: 'all 0.3s ease',
			position: 'relative',
			'&:hover': {
				transform: 'translateY(-8px)',
				boxShadow: 8,
			},
		}}
	>
		{tool.isNew && (
			<Chip
				label="NOVO"
				size="small"
				color="success"
				sx={{
					position: 'absolute',
					top: 16,
					right: 16,
					zIndex: 1,
					fontWeight: 'bold',
				}}
			/>
		)}

		{tool.isPremium && (
			<Chip
				label="PRO"
				size="small"
				color="warning"
				sx={{
					position: 'absolute',
					top: tool.isNew ? 50 : 16,
					right: 16,
					zIndex: 1,
					fontWeight: 'bold',
				}}
			/>
		)}

		<CardContent sx={{ p: 3 }}>
			{/* Header */}
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
				<Avatar
					sx={{
						bgcolor: tool.color,
						width: 56,
						height: 56,
					}}
				>
					{tool.icon}
				</Avatar>
				<Box sx={{ flex: 1 }}>
					<Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
						{tool.name}
					</Typography>
					<Chip
						label={tool.category}
						size="small"
						variant="outlined"
						sx={{ fontSize: '0.75rem' }}
					/>
				</Box>
			</Box>

			{/* Description */}
			<Typography
				variant="body2"
				color="text.secondary"
				sx={{ mb: 3, lineHeight: 1.6 }}
			>
				{tool.description}
			</Typography>

			{/* Stats */}
			<Box sx={{ mb: 3 }}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						mb: 2,
					}}
				>
					<Typography variant="body2" color="text.secondary">
						Popularidade
					</Typography>
					<Typography variant="body2" sx={{ fontWeight: 'bold' }}>
						{tool.popularity}%
					</Typography>
				</Box>
				<LinearProgress
					aria-label="Carregando resultados da busca"
					role="progressbar"
					variant="determinate"
					value={tool.popularity}
					sx={{ height: 6, borderRadius: 3, mb: 2 }}
				/>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<GetApp
							sx={{ fontSize: 16, color: 'text.secondary' }}
						/>
						<Typography variant="body2" color="text.secondary">
							{tool.downloads.toLocaleString()} downloads
						</Typography>
					</Box>
					<Box
						sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
					>
						<Star sx={{ fontSize: 16, color: 'warning.main' }} />
						<Typography variant="body2" sx={{ fontWeight: 'bold' }}>
							{tool.rating}
						</Typography>
					</Box>
				</Box>
			</Box>

			{/* Features */}
			<Box sx={{ mb: 3 }}>
				<Typography
					variant="subtitle2"
					sx={{ fontWeight: 'bold', mb: 1 }}
				>
					Recursos principais:
				</Typography>
				<Stack spacing={1}>
					{tool.features.slice(0, 3).map((feature, index) => (
						<Typography
							key={index}
							variant="body2"
							color="text.secondary"
							sx={{ fontSize: '0.875rem' }}
						>
							• {feature}
						</Typography>
					))}
					{tool.features.length > 3 && (
						<Typography
							variant="body2"
							color="primary.main"
							sx={{ fontSize: '0.875rem', fontWeight: 500 }}
						>
							+ {tool.features.length - 3} recursos adicionais
						</Typography>
					)}
				</Stack>
			</Box>

			{/* Actions */}
			<Stack direction="row" spacing={1}>
				<Button
					variant="contained"
					fullWidth
					startIcon={<Launch />}
					sx={{
						background: `linear-gradient(45deg, ${tool.color} 30%, ${tool.color}90 90%)`,
						'&:hover': {
							background: `linear-gradient(45deg, ${tool.color}90 30%, ${tool.color}70 90%)`,
						},
					}}
				>
					{tool.isPremium ? 'Testar Grátis' : 'Usar Agora'}
				</Button>
				<Tooltip title="Mais informações">
					<IconButton color="primary">
						<Description />
					</IconButton>
				</Tooltip>
			</Stack>
		</CardContent>
	</Card>
);

export const ResourcesSection: React.FC = () => {
	const [selectedCategory, setSelectedCategory] = React.useState('Todos');

	const filteredTools =
		selectedCategory === 'Todos'
			? tools
			: tools.filter((tool) => tool.category === selectedCategory);

	return (
		<Box>
			<Typography
				variant="h4"
				component="h2"
				gutterBottom
				sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}
			>
				Ferramentas e Recursos
			</Typography>
			<Typography
				variant="body1"
				color="text.secondary"
				paragraph
				sx={{ textAlign: 'center', mb: 6 }}
			>
				Descubra ferramentas poderosas para potencializar sua carreira
				acadêmica
			</Typography>

			{/* Categorias */}
			<Box sx={{ mb: 6 }}>
				<Stack
					direction="row"
					spacing={1}
					sx={{ flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}
				>
					{resourceCategories.map((category) => (
						<Chip
							key={category.name}
							label={`${category.name} (${category.count})`}
							onClick={() => setSelectedCategory(category.name)}
							color={
								selectedCategory === category.name
									? 'primary'
									: 'default'
							}
							variant={
								selectedCategory === category.name
									? 'filled'
									: 'outlined'
							}
							clickable
							sx={{
								fontWeight:
									selectedCategory === category.name
										? 'bold'
										: 'normal',
							}}
						/>
					))}
				</Stack>
			</Box>

			{/* Grid de ferramentas */}
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: '1fr',
						md: 'repeat(2, 1fr)',
						lg: 'repeat(3, 1fr)',
					},
					gap: 3,
					mb: 6,
				}}
			>
				{filteredTools.map((tool) => (
					<ToolCard key={tool.id} tool={tool} />
				))}
			</Box>

			{/* Seção de recursos adicionais */}
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
					gap: 3,
				}}
			>
				<Card sx={{ textAlign: 'center', p: 3 }}>
					<CardContent>
						<Update
							sx={{ fontSize: 48, color: 'primary.main', mb: 2 }}
						/>
						<Typography
							variant="h6"
							sx={{ fontWeight: 'bold', mb: 1 }}
						>
							Atualizações Regulares
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Novas funcionalidades e melhorias são adicionadas
							mensalmente
						</Typography>
					</CardContent>
				</Card>

				<Card sx={{ textAlign: 'center', p: 3 }}>
					<CardContent>
						<Security
							sx={{ fontSize: 48, color: 'success.main', mb: 2 }}
						/>
						<Typography
							variant="h6"
							sx={{ fontWeight: 'bold', mb: 1 }}
						>
							Segurança Garantida
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Todos os dados são processados com criptografia de
							ponta a ponta
						</Typography>
					</CardContent>
				</Card>

				<Card sx={{ textAlign: 'center', p: 3 }}>
					<CardContent>
						<Speed
							sx={{ fontSize: 48, color: 'warning.main', mb: 2 }}
						/>
						<Typography
							variant="h6"
							sx={{ fontWeight: 'bold', mb: 1 }}
						>
							Performance Otimizada
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Processamento rápido mesmo com grandes volumes de
							dados
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</Box>
	);
};
