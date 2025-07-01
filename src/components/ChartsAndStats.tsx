import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	PieChart,
	Pie,
	Cell,
	LineChart,
	Line,
} from 'recharts';

// Dados simulados para gráficos - cores otimizadas para acessibilidade
const researchGroupsData = [
	{ area: 'Ciência da Computação', grupos: 2453, cor: '#1565c0' },
	{ area: 'Engenharias', grupos: 1876, cor: '#c62828' },
	{ area: 'Ciências Biológicas', grupos: 1654, cor: '#2e7d32' },
	{ area: 'Ciências da Saúde', grupos: 1432, cor: '#ef6c00' },
	{ area: 'Ciências Humanas', grupos: 1298, cor: '#6a1b9a' },
	{ area: 'Ciências Exatas', grupos: 987, cor: '#00838f' },
	{ area: 'Ciências Agrárias', grupos: 765, cor: '#33691e' },
];

const publicationsYearData = [
	{ ano: '2019', publicacoes: 45621 },
	{ ano: '2020', publicacoes: 52340 },
	{ ano: '2021', publicacoes: 58921 },
	{ ano: '2022', publicacoes: 64532 },
	{ ano: '2023', publicacoes: 71240 },
	{ ano: '2024', publicacoes: 68934 },
];

const regionData = [
	{ regiao: 'Sudeste', pesquisadores: 189432, cor: '#1565c0' },
	{ regiao: 'Sul', pesquisadores: 87654, cor: '#c62828' },
	{ regiao: 'Nordeste', pesquisadores: 76543, cor: '#2e7d32' },
	{ regiao: 'Centro-Oeste', pesquisadores: 32109, cor: '#ef6c00' },
	{ regiao: 'Norte', pesquisadores: 21098, cor: '#6a1b9a' },
];

interface StatsCardProps {
	title: string;
	value: string | number;
	subtitle?: string;
	color?: string;
	trend?: 'up' | 'down' | 'stable';
}

const StatsCard: React.FC<StatsCardProps> = ({
	title,
	value,
	subtitle,
	color = '#1565c0',
}) => (
	<Card
		sx={{
			height: '100%',
			background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
			border: `1px solid ${color}30`,
		}}
		role="region"
		aria-label={`Estatística: ${title}`}
	>
		<CardContent sx={{ textAlign: 'center', py: 3 }}>
			<Typography
				variant="h3"
				component="div"
				sx={{
					color: color,
					fontWeight: 'bold',
					mb: 1,
					textShadow: '0 1px 2px rgba(0,0,0,0.1)',
				}}
				aria-label={`${
					typeof value === 'number'
						? value.toLocaleString('pt-BR')
						: value
				} ${title}`}
			>
				{typeof value === 'number'
					? value.toLocaleString('pt-BR')
					: value}
			</Typography>
			<Typography
				variant="h6"
				sx={{
					color: '#2e2e2e',
					fontWeight: 600,
				}}
				gutterBottom
			>
				{title}
			</Typography>
			{subtitle && (
				<Typography
					variant="body2"
					sx={{
						color: '#525252',
						fontWeight: 500,
					}}
				>
					{subtitle}
				</Typography>
			)}
		</CardContent>
	</Card>
);

interface ChartCardProps {
	title: string;
	children: React.ReactNode;
	height?: number;
}

const ChartCard: React.FC<ChartCardProps> = ({
	title,
	children,
	height = 300,
}) => (
	<Card sx={{ height: '100%' }}>
		<CardContent>
			<Typography
				variant="h6"
				gutterBottom
				sx={{ mb: 3, fontWeight: 'bold' }}
			>
				{title}
			</Typography>
			<Box sx={{ height, width: '100%' }}>{children}</Box>
		</CardContent>
	</Card>
);

