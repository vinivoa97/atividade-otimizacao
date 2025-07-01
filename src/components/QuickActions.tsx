import React from 'react';
import {
	Box,
	Card,
	CardContent,
	Typography,
	Button,
	Stack,
	Chip,
	LinearProgress,
} from '@mui/material';
import {
	Search,
	Analytics,
	Group,
	TrendingUp,
	CloudDownload,
	FileUpload,
	AccountCircle,
	BarChart,
	People,
	Business,
	AddCircleOutline,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface QuickActionProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	path?: string;
	color: string;
	comingSoon?: boolean;
	onClick?: () => void;
}

const QuickAction: React.FC<QuickActionProps> = ({
	icon,
	title,
	description,
	path,
	color,
	comingSoon = false,
	onClick,
}) => {
	const navigate = useNavigate();

	const handleClick = () => {
		if (onClick) {
			onClick();
		} else if (path) {
			navigate(path);
		}
	};

	return (
		<Card
			sx={{
				height: '100%',
				cursor: comingSoon ? 'default' : 'pointer',
				opacity: comingSoon ? 0.7 : 1,
				transition: 'all 0.2s',
				'&:hover': comingSoon
					? {}
					: {
							transform: 'translateY(-4px)',
							boxShadow: (theme) => theme.shadows[8],
					  },
				position: 'relative',
				overflow: 'visible',
			}}
			onClick={comingSoon ? undefined : handleClick}
		>
			{comingSoon && (
				<Chip
					label="Em Breve"
					size="small"
					color="primary"
					sx={{
						position: 'absolute',
						top: -8,
						right: -8,
						zIndex: 1,
						fontWeight: 'bold',
					}}
				/>
			)}
			<CardContent sx={{ textAlign: 'center', py: 4 }}>
				<Box
					sx={{
						width: 80,
						height: 80,
						borderRadius: '50%',
						backgroundColor: `${color}15`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						mx: 'auto',
						mb: 2,
						color: color,
						fontSize: 40,
					}}
				>
					{icon}
				</Box>
				<Typography
					variant="h6"
					gutterBottom
					sx={{ fontWeight: 'bold' }}
				>
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
};

interface ServiceCardProps {
	title: string;
	description: string;
	features: string[];
	icon: React.ReactNode;
	color: string;
	usage?: string;
	growth?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	title,
	description,
	features,
	icon,
	color,
	usage,
	growth,
}) => (
	<Card sx={{ height: '100%' }}>
		<CardContent>
			<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
				<Box
					sx={{
						width: 48,
						height: 48,
						borderRadius: '12px',
						backgroundColor: `${color}15`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						mr: 2,
						color: color,
						fontSize: 24,
					}}
				>
					{icon}
				</Box>
				<Box sx={{ flex: 1 }}>
					<Typography
						variant="h6"
						gutterBottom
						sx={{ fontWeight: 'bold' }}
					>
						{title}
					</Typography>
					{growth && (
						<Stack direction="row" alignItems="center" spacing={1}>
							<TrendingUp
								sx={{ fontSize: 16, color: 'success.main' }}
							/>
							<Typography
								variant="caption"
								color="success.main"
								sx={{ fontWeight: 'bold' }}
							>
								+{growth}% este ano
							</Typography>
						</Stack>
					)}
				</Box>
			</Box>

			<Typography variant="body2" color="text.secondary" paragraph>
				{description}
			</Typography>

			<Box sx={{ mb: 3 }}>
				<Stack direction="row" flexWrap="wrap" gap={1}>
					{features.map((feature, index) => (
						<Chip
							key={index}
							label={feature}
							size="small"
							variant="outlined"
							sx={{ fontSize: '0.75rem' }}
						/>
					))}
				</Stack>
			</Box>

			{usage && (
				<Box sx={{ mb: 2 }}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							mb: 1,
						}}
					>
						<Typography variant="caption" color="text.secondary">
							Uso da plataforma
						</Typography>
						<Typography variant="caption" color="text.secondary">
							{usage}
						</Typography>
					</Box>
					<LinearProgress
						aria-label="Carregando resultados da busca"
						role="progressbar"
						variant="determinate"
						value={parseInt(usage.replace('%', ''))}
						sx={{ height: 6, borderRadius: 3 }}
					/>
				</Box>
			)}

			<Button variant="outlined" fullWidth sx={{ mt: 'auto' }}>
				Acessar Serviço
			</Button>
		</CardContent>
	</Card>
);

