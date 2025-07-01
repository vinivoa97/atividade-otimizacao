import React from 'react';
import {
	Box,
	Card,
	CardContent,
	Typography,
	Avatar,
	Rating,
	Stack,
	Chip,
	useTheme,
	alpha,
} from '@mui/material';
import { FormatQuote, Verified, School, Work } from '@mui/icons-material';

const testimonials = [
	{
		id: 1,
		name: 'Dra. Marina Santos',
		role: 'Professora Titular',
		institution: 'USP - Universidade de São Paulo',
		area: 'Inteligência Artificial',
		rating: 5,
		comment:
			'A plataforma revolucionou a forma como compartilho minhas pesquisas. Interface intuitiva e recursos fantásticos para colaboração científica.',
		avatar: 'MS',
		verified: true,
		publications: 187,
		citations: 2456,
	},
	{
		id: 2,
		name: 'Prof. Carlos Oliveira',
		role: 'Pesquisador Sênior',
		institution: 'UNICAMP',
		area: 'Biotecnologia',
		rating: 5,
		comment:
			'Encontrei colaboradores incríveis através desta plataforma. O sistema de busca é muito eficiente e a visualização dos dados é excelente.',
		avatar: 'CO',
		verified: true,
		publications: 134,
		citations: 1876,
	},
	{
		id: 3,
		name: 'Dra. Ana Ferreira',
		role: 'Coordenadora de Pesquisa',
		institution: 'UFMG',
		area: 'Medicina',
		rating: 4,
		comment:
			'Uso diariamente para acompanhar as pesquisas da minha equipe. Os relatórios automáticos economizam muito tempo na gestão dos projetos.',
		avatar: 'AF',
		verified: true,
		publications: 89,
		citations: 1234,
	},
	{
		id: 4,
		name: 'Prof. Roberto Lima',
		role: 'Diretor de Inovação',
		institution: 'UFRJ',
		area: 'Engenharia',
		rating: 5,
		comment:
			'A integração com o Lattes foi perfeita. Agora posso manter meu currículo sempre atualizado sem retrabalho.',
		avatar: 'RL',
		verified: true,
		publications: 156,
		citations: 3421,
	},
];

const platformStats = [
	{
		label: 'Avaliação Média',
		value: '4.8/5',
		icon: '⭐',
		color: '#ffc107',
	},
	{
		label: 'Usuários Satisfeitos',
		value: '94%',
		icon: '😊',
		color: '#4caf50',
	},
	{
		label: 'Recomendações',
		value: '98%',
		icon: '👍',
		color: '#2196f3',
	},
	{
		label: 'Tempo Médio de Uso',
		value: '45min',
		icon: '⏱️',
		color: '#ff9800',
	},
];

interface TestimonialCardProps {
	testimonial: (typeof testimonials)[0];
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
	const theme = useTheme();

