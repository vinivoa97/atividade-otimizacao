import React from 'react';
import {
	Box,
	Card,
	CardContent,
	Typography,
	LinearProgress,
	Chip,
	Avatar,
	Stack,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Badge,
	Tooltip,
} from '@mui/material';
import {
	TrendingUp,
	School,
	Science,
	Group,
	Article,
	LocationOn,
	Notifications,
	ArrowUpward,
	ArrowDownward,
} from '@mui/icons-material';
import {
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip as RechartsTooltip,
	ResponsiveContainer,
	Bar,
	ComposedChart,
	Line,
} from 'recharts';

// Dados simulados para os novos gráficos
const monthlyGrowthData = [
	{ mes: 'Jan', curriculos: 387542, publicacoes: 45621, grupos: 3245 },
	{ mes: 'Fev', curriculos: 392180, publicacoes: 47832, grupos: 3287 },
	{ mes: 'Mar', curriculos: 398756, publicacoes: 52140, grupos: 3334 },
	{ mes: 'Abr', curriculos: 405320, publicacoes: 48963, grupos: 3389 },
	{ mes: 'Mai', curriculos: 412890, publicacoes: 54276, grupos: 3445 },
	{ mes: 'Jun', curriculos: 420145, publicacoes: 56834, grupos: 3502 },
];

const topInstitutions = [
	{ nome: 'USP', curriculos: 45672, crescimento: 12.5, cor: '#1976d2' },
	{ nome: 'UNICAMP', curriculos: 32145, crescimento: 8.3, cor: '#dc004e' },
	{ nome: 'UFRJ', curriculos: 28934, crescimento: 15.2, cor: '#00c853' },
	{ nome: 'UFMG', curriculos: 25678, crescimento: 6.7, cor: '#ff6f00' },
	{ nome: 'UFRGS', curriculos: 23456, crescimento: 9.1, cor: '#7b1fa2' },
];

const topAreas = [
	{ area: 'Ciência da Computação', publicacoes: 15432, percentual: 18.5 },
	{ area: 'Medicina', publicacoes: 12876, percentual: 15.4 },
	{ area: 'Engenharia Elétrica', publicacoes: 9654, percentual: 11.6 },
	{ area: 'Biologia', publicacoes: 8901, percentual: 10.7 },
	{ area: 'Química', publicacoes: 7543, percentual: 9.0 },
];

const recentActivities = [
	{
		id: 1,
		tipo: 'novo_curriculo',
		titulo: 'Dr. Ana Silva cadastrou seu currículo',
		instituicao: 'UFBA',
		tempo: '2 minutos atrás',
		avatar: 'AS',
	},
	{
		id: 2,
		tipo: 'nova_publicacao',
		titulo: 'Nova publicação em IA adicionada',
		instituicao: 'USP',
		tempo: '15 minutos atrás',
		avatar: 'IA',
	},
	{
		id: 3,
		tipo: 'novo_grupo',
		titulo: 'Grupo de Biotecnologia criado',
		instituicao: 'UNICAMP',
		tempo: '1 hora atrás',
		avatar: 'BT',
	},
	{
		id: 4,
		tipo: 'atualizacao',
		titulo: 'Prof. João atualizou suas pesquisas',
		instituicao: 'UFRGS',
		tempo: '2 horas atrás',
		avatar: 'JP',
	},
];

interface MetricCardProps {
	title: string;
	value: number;
	change: number;
	icon: React.ReactNode;
	color: string;
	subtitle?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
	title,
	value,
	change,
	icon,
	color,
	subtitle,
}) => (
	<Card sx={{ height: '100%', position: 'relative', overflow: 'visible' }}>
		<CardContent>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					mb: 2,
				}}
			>
				<Avatar sx={{ bgcolor: color, width: 48, height: 48 }}>
					{icon}
				</Avatar>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
					{change > 0 ? (
						<ArrowUpward
							sx={{ color: 'success.main', fontSize: 16 }}
						/>
					) : (
						<ArrowDownward
							sx={{ color: 'error.main', fontSize: 16 }}
						/>
					)}
					<Typography
						variant="body2"
						sx={{
							color: change > 0 ? 'success.main' : 'error.main',
							fontWeight: 'bold',
						}}
					>
						{Math.abs(change)}%
					</Typography>
				</Box>
			</Box>

			<Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
				{value.toLocaleString()}
			</Typography>

			<Typography
				variant="h6"
				color="text.secondary"
				sx={{ fontWeight: 500 }}
			>
				{title}
			</Typography>

			{subtitle && (
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{ mt: 1 }}
				>
					{subtitle}
				</Typography>
			)}
		</CardContent>
	</Card>
);

export const MetricsOverview: React.FC = () => (
	<Box
		sx={{
			display: 'grid',
			gridTemplateColumns: {
				xs: '1fr',
				sm: 'repeat(2, 1fr)',
				lg: 'repeat(4, 1fr)',
			},
			gap: 3,
		}}
	>
		<MetricCard
			title="Novos Currículos"
			value={1247}
			change={12.5}
			icon={<School />}
			color="#1976d2"
			subtitle="Este mês"
		/>
		<MetricCard
			title="Publicações Recentes"
			value={3856}
			change={8.3}
			icon={<Article />}
			color="#00c853"
			subtitle="Últimos 30 dias"
		/>
		<MetricCard
			title="Grupos Ativos"
			value={892}
			change={15.7}
			icon={<Group />}
			color="#ff6f00"
			subtitle="Com atividade recente"
		/>
		<MetricCard
			title="Colaborações"
			value={2341}
			change={22.1}
			icon={<Science />}
			color="#7b1fa2"
			subtitle="Projetos conjuntos"
		/>
	</Box>
);

