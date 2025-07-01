import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import SEO from './components/SEO';
import { HeroSection } from './components/HeroSection';
import {
	StatsSection,
	ResearchGroupsChart,
	PublicationsChart,
	RegionalChart,
} from './components/ChartsAndStats';
import {
	QuickActionsSection,
	ServicesSection,
} from './components/QuickActions';
import { NewsSection } from './components/NewsSection';

export default function Blog() {
	const navigate = useNavigate();

	const exampleProfiles = [
		{
			id: 'example1',
			name: 'Dr. João Silva Santos',
			institution: 'Universidade Federal da Bahia',
			area: 'Ciência da Computação',
		},
		{
			id: 'example2',
			name: 'Dra. Maria Oliveira Costa',
			institution: 'Universidade de São Paulo',
			area: 'Engenharia de Software',
		},
		{
			id: 'example3',
			name: 'Dr. Carlos Pereira Lima',
			institution: 'Instituto Federal da Bahia',
			area: 'Inteligência Artificial',
		},
	];

	return (
		<>
			<SEO />

			{/* Hero Section */}
			<HeroSection />

			{/* Main Content */}
			<Container maxWidth="lg" sx={{ py: 8 }}>
				{/* Seção de Estatísticas */}
				<Box sx={{ mb: 8 }}>
					<StatsSection />
				</Box>

				{/* Ações Rápidas */}
				<Box sx={{ mb: 8 }}>
					<QuickActionsSection />
				</Box>

				{/* Gráficos e Visualizações */}
				<Box sx={{ mb: 8 }}>
					<Typography
						variant="h4"
						component="h2"
						gutterBottom
						sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}
					>
						Dados e Estatísticas
					</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
						paragraph
						sx={{ textAlign: 'center', mb: 6 }}
					>
						Explore os dados mais recentes da comunidade científica
						brasileira
					</Typography>

					<Stack spacing={4}>
						{/* Primeira linha - Grupos de Pesquisa */}
						<ResearchGroupsChart />

						{/* Segunda linha - Publicações e Regiões */}
						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: {
									xs: '1fr',
									lg: '1fr 1fr',
								},
								gap: 4,
							}}
						>
							<PublicationsChart />
							<RegionalChart />
						</Box>
					</Stack>
				</Box>

				{/* Exemplos de Currículos */}
				<Box sx={{ mb: 8 }}>
					<Typography
						variant="h4"
						component="h2"
						gutterBottom
						sx={{ mb: 1, fontWeight: 'bold', textAlign: 'center' }}
					>
						Explore Currículos de Destaque
					</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
						paragraph
						sx={{ textAlign: 'center', mb: 6 }}
					>
						Conheça o trabalho de pesquisadores renomados em
						diversas áreas do conhecimento
					</Typography>
					<Stack spacing={3}>
						{exampleProfiles.map((profile) => (
							<Card
								key={profile.id}
								sx={{
									cursor: 'pointer',
									transition: 'all 0.3s ease',
									'&:hover': {
										transform: 'translateY(-4px)',
										boxShadow: (theme) => theme.shadows[8],
									},
								}}
								onClick={() =>
									navigate(`/curriculo/${profile.id}`)
								}
							>
								<CardContent>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}
									>
										<Box>
											<Typography
												variant="h6"
												component="h3"
												gutterBottom
												sx={{ fontWeight: 'bold' }}
											>
												{profile.name}
											</Typography>
											<Typography
												variant="body2"
												color="text.secondary"
											>
												{profile.area} •{' '}
												{profile.institution}
											</Typography>
										</Box>
										<Button
											variant="contained"
											onClick={(e) => {
												e.stopPropagation();
												navigate(
													`/curriculo/${profile.id}`
												);
											}}
											sx={{
												background:
													'linear-gradient(45deg, #1976d2 30%, #1565c0 90%)',
												'&:hover': {
													background:
														'linear-gradient(45deg, #1565c0 30%, #0d47a1 90%)',
												},
											}}
										>
											Ver Currículo
										</Button>
									</Box>
								</CardContent>
							</Card>
						))}
					</Stack>
				</Box>

				{/* Nossos Serviços */}
				<Box sx={{ mb: 8 }}>
					<ServicesSection />
				</Box>

				{/* Seção de Notícias */}
				<Box sx={{ mb: 8 }}>
					<NewsSection />
				</Box>
			</Container>
		</>
	);
}