	return (
		<Card
			sx={{
				height: '100%',
				position: 'relative',
				transition: 'all 0.3s ease',
				'&:hover': {
					transform: 'translateY(-8px)',
					boxShadow: theme.shadows[12],
				},
			}}
		>
			<CardContent sx={{ p: 3 }}>
				{/* Ícone de aspas */}
				<Box
					sx={{
						position: 'absolute',
						top: -15,
						left: 20,
						bgcolor: 'primary.main',
						borderRadius: '50%',
						width: 40,
						height: 40,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: 'white',
					}}
				>
					<FormatQuote />
				</Box>

				{/* Header do perfil */}
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 2,
						mb: 3,
						mt: 2,
					}}
				>
					<Avatar
						sx={{
							width: 56,
							height: 56,
							bgcolor: 'primary.main',
							fontSize: '1.25rem',
							fontWeight: 'bold',
						}}
					>
						{testimonial.avatar}
					</Avatar>

					<Box sx={{ flex: 1 }}>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 1,
								mb: 1,
							}}
						>
							<Typography
								variant="h6"
								sx={{ fontWeight: 'bold' }}
							>
								{testimonial.name}
							</Typography>
							{testimonial.verified && (
								<Verified
									sx={{ color: 'primary.main', fontSize: 20 }}
								/>
							)}
						</Box>

						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ mb: 1 }}
						>
							{testimonial.role}
						</Typography>

						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 1,
							}}
						>
							<School
								sx={{ fontSize: 16, color: 'text.secondary' }}
							/>
							<Typography
								variant="caption"
								color="text.secondary"
							>
								{testimonial.institution}
							</Typography>
						</Box>
					</Box>
				</Box>

				{/* Rating */}
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 1,
						mb: 2,
					}}
				>
					<Rating value={testimonial.rating} readOnly size="small" />
					<Typography variant="body2" color="text.secondary">
						({testimonial.rating}/5)
					</Typography>
				</Box>

				{/* Comentário */}
				<Typography
					variant="body1"
					sx={{
						mb: 3,
						fontStyle: 'italic',
						lineHeight: 1.6,
						color: 'text.secondary',
					}}
				>
					"{testimonial.comment}"
				</Typography>

				{/* Área de especialização */}
				<Chip
					label={testimonial.area}
					size="small"
					sx={{
						mb: 2,
						bgcolor: alpha(theme.palette.primary.main, 0.1),
					}}
				/>

				{/* Estatísticas */}
				<Box
					sx={{
						display: 'flex',
						gap: 3,
						pt: 2,
						borderTop: 1,
						borderColor: 'divider',
					}}
				>
					<Box sx={{ textAlign: 'center' }}>
						<Typography
							variant="h6"
							sx={{ fontWeight: 'bold', color: 'primary.main' }}
						>
							{testimonial.publications}
						</Typography>
						<Typography variant="caption" color="text.secondary">
							Publicações
						</Typography>
					</Box>
					<Box sx={{ textAlign: 'center' }}>
						<Typography
							variant="h6"
							sx={{ fontWeight: 'bold', color: 'secondary.main' }}
						>
							{testimonial.citations.toLocaleString()}
						</Typography>
						<Typography variant="caption" color="text.secondary">
							Citações
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

const StatCard: React.FC<{ stat: (typeof platformStats)[0] }> = ({ stat }) => (
	<Card sx={{ textAlign: 'center', p: 2 }}>
		<CardContent>
			<Typography variant="h2" sx={{ mb: 1 }}>
				{stat.icon}
			</Typography>
			<Typography
				variant="h4"
				sx={{ fontWeight: 'bold', color: stat.color, mb: 1 }}
			>
				{stat.value}
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{stat.label}
			</Typography>
		</CardContent>
	</Card>
);

export const TestimonialsSection: React.FC = () => (
	<Box>
		<Typography
			variant="h4"
			component="h2"
			gutterBottom
			sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}
		>
			O que Nossos Usuários Dizem
		</Typography>
		<Typography
			variant="body1"
			color="text.secondary"
			paragraph
			sx={{ textAlign: 'center', mb: 6 }}
		>
			Conheça as experiências de pesquisadores que já utilizam nossa
			plataforma
		</Typography>

		{/* Estatísticas da plataforma */}
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: {
					xs: 'repeat(2, 1fr)',
					md: 'repeat(4, 1fr)',
				},
				gap: 2,
				mb: 6,
			}}
		>
			{platformStats.map((stat, index) => (
				<StatCard key={index} stat={stat} />
			))}
		</Box>

		{/* Grid de testemunhos */}
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
				gap: 3,
			}}
		>
			{testimonials.map((testimonial) => (
				<TestimonialCard
					key={testimonial.id}
					testimonial={testimonial}
				/>
			))}
		</Box>

		{/* Call to action */}
		<Box
			sx={{
				textAlign: 'center',
				mt: 6,
				p: 4,
				bgcolor: 'background.paper',
				borderRadius: 2,
			}}
		>
			<Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
				Junte-se à Nossa Comunidade
			</Typography>
			<Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
				Mais de 500.000 pesquisadores já confiam em nossa plataforma
				para gerenciar suas carreiras acadêmicas
			</Typography>
			<Stack direction="row" spacing={2} justifyContent="center">
				<Chip
					icon={<School />}
					label="Gratuito para Pesquisadores"
					color="primary"
					variant="outlined"
				/>
				<Chip
					icon={<Work />}
					label="Suporte Institucional"
					color="secondary"
					variant="outlined"
				/>
				<Chip
					icon={<Verified />}
					label="Dados Seguros"
					color="success"
					variant="outlined"
				/>
			</Stack>
		</Box>
	</Box>
);
