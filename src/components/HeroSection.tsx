import React from 'react';
import {
	Box,
	Typography,
	Button,
	Stack,
	Chip,
	Container,
	Avatar,
} from '@mui/material';
import {
	Search,
	TrendingUp,
	PlayArrow,
	Verified,
	Security,
	Speed,
	CloudDone,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const HeroSection: React.FC = () => {
	const navigate = useNavigate();

	const features = [
		{
			icon: <Security />,
			title: 'Seguro e Confiável',
			description: 'Dados protegidos com criptografia de ponta',
		},
		{
			icon: <Speed />,
			title: 'Rápido e Eficiente',
			description: 'Busca instantânea entre milhões de perfis',
		},
		{
			icon: <CloudDone />,
			title: 'Sempre Disponível',
			description: 'Acesso 24/7 de qualquer dispositivo',
		},
	];

	return (
		<Box
			sx={{
				backgroundColor: 'background.default',
				py: { xs: 6, md: 8 },
				position: 'relative',
			}}
		>
			<Container maxWidth="lg">
				{/* Header com badges */}
				<Box sx={{ textAlign: 'center', mb: 6 }}>
					<Stack
						direction="row"
						spacing={2}
						justifyContent="center"
						sx={{ mb: 4 }}
					>
						<Chip
							icon={<Verified />}
							label="Plataforma Oficial CNPq"
							color="primary"
							sx={{
								fontWeight: 'bold',
								borderRadius: 3,
							}}
						/>
						<Chip
							icon={<TrendingUp />}
							label="Padrão Nacional"
							color="success"
							sx={{
								fontWeight: 'bold',
								borderRadius: 3,
							}}
						/>
					</Stack>

					{/* Título principal */}
					<Typography
						variant="h1"
						component="h1"
						gutterBottom
						sx={{
							fontSize: {
								xs: '2.5rem',
								md: '3.5rem',
								lg: '4rem',
							},
							fontWeight: 800,
							mb: 3,
							color: 'primary.main',
						}}
					>
						Plataforma Lattes
					</Typography>

					<Typography
						variant="h4"
						component="h2"
						gutterBottom
						sx={{
							fontSize: { xs: '1.25rem', md: '1.5rem' },
							fontWeight: 400,
							mb: 4,
							maxWidth: '800px',
							mx: 'auto',
							color: 'text.secondary',
						}}
					>
						Sistema de Informações integrado do CNPq
					</Typography>

					<Typography
						variant="body1"
						sx={{
							fontSize: { xs: '1rem', md: '1.1rem' },
							fontWeight: 400,
							mb: 6,
							maxWidth: '900px',
							mx: 'auto',
							lineHeight: 1.7,
							color: 'text.primary',
						}}
					>
						A Plataforma Lattes representa a experiência do CNPq na
						integração de bases de dados de Currículos, de Grupos de
						pesquisa e de Instituições em um único Sistema de
						Informações. O Currículo Lattes se tornou um padrão
						nacional no registro da vida pregressa e atual dos
						estudantes e pesquisadores do país, sendo hoje adotado
						pela maioria das instituições de fomento, universidades
						e institutos de pesquisa do Brasil.
					</Typography>

					{/* Botões de ação */}
					<Stack
						direction={{ xs: 'column', sm: 'row' }}
						spacing={3}
						justifyContent="center"
						sx={{ mb: 8 }}
					>
						<Button
							variant="contained"
							size="large"
							startIcon={<Search />}
							onClick={() => navigate('/busca')}
							aria-label="Buscar pesquisadores na plataforma Lattes"
							sx={{
								px: 4,
								py: 2,
								fontSize: '1.1rem',
								fontWeight: 'bold',
								borderRadius: 3,
								boxShadow: 3,
								'&:hover': {
									boxShadow: 6,
								},
							}}
						>
							Buscar informações
						</Button>

						<Button
							variant="outlined"
							size="large"
							startIcon={<PlayArrow />}
							aria-label="Ver demonstração da plataforma Lattes"
							sx={{
								px: 4,
								py: 2,
								fontSize: '1.1rem',
								fontWeight: 'bold',
								borderRadius: 3,
							}}
						>
							Ver Demonstração
						</Button>
					</Stack>
				</Box>

				{/* Características principais */}
				<Box sx={{ textAlign: 'center' }}>
					<Typography
						variant="h5"
						component="h3"
						gutterBottom
						sx={{
							fontWeight: 600,
							mb: 4,
							color: 'text.primary',
						}}
					>
						Por que escolher a Plataforma Lattes?
					</Typography>

					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: {
								xs: '1fr',
								md: 'repeat(3, 1fr)',
							},
							gap: 4,
							maxWidth: '800px',
							mx: 'auto',
						}}
					>
						{features.map((feature, index) => (
							<Box
								key={index}
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									textAlign: 'center',
								}}
							>
								<Avatar
									sx={{
										backgroundColor: 'primary.light',
										color: 'primary.main',
										width: 64,
										height: 64,
										mb: 2,
									}}
								>
									{feature.icon}
								</Avatar>
								<Typography
									variant="h6"
									sx={{
										fontWeight: 'bold',
										mb: 1,
										color: 'text.primary',
									}}
								>
									{feature.title}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										maxWidth: 250,
									}}
								>
									{feature.description}
								</Typography>
							</Box>
						))}
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