export const GrowthChart: React.FC = () => (
	<Card>
		<CardContent>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					mb: 3,
				}}
			>
				<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
					Crescimento da Plataforma
				</Typography>
				<Chip
					icon={<TrendingUp />}
					label="Tendência: Crescimento"
					color="success"
					variant="outlined"
				/>
			</Box>

			<Box sx={{ height: 350 }}>
				<ResponsiveContainer width="100%" height="100%">
					<ComposedChart data={monthlyGrowthData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="mes" />
						<YAxis yAxisId="left" />
						<YAxis yAxisId="right" orientation="right" />
						<RechartsTooltip
							formatter={(value: number, name: string) => [
								value.toLocaleString(),
								name === 'curriculos'
									? 'Currículos'
									: name === 'publicacoes'
									? 'Publicações'
									: 'Grupos',
							]}
						/>
						<Area
							yAxisId="left"
							type="monotone"
							dataKey="curriculos"
							fill="#1976d2"
							stroke="#1976d2"
							fillOpacity={0.3}
						/>
						<Bar yAxisId="right" dataKey="grupos" fill="#ff6f00" />
						<Line
							yAxisId="right"
							type="monotone"
							dataKey="publicacoes"
							stroke="#dc004e"
							strokeWidth={3}
						/>
					</ComposedChart>
				</ResponsiveContainer>
			</Box>
		</CardContent>
	</Card>
);

export const TopInstitutionsRanking: React.FC = () => (
	<Card>
		<CardContent>
			<Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
				Top Instituições por Currículos
			</Typography>

			<Stack spacing={2}>
				{topInstitutions.map((inst, index) => (
					<Box
						key={inst.nome}
						sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
					>
						<Box
							sx={{
								width: 32,
								height: 32,
								borderRadius: '50%',
								bgcolor: inst.cor,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: 'white',
								fontWeight: 'bold',
							}}
						>
							{index + 1}
						</Box>

						<Box sx={{ flex: 1 }}>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									mb: 1,
								}}
							>
								<Typography
									variant="body1"
									sx={{ fontWeight: 'bold' }}
								>
									{inst.nome}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
								>
									{inst.curriculos.toLocaleString()}
								</Typography>
							</Box>

							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: 2,
								}}
							>
								<LinearProgress
									aria-label="Carregando resultados da busca"
									role="progressbar"
									variant="determinate"
									value={
										(inst.curriculos /
											topInstitutions[0].curriculos) *
										100
									}
									sx={{ flex: 1, height: 6, borderRadius: 3 }}
								/>
								<Chip
									size="small"
									label={`+${inst.crescimento}%`}
									color="success"
									variant="outlined"
								/>
							</Box>
						</Box>
					</Box>
				))}
			</Stack>
		</CardContent>
	</Card>
);

export const TopAreasChart: React.FC = () => (
	<Card>
		<CardContent>
			<Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
				Áreas Mais Ativas em Publicações
			</Typography>

			<Stack spacing={2}>
				{topAreas.map((area, index) => (
					<Box key={area.area}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								mb: 1,
							}}
						>
							<Typography
								variant="body1"
								sx={{ fontWeight: 500 }}
							>
								{area.area}
							</Typography>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: 1,
								}}
							>
								<Typography
									variant="body2"
									color="text.secondary"
								>
									{area.publicacoes.toLocaleString()}
								</Typography>
								<Typography
									variant="body2"
									sx={{
										fontWeight: 'bold',
										color: 'primary.main',
									}}
								>
									{area.percentual}%
								</Typography>
							</Box>
						</Box>
						<LinearProgress
							variant="determinate"
							value={area.percentual}
							sx={{ height: 8, borderRadius: 4 }}
						/>
					</Box>
				))}
			</Stack>
		</CardContent>
	</Card>
);

export const RecentActivity: React.FC = () => (
	<Card>
		<CardContent>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					mb: 3,
				}}
			>
				<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
					Atividades Recentes
				</Typography>
				<Tooltip title="Atividades em tempo real">
					<Badge badgeContent={4} color="error">
						<Notifications />
					</Badge>
				</Tooltip>
			</Box>

			<List>
				{recentActivities.map((activity) => (
					<ListItem key={activity.id} sx={{ px: 0 }}>
						<ListItemAvatar>
							<Avatar sx={{ bgcolor: 'primary.main' }}>
								{activity.avatar}
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={activity.titulo}
							secondary={
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										gap: 1,
										mt: 0.5,
									}}
								>
									<LocationOn sx={{ fontSize: 14 }} />
									<Typography variant="caption">
										{activity.instituicao}
									</Typography>
									<Typography
										variant="caption"
										color="text.secondary"
									>
										• {activity.tempo}
									</Typography>
								</Box>
							}
						/>
					</ListItem>
				))}
			</List>
		</CardContent>
	</Card>
);

export const DashboardSection: React.FC = () => (
	<Box>
		<Typography
			variant="h4"
			component="h2"
			gutterBottom
			sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}
		>
			Dashboard em Tempo Real
		</Typography>
		<Typography
			variant="body1"
			color="text.secondary"
			paragraph
			sx={{ textAlign: 'center', mb: 6 }}
		>
			Acompanhe as métricas e atividades mais recentes da plataforma
		</Typography>

		<Stack spacing={4}>
			{/* Métricas principais */}
			<MetricsOverview />
			{/* Gráficos e rankings */}
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: '1fr',
						lg: '2fr 1fr',
					},
					gap: 3,
				}}
			>
				<GrowthChart />
				<RecentActivity />
			</Box>

			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: '1fr',
						md: 'repeat(2, 1fr)',
					},
					gap: 3,
				}}
			>
				<TopInstitutionsRanking />
				<TopAreasChart />
			</Box>
		</Stack>
	</Box>
);