export const QuickActionsSection: React.FC = () => {
	const quickActions = [
		{
			icon: <AddCircleOutline />,
			title: 'Criar Currículo',
			description:
				'Crie seu currículo Lattes de forma rápida e intuitiva',
			color: '#1976d2',
			onClick: () => alert('Redirecionando para criação de currículo...'),
		},
		{
			icon: <Search />,
			title: 'Buscar Pesquisadores',
			description:
				'Encontre pesquisadores por área, instituição ou palavra-chave',
			path: '/busca',
			color: '#dc004e',
		},
		{
			icon: <CloudDownload />,
			title: 'Exportar Dados',
			description: 'Baixe relatórios e dados da plataforma Lattes',
			color: '#00c853',
			comingSoon: true,
		},
		{
			icon: <Analytics />,
			title: 'Painel Analytics',
			description: 'Visualize estatísticas e métricas da sua produção',
			color: '#7b1fa2',
			comingSoon: true,
		},
		{
			icon: <FileUpload />,
			title: 'Importar Dados',
			description: 'Importe dados de outras plataformas acadêmicas',
			color: '#ff6f00',
			comingSoon: true,
		},
		{
			icon: <Group />,
			title: 'Grupos de Pesquisa',
			description: 'Explore e participe de grupos de pesquisa',
			color: '#00acc1',
			comingSoon: true,
		},
	];

	return (
		<Box>
			<Typography
				variant="h4"
				component="h2"
				gutterBottom
				sx={{ mb: 4, fontWeight: 'bold' }}
			>
				Ações Rápidas
			</Typography>

			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: '1fr 1fr',
						md: '1fr 1fr 1fr',
						lg: '1fr 1fr 1fr 1fr 1fr 1fr',
					},
					gap: 3,
					mb: 6,
				}}
			>
				{quickActions.map((action, index) => (
					<QuickAction key={index} {...action} />
				))}
			</Box>
		</Box>
	);
};

export const ServicesSection: React.FC = () => {
	const services = [
		{
			title: 'Plataforma Lattes',
			description:
				'O principal sistema de currículos acadêmicos do Brasil, integrado com toda a comunidade científica nacional.',
			features: [
				'Currículo Digital',
				'Validação Automática',
				'Métricas',
				'Relatórios',
			],
			icon: <AccountCircle />,
			color: '#1976d2',
			usage: '94%',
			growth: 12,
		},
		{
			title: 'Diretório de Grupos',
			description:
				'Base de dados dos grupos de pesquisa em atividade no país, certificados pelas instituições.',
			features: [
				'Busca Avançada',
				'Certificação',
				'Networking',
				'Colaboração',
			],
			icon: <People />,
			color: '#dc004e',
			usage: '87%',
			growth: 8,
		},
		{
			title: 'Painel Lattes',
			description:
				'Ferramenta de análise e visualização de dados da produção científica nacional.',
			features: ['Dashboard', 'Análises', 'Exportação', 'Comparações'],
			icon: <BarChart />,
			color: '#00c853',
			usage: '76%',
			growth: 23,
		},
		{
			title: 'Diretório de Instituições',
			description:
				'Catálogo completo das instituições de ensino superior e pesquisa do Brasil.',
			features: [
				'Cadastro Completo',
				'Geolocalização',
				'Ranking',
				'Estatísticas',
			],
			icon: <Business />,
			color: '#ff6f00',
			usage: '91%',
			growth: 5,
		},
	];

	return (
		<Box>
			<Typography
				variant="h4"
				component="h2"
				gutterBottom
				sx={{ mb: 1, fontWeight: 'bold' }}
			>
				Nossos Serviços
			</Typography>
			<Typography
				variant="body1"
				color="text.secondary"
				paragraph
				sx={{ mb: 4 }}
			>
				Conheça as principais ferramentas que compõem o ecossistema
				Lattes
			</Typography>

			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
					gap: 3,
				}}
			>
				{services.map((service, index) => (
					<ServiceCard key={index} {...service} />
				))}
			</Box>
		</Box>
	);
};