export const StatsSection: React.FC = () => (
	<Box
		sx={{
			display: 'grid',
			gridTemplateColumns: {
				xs: '1fr',
				sm: '1fr 1fr',
				lg: '1fr 1fr 1fr 1fr',
			},
			gap: 3,
		}}
	>
		<StatsCard
			title="Currículos Cadastrados"
			value={4876543}
			subtitle="Pesquisadores ativos"
			color="#1976d2"
		/>
		<StatsCard
			title="Grupos de Pesquisa"
			value={38456}
			subtitle="Em todas as áreas"
			color="#dc004e"
		/>
		<StatsCard
			title="Publicações (2024)"
			value={987654}
			subtitle="Artigos e trabalhos"
			color="#00c853"
		/>
		<StatsCard
			title="Instituições"
			value={2543}
			subtitle="IES cadastradas"
			color="#ff6f00"
		/>
	</Box>
);

export const ResearchGroupsChart: React.FC = () => (
	<ChartCard title="Distribuição de Grupos de Pesquisa por Área" height={350}>
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				data={researchGroupsData}
				margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
				aria-label="Gráfico de barras mostrando a distribuição de grupos de pesquisa por área do conhecimento"
				role="img"
			>
				<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
				<XAxis
					dataKey="area"
					angle={-45}
					textAnchor="end"
					height={100}
					fontSize={12}
					stroke="#424242"
				/>
				<YAxis stroke="#424242" />
				<Tooltip
					formatter={(value: number) => [
						`${value.toLocaleString()} grupos`,
						'Quantidade',
					]}
					labelStyle={{ color: '#000' }}
					contentStyle={{
						backgroundColor: '#fff',
						border: '1px solid #ccc',
						borderRadius: '4px',
					}}
				/>
				<Bar
					dataKey="grupos"
					fill="#1565c0"
					radius={[4, 4, 0, 0]}
					aria-label="Quantidade de grupos de pesquisa por área"
				/>
			</BarChart>
		</ResponsiveContainer>
	</ChartCard>
);

export const PublicationsChart: React.FC = () => (
	<ChartCard title="Evolução das Publicações por Ano" height={300}>
		<ResponsiveContainer width="100%" height="100%">
			<LineChart
				data={publicationsYearData}
				aria-label="Gráfico de linha mostrando a evolução das publicações ao longo dos anos"
				role="img"
			>
				<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
				<XAxis dataKey="ano" stroke="#424242" />
				<YAxis stroke="#424242" />
				<Tooltip
					formatter={(value: number) => [
						`${value.toLocaleString()} publicações`,
						'Total',
					]}
					labelStyle={{ color: '#000' }}
					contentStyle={{
						backgroundColor: '#fff',
						border: '1px solid #ccc',
						borderRadius: '4px',
					}}
				/>
				<Line
					type="monotone"
					dataKey="publicacoes"
					stroke="#c62828"
					strokeWidth={3}
					dot={{ fill: '#c62828', strokeWidth: 2, r: 6 }}
					aria-label="Linha representando o número de publicações por ano"
				/>
			</LineChart>
		</ResponsiveContainer>
	</ChartCard>
);

export const RegionalChart: React.FC = () => (
	<ChartCard title="Pesquisadores por Região" height={350}>
		<ResponsiveContainer width="100%" height="100%">
			<PieChart
				aria-label="Gráfico de pizza mostrando a distribuição de pesquisadores por região do Brasil"
				role="img"
			>
				<Pie
					data={regionData}
					cx="50%"
					cy="50%"
					outerRadius={120}
					dataKey="pesquisadores"
					label={({ regiao, percent }) =>
						`${regiao} ${
							percent ? (percent * 100).toFixed(1) : '0'
						}%`
					}
					aria-label="Distribuição percentual de pesquisadores por região"
				>
					{regionData.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={entry.cor} />
					))}
				</Pie>
				<Tooltip
					formatter={(value: number) => [
						`${value.toLocaleString()} pesquisadores`,
						'Total',
					]}
					contentStyle={{
						backgroundColor: '#fff',
						border: '1px solid #ccc',
						borderRadius: '4px',
					}}
				/>
			</PieChart>
		</ResponsiveContainer>
	</ChartCard>
);
