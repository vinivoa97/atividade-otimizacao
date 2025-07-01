import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	Box,
	Container,
	Typography,
	Paper,
	Chip,
	Divider,
	Avatar,
	Card,
	CardContent,
	List,
	ListItem,
	ListItemText,
	Button,
	Alert,
	Skeleton,
	Stack,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PublicIcon from '@mui/icons-material/Public';
import { useSEO } from '../hooks/useSEO';

// Tipos para dados do currículo Lattes
interface EducationItem {
	degree: string;
	institution: string;
	year: string;
	area: string;
}

interface PublicationItem {
	title: string;
	authors: string[];
	journal: string;
	year: number;
	type: 'article' | 'book' | 'chapter' | 'conference';
}

interface ExperienceItem {
	position: string;
	institution: string;
	period: string;
	description?: string;
}

interface AwardItem {
	title: string;
	institution: string;
	year: number;
	description?: string;
}

interface LattesProfile {
	id: string;
	name: string;
	email?: string;
	institution: string;
	area: string;
	summary: string;
	education: EducationItem[];
	publications: PublicationItem[];
	experience: ExperienceItem[];
	awards: AwardItem[];
	keywords: string[];
	lastUpdate: string;
}

interface LattesPageProps {
	lattesId?: string;
}

const LattesPage: React.FC<LattesPageProps> = () => {
	const { id } = useParams<{ id: string }>();
	const lattesId = id || 'example';

	const [profile, setProfile] = useState<LattesProfile | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// SEO dinâmico
	useSEO({
		title: profile
			? `${profile.name} - Currículo Lattes`
			: 'Currículo Lattes',
		description: profile
			? `Perfil acadêmico de ${profile.name}, ${profile.area} - ${profile.institution}`
			: 'Visualize currículo completo da Plataforma Lattes',
		keywords: profile
			? `${profile.name}, ${profile.area}, ${
					profile.institution
			  }, ${profile.keywords.join(', ')}`
			: 'currículo lattes, pesquisador, acadêmico',
		url: `/curriculo/${lattesId}`,
		type: 'profile',
	});

	// Simulação de dados (substitua por chamada real à API)
	useEffect(() => {
		const fetchProfile = async () => {
			setLoading(true);
			try {
				// Simular delay de API
				await new Promise((resolve) => setTimeout(resolve, 1500));

				// Dados de exemplo (substitua por chamada real à API)
				const mockProfile: LattesProfile = {
					id: lattesId,
					name: 'Dr. João Silva Santos',
					email: 'joao.silva@universidade.br',
					institution: 'Universidade Federal da Bahia',
					area: 'Ciência da Computação',
					summary:
						'Doutor em Ciência da Computação com expertise em Inteligência Artificial e Machine Learning. Possui mais de 15 anos de experiência em pesquisa e desenvolvimento tecnológico, com foco em algoritmos de aprendizado de máquina aplicados a problemas complexos.',
					education: [
						{
							degree: 'Doutorado em Ciência da Computação',
							institution: 'Universidade Federal da Bahia',
							year: '2015',
							area: 'Inteligência Artificial',
						},
						{
							degree: 'Mestrado em Ciência da Computação',
							institution: 'Universidade Federal da Bahia',
							year: '2010',
							area: 'Sistemas Distribuídos',
						},
						{
							degree: 'Bacharelado em Ciência da Computação',
							institution:
								'Universidade Estadual de Feira de Santana',
							year: '2008',
							area: 'Ciência da Computação',
						},
					],
					publications: [
						{
							title: 'Machine Learning Applications in Distributed Systems',
							authors: [
								'João Silva Santos',
								'Maria Oliveira',
								'Carlos Pereira',
							],
							journal: 'Journal of Computer Science',
							year: 2023,
							type: 'article',
						},
						{
							title: 'Algoritmos Evolutivos para Otimização de Redes Neurais',
							authors: ['João Silva Santos', 'Ana Costa'],
							journal: 'Revista Brasileira de Computação',
							year: 2022,
							type: 'article',
						},
						{
							title: 'Inteligência Artificial: Conceitos e Aplicações',
							authors: ['João Silva Santos'],
							journal: 'Editora Tecnológica',
							year: 2021,
							type: 'book',
						},
					],
					experience: [
						{
							position: 'Professor Associado',
							institution: 'Universidade Federal da Bahia',
							period: '2018 - Atual',
							description:
								'Ensino e pesquisa em Inteligência Artificial e Machine Learning',
						},
						{
							position: 'Professor Adjunto',
							institution: 'Universidade Federal da Bahia',
							period: '2015 - 2018',
							description:
								'Desenvolvimento de projetos de pesquisa em IA',
						},
						{
							position: 'Pesquisador Colaborador',
							institution: 'Instituto de Pesquisa Tecnológica',
							period: '2010 - 2015',
							description: 'Pesquisa em algoritmos de otimização',
						},
					],
					awards: [
						{
							title: 'Prêmio Excelência em Pesquisa',
							institution: 'CNPq',
							year: 2023,
							description:
								'Reconhecimento por contribuições significativas em IA',
						},
						{
							title: 'Melhor Artigo Científico',
							institution: 'Congresso Brasileiro de Computação',
							year: 2022,
						},
					],
					keywords: [
						'Inteligência Artificial',
						'Machine Learning',
						'Sistemas Distribuídos',
						'Algoritmos Evolutivos',
					],
					lastUpdate: '2024-01-15',
				};

				setProfile(mockProfile);
			} catch (err) {
				setError(
					'Erro ao carregar o currículo. Tente novamente mais tarde.'
				);
			} finally {
				setLoading(false);
			}
		};

		fetchProfile();
	}, [lattesId]);

	if (loading) {
		return (
			<Container maxWidth="lg" sx={{ py: 4 }}>
				<Box sx={{ mb: 4 }}>
					<Skeleton
						variant="rectangular"
						height={200}
						sx={{ mb: 2 }}
					/>
					<Skeleton variant="text" width="60%" height={60} />
					<Skeleton variant="text" width="40%" height={40} />
				</Box>
				<Stack spacing={3}>
					{[1, 2, 3, 4].map((i) => (
						<Skeleton key={i} variant="rectangular" height={300} />
					))}
				</Stack>
			</Container>
		);
	}

	if (error || !profile) {
		return (
			<Container maxWidth="lg" sx={{ py: 4 }}>
				<Alert severity="error" sx={{ mb: 2 }}>
					{error || 'Currículo não encontrado'}
				</Alert>
				<Button
					variant="contained"
					onClick={() => window.history.back()}
				>
					Voltar
				</Button>
			</Container>
		);
	}

	return (
		<Container maxWidth="lg" sx={{ py: 4 }}>
			{/* Header do Perfil */}
			<Paper elevation={3} sx={{ p: 4, mb: 4 }}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 3,
						mb: 3,
					}}
				>
					<Avatar
						sx={{ width: 80, height: 80, bgcolor: 'primary.main' }}
					>
						<PersonIcon sx={{ fontSize: 40 }} />
					</Avatar>
					<Box sx={{ flex: 1 }}>
						<Typography variant="h3" component="h1" gutterBottom>
							{profile.name}
						</Typography>
						<Typography
							variant="h6"
							color="text.secondary"
							gutterBottom
						>
							{profile.area} • {profile.institution}
						</Typography>
						{profile.email && (
							<Typography variant="body2" color="text.secondary">
								{profile.email}
							</Typography>
						)}
						<Box sx={{ mt: 2 }}>
							{profile.keywords.map((keyword, index) => (
								<Chip
									key={index}
									label={keyword}
									size="small"
									sx={{ mr: 1, mb: 1 }}
									variant="outlined"
								/>
							))}
						</Box>
					</Box>
				</Box>

				<Divider sx={{ my: 3 }} />

				<Typography variant="body1" paragraph>
					{profile.summary}
				</Typography>

				<Typography variant="caption" color="text.secondary">
					Última atualização:{' '}
					{new Date(profile.lastUpdate).toLocaleDateString('pt-BR')}
				</Typography>
			</Paper>

			{/* Seções do Currículo */}
			<Stack spacing={3}>
				{/* Formação e Experiência - Layout lado a lado em telas maiores */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', md: 'row' },
						gap: 3,
					}}
				>
					{/* Formação Acadêmica */}
					<Card sx={{ flex: 1 }}>
						<CardContent>
							<Typography
								variant="h5"
								gutterBottom
								sx={{ display: 'flex', alignItems: 'center' }}
							>
								<SchoolIcon sx={{ mr: 1 }} />
								Formação Acadêmica
							</Typography>
							<List>
								{profile.education.map((edu, index) => (
									<ListItem
										key={index}
										divider={
											index < profile.education.length - 1
										}
									>
										<ListItemText
											primary={edu.degree}
											secondary={
												<>
													<Typography
														variant="body2"
														color="text.primary"
													>
														{edu.institution} •{' '}
														{edu.year}
													</Typography>
													<Typography
														variant="body2"
														color="text.secondary"
													>
														{edu.area}
													</Typography>
												</>
											}
										/>
									</ListItem>
								))}
							</List>
						</CardContent>
					</Card>

					{/* Experiência Profissional */}
					<Card sx={{ flex: 1 }}>
						<CardContent>
							<Typography
								variant="h5"
								gutterBottom
								sx={{ display: 'flex', alignItems: 'center' }}
							>
								<WorkIcon sx={{ mr: 1 }} />
								Experiência Profissional
							</Typography>
							<List>
								{profile.experience.map((exp, index) => (
									<ListItem
										key={index}
										divider={
											index <
											profile.experience.length - 1
										}
									>
										<ListItemText
											primary={exp.position}
											secondary={
												<>
													<Typography
														variant="body2"
														color="text.primary"
													>
														{exp.institution} •{' '}
														{exp.period}
													</Typography>
													{exp.description && (
														<Typography
															variant="body2"
															color="text.secondary"
														>
															{exp.description}
														</Typography>
													)}
												</>
											}
										/>
									</ListItem>
								))}
							</List>
						</CardContent>
					</Card>
				</Box>

				{/* Publicações */}
				<Card>
					<CardContent>
						<Typography
							variant="h5"
							gutterBottom
							sx={{ display: 'flex', alignItems: 'center' }}
						>
							<MenuBookIcon sx={{ mr: 1 }} />
							Publicações ({profile.publications.length})
						</Typography>
						<List>
							{profile.publications.map((pub, index) => (
								<ListItem
									key={index}
									divider={
										index < profile.publications.length - 1
									}
								>
									<ListItemText
										primary={pub.title}
										secondary={
											<>
												<Typography
													variant="body2"
													color="text.primary"
												>
													{pub.authors.join(', ')}
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
												>
													{pub.journal} • {pub.year}
												</Typography>
											</>
										}
									/>
									<Chip
										label={pub.type}
										size="small"
										variant="outlined"
										sx={{ ml: 2 }}
									/>
								</ListItem>
							))}
						</List>
					</CardContent>
				</Card>

				{/* Prêmios e Reconhecimentos */}
				<Card>
					<CardContent>
						<Typography
							variant="h5"
							gutterBottom
							sx={{ display: 'flex', alignItems: 'center' }}
						>
							<EmojiEventsIcon sx={{ mr: 1 }} />
							Prêmios e Reconhecimentos
						</Typography>
						<List>
							{profile.awards.map((award, index) => (
								<ListItem
									key={index}
									divider={index < profile.awards.length - 1}
								>
									<ListItemText
										primary={award.title}
										secondary={
											<>
												<Typography
													variant="body2"
													color="text.primary"
												>
													{award.institution} •{' '}
													{award.year}
												</Typography>
												{award.description && (
													<Typography
														variant="body2"
														color="text.secondary"
													>
														{award.description}
													</Typography>
												)}
											</>
										}
									/>
								</ListItem>
							))}
						</List>
					</CardContent>
				</Card>
			</Stack>

			{/* Botão de Voltar */}
			<Box sx={{ mt: 4, textAlign: 'center' }}>
				<Button
					variant="outlined"
					onClick={() => window.history.back()}
					sx={{ mr: 2 }}
				>
					Voltar
				</Button>
				<Button
					variant="contained"
					startIcon={<PublicIcon />}
					href={`http://lattes.cnpq.br/${profile.id}`}
					target="_blank"
				>
					Ver no Lattes Original
				</Button>
			</Box>
		</Container>
	);
};

export default LattesPage;
