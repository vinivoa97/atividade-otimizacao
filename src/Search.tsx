import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import Pagination from '@mui/material/Pagination';
import LinearProgress from '@mui/material/LinearProgress';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import {
	Search as SearchIcon,
	FilterList,
	School,
	LocationOn,
	Clear,
	BookmarkBorder,
	Bookmark,
	Visibility,
	Email,
	Link as LinkIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SEO from './components/SEO';

// Dados simulados para os resultados de busca
const mockResearchers = [
	{
		id: 1,
		name: 'Dr. João Silva Santos',
		institution: 'Universidade Federal da Bahia',
		area: 'Ciência da Computação',
		subarea: 'Inteligência Artificial',
		city: 'Salvador',
		state: 'BA',
		yearsExperience: 15,
		publications: 187,
		citations: 2456,
		hIndex: 24,
		collaborations: 45,
		photo: 'JS',
		email: 'joao.santos@ufba.br',
		lattes: 'http://lattes.cnpq.br/1234567890',
		keywords: [
			'Machine Learning',
			'Deep Learning',
			'Computer Vision',
			'Neural Networks',
		],
		projects: 12,
		orientations: 23,
		lastUpdate: '2024-06-15',
	},
	{
		id: 2,
		name: 'Dra. Maria Oliveira Costa',
		institution: 'Universidade de São Paulo',
		area: 'Engenharia',
		subarea: 'Engenharia de Software',
		city: 'São Paulo',
		state: 'SP',
		yearsExperience: 12,
		publications: 134,
		citations: 1876,
		hIndex: 19,
		collaborations: 32,
		photo: 'MC',
		email: 'maria.costa@usp.br',
		lattes: 'http://lattes.cnpq.br/0987654321',
		keywords: [
			'Software Engineering',
			'Agile Methods',
			'Software Architecture',
			'DevOps',
		],
		projects: 8,
		orientations: 18,
		lastUpdate: '2024-06-20',
	},
	{
		id: 3,
		name: 'Prof. Carlos Pereira Lima',
		institution: 'Instituto Federal da Bahia',
		area: 'Ciência da Computação',
		subarea: 'Redes de Computadores',
		city: 'Salvador',
		state: 'BA',
		yearsExperience: 8,
		publications: 89,
		citations: 1234,
		hIndex: 15,
		collaborations: 28,
		photo: 'CL',
		email: 'carlos.lima@ifba.edu.br',
		lattes: 'http://lattes.cnpq.br/1122334455',
		keywords: [
			'Computer Networks',
			'IoT',
			'Network Security',
			'Wireless Networks',
		],
		projects: 6,
		orientations: 12,
		lastUpdate: '2024-06-10',
	},
	{
		id: 4,
		name: 'Dra. Ana Ferreira Silva',
		institution: 'Universidade Federal de Minas Gerais',
		area: 'Ciências da Saúde',
		subarea: 'Medicina',
		city: 'Belo Horizonte',
		state: 'MG',
		yearsExperience: 20,
		publications: 245,
		citations: 3421,
		hIndex: 28,
		collaborations: 67,
		photo: 'AF',
		email: 'ana.ferreira@ufmg.br',
		lattes: 'http://lattes.cnpq.br/9988776655',
		keywords: [
			'Cardiology',
			'Clinical Research',
			'Epidemiology',
			'Public Health',
		],
		projects: 15,
		orientations: 34,
		lastUpdate: '2024-06-25',
	},
	{
		id: 5,
		name: 'Prof. Roberto Lima Santos',
		institution: 'Universidade Federal do Rio de Janeiro',
		area: 'Engenharia',
		subarea: 'Engenharia Elétrica',
		city: 'Rio de Janeiro',
		state: 'RJ',
		yearsExperience: 18,
		publications: 156,
		citations: 2890,
		hIndex: 22,
		collaborations: 41,
		photo: 'RS',
		email: 'roberto.santos@ufrj.br',
		lattes: 'http://lattes.cnpq.br/5544332211',
		keywords: [
			'Power Systems',
			'Renewable Energy',
			'Smart Grids',
			'Energy Storage',
		],
		projects: 10,
		orientations: 27,
		lastUpdate: '2024-06-18',
	},
];

const areas = [
	'Todas as Áreas',
	'Ciência da Computação',
	'Engenharia',
	'Ciências da Saúde',
	'Ciências Biológicas',
	'Ciências Exatas',
	'Ciências Humanas',
	'Ciências Agrárias',
	'Ciências Sociais',
];

const states = [
	'Todos os Estados',
	'AC',
	'AL',
	'AP',
	'AM',
	'BA',
	'CE',
	'DF',
	'ES',
	'GO',
	'MA',
	'MT',
	'MS',
	'MG',
	'PA',
	'PB',
	'PR',
	'PE',
	'PI',
	'RJ',
	'RN',
	'RS',
	'RO',
	'RR',
	'SC',
	'SP',
	'SE',
	'TO',
];

interface SearchFilters {
	area: string;
	state: string;
	minPublications: number;
	maxPublications: number;
	minCitations: number;
	maxCitations: number;
	minExperience: number;
	maxExperience: number;
	hasProjects: boolean;
	hasOrientations: boolean;
	recentlyUpdated: boolean;
}

export default function Search() {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);
	const [hasSearched, setHasSearched] = React.useState(false);
	const [showFilters, setShowFilters] = React.useState(false);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [bookmarkedIds, setBookmarkedIds] = React.useState<Set<number>>(
		new Set()
	);
	const [sortBy, setSortBy] = React.useState('relevance');

	const [filters, setFilters] = React.useState<SearchFilters>({
		area: 'Todas as Áreas',
		state: 'Todos os Estados',
		minPublications: 0,
		maxPublications: 300,
		minCitations: 0,
		maxCitations: 5000,
		minExperience: 0,
		maxExperience: 30,
		hasProjects: false,
		hasOrientations: false,
		recentlyUpdated: false,
	});

	const resultsPerPage = 5;

	const handleSearch = async () => {
		setIsLoading(true);
		setHasSearched(true);
		setCurrentPage(1);

		// Simular loading
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIsLoading(false);
	};

	const handleFilterChange = (key: keyof SearchFilters, value: any) => {
		setFilters((prev) => ({ ...prev, [key]: value }));
	};

	const clearFilters = () => {
		setFilters({
			area: 'Todas as Áreas',
			state: 'Todos os Estados',
			minPublications: 0,
			maxPublications: 300,
			minCitations: 0,
			maxCitations: 5000,
			minExperience: 0,
			maxExperience: 30,
			hasProjects: false,
			hasOrientations: false,
			recentlyUpdated: false,
		});
	};

	const toggleBookmark = (id: number) => {
		setBookmarkedIds((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(id)) {
				newSet.delete(id);
			} else {
				newSet.add(id);
			}
			return newSet;
		});
	};

	// Filtrar resultados baseado nos filtros
	const filteredResults = React.useMemo(() => {
		let results = mockResearchers;

		// Filtro por termo de busca
		if (searchTerm.trim()) {
			results = results.filter(
				(researcher) =>
					researcher.name
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					researcher.institution
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					researcher.area
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					researcher.subarea
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					researcher.keywords.some((keyword) =>
						keyword.toLowerCase().includes(searchTerm.toLowerCase())
					)
			);
		}

		// Aplicar filtros
		if (filters.area !== 'Todas as Áreas') {
			results = results.filter((r) => r.area === filters.area);
		}

		if (filters.state !== 'Todos os Estados') {
			results = results.filter((r) => r.state === filters.state);
		}

		results = results.filter(
			(r) =>
				r.publications >= filters.minPublications &&
				r.publications <= filters.maxPublications &&
				r.citations >= filters.minCitations &&
				r.citations <= filters.maxCitations &&
				r.yearsExperience >= filters.minExperience &&
				r.yearsExperience <= filters.maxExperience
		);

		if (filters.hasProjects) {
			results = results.filter((r) => r.projects > 0);
		}

		if (filters.hasOrientations) {
			results = results.filter((r) => r.orientations > 0);
		}

		if (filters.recentlyUpdated) {
			const thirtyDaysAgo = new Date();
			thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
			results = results.filter(
				(r) => new Date(r.lastUpdate) >= thirtyDaysAgo
			);
		}

		// Ordenação
		switch (sortBy) {
			case 'publications':
				results.sort((a, b) => b.publications - a.publications);
				break;
			case 'citations':
				results.sort((a, b) => b.citations - a.citations);
				break;
			case 'experience':
				results.sort((a, b) => b.yearsExperience - a.yearsExperience);
				break;
			case 'name':
				results.sort((a, b) => a.name.localeCompare(b.name));
				break;
			default: // relevance
				break;
		}

		return results;
	}, [searchTerm, filters, sortBy]);

	// Paginação
	const paginatedResults = filteredResults.slice(
		(currentPage - 1) * resultsPerPage,
		currentPage * resultsPerPage
	);

	const totalPages = Math.ceil(filteredResults.length / resultsPerPage);

	return (
		<>
			<SEO
				title="Buscar Pesquisadores - Plataforma Lattes"
				description="Busque pesquisadores, instituições e grupos de pesquisa na plataforma Lattes CNPq"
				keywords="busca, pesquisadores, lattes, cnpq, instituições, grupos pesquisa"
				url="/busca"
			/>
			<Container
				maxWidth="xl"
				component="main"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					my: 8,
					gap: 4,
				}}
			>
				<Box sx={{ textAlign: 'center', mb: 4 }}>
					<Typography variant="h3" component="h1" gutterBottom>
						Buscar na Plataforma Lattes
					</Typography>
					<Typography variant="h6" color="text.secondary" paragraph>
						Encontre pesquisadores, instituições e grupos de
						pesquisa
					</Typography>
				</Box>

				{/* Barra de Busca Principal */}
				<Box sx={{ maxWidth: '800px', mx: 'auto', width: '100%' }}>
					<Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
						<TextField
							fullWidth
							variant="outlined"
							placeholder="Digite o nome do pesquisador, área de interesse, instituição ou palavras-chave..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon />
									</InputAdornment>
								),
							}}
							onKeyPress={(e) => {
								if (e.key === 'Enter') {
									handleSearch();
								}
							}}
						/>
						<Button
							variant="contained"
							size="large"
							onClick={handleSearch}
							startIcon={<SearchIcon />}
							sx={{ minWidth: 120 }}
							aria-label="Executar busca de pesquisadores"
						>
							Buscar
						</Button>
					</Box>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Button
							variant="outlined"
							startIcon={<FilterList />}
							onClick={() => setShowFilters(!showFilters)}
							sx={{ mb: 2 }}
							aria-label={`${
								showFilters ? 'Ocultar' : 'Mostrar'
							} filtros avançados de busca`}
							aria-expanded={showFilters}
						>
							Filtros Avançados {showFilters ? '▲' : '▼'}
						</Button>

						{hasSearched && (
							<Typography variant="body2" color="text.secondary">
								{filteredResults.length} resultado(s)
								encontrado(s)
							</Typography>
						)}
					</Box>
				</Box>

				{/* Filtros Avançados */}
				{showFilters && (
					<Card sx={{ maxWidth: '800px', mx: 'auto', width: '100%' }}>
						<CardContent>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									mb: 3,
								}}
							>
								<Typography
									variant="h6"
									sx={{ fontWeight: 'bold' }}
								>
									Filtros Avançados
								</Typography>
								<Button
									variant="text"
									startIcon={<Clear />}
									onClick={clearFilters}
									size="small"
									aria-label="Limpar todos os filtros de busca"
								>
									Limpar Filtros
								</Button>
							</Box>

							<Box
								sx={{
									display: 'grid',
									gridTemplateColumns: {
										xs: '1fr',
										md: '1fr 1fr',
									},
									gap: 3,
								}}
							>
								{/* Filtros Básicos */}
								<Box>
									<FormControl fullWidth>
										<InputLabel>
											Área de Conhecimento
										</InputLabel>
										<Select
											value={filters.area}
											label="Área de Conhecimento"
											onChange={(e) =>
												handleFilterChange(
													'area',
													e.target.value
												)
											}
										>
											{areas.map((area) => (
												<MenuItem
													key={area}
													value={area}
												>
													{area}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Box>

								<Box>
									<FormControl fullWidth>
										<InputLabel>Estado</InputLabel>
										<Select
											value={filters.state}
											label="Estado"
											onChange={(e) =>
												handleFilterChange(
													'state',
													e.target.value
												)
											}
										>
											{states.map((state) => (
												<MenuItem
													key={state}
													value={state}
												>
													{state}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Box>

								{/* Filtros de Range */}
								<Box>
									<Typography gutterBottom>
										Publicações: {filters.minPublications} -{' '}
										{filters.maxPublications}
									</Typography>
									<Slider
										value={[
											filters.minPublications,
											filters.maxPublications,
										]}
										onChange={(_, value) => {
											const [min, max] =
												value as number[];
											handleFilterChange(
												'minPublications',
												min
											);
											handleFilterChange(
												'maxPublications',
												max
											);
										}}
										valueLabelDisplay="auto"
										min={0}
										max={300}
										step={10}
									/>
								</Box>

								<Box>
									<Typography gutterBottom>
										Citações: {filters.minCitations} -{' '}
										{filters.maxCitations}
									</Typography>
									<Slider
										value={[
											filters.minCitations,
											filters.maxCitations,
										]}
										onChange={(_, value) => {
											const [min, max] =
												value as number[];
											handleFilterChange(
												'minCitations',
												min
											);
											handleFilterChange(
												'maxCitations',
												max
											);
										}}
										valueLabelDisplay="auto"
										min={0}
										max={5000}
										step={100}
									/>
								</Box>

								<Box>
									<Typography gutterBottom>
										Anos de Experiência:{' '}
										{filters.minExperience} -{' '}
										{filters.maxExperience}
									</Typography>
									<Slider
										value={[
											filters.minExperience,
											filters.maxExperience,
										]}
										onChange={(_, value) => {
											const [min, max] =
												value as number[];
											handleFilterChange(
												'minExperience',
												min
											);
											handleFilterChange(
												'maxExperience',
												max
											);
										}}
										valueLabelDisplay="auto"
										min={0}
										max={30}
										step={1}
									/>
								</Box>

								{/* Filtros Booleanos */}
								<Box>
									<Stack spacing={1}>
										<FormControlLabel
											control={
												<Checkbox
													checked={
														filters.hasProjects
													}
													onChange={(e) =>
														handleFilterChange(
															'hasProjects',
															e.target.checked
														)
													}
												/>
											}
											label="Possui Projetos de Pesquisa"
										/>
										<FormControlLabel
											control={
												<Checkbox
													checked={
														filters.hasOrientations
													}
													onChange={(e) =>
														handleFilterChange(
															'hasOrientations',
															e.target.checked
														)
													}
												/>
											}
											label="Possui Orientações"
										/>
										<FormControlLabel
											control={
												<Checkbox
													checked={
														filters.recentlyUpdated
													}
													onChange={(e) =>
														handleFilterChange(
															'recentlyUpdated',
															e.target.checked
														)
													}
												/>
											}
											label="Atualizado nos últimos 30 dias"
										/>
									</Stack>
								</Box>
							</Box>
						</CardContent>
					</Card>
				)}

				{/* Loading */}
				{isLoading && (
					<Box sx={{ width: '100%', mt: 2 }}>
						<LinearProgress
							aria-label="Carregando resultados da busca"
							role="progressbar"
						/>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ textAlign: 'center', mt: 2 }}
						>
							Buscando pesquisadores...
						</Typography>
					</Box>
				)}

				{/* Resultados da Busca */}
				{hasSearched && !isLoading && (
					<Box sx={{ mt: 4 }}>
						{/* Barra de Ordenação */}
						{filteredResults.length > 0 && (
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									mb: 3,
								}}
							>
								<Typography
									variant="h5"
									sx={{ fontWeight: 'bold' }}
								>
									Resultados da Busca
								</Typography>
								<FormControl
									size="small"
									sx={{ minWidth: 150 }}
								>
									<InputLabel>Ordenar por</InputLabel>
									<Select
										value={sortBy}
										label="Ordenar por"
										onChange={(e) =>
											setSortBy(e.target.value)
										}
									>
										<MenuItem value="relevance">
											Relevância
										</MenuItem>
										<MenuItem value="publications">
											Publicações
										</MenuItem>
										<MenuItem value="citations">
											Citações
										</MenuItem>
										<MenuItem value="experience">
											Experiência
										</MenuItem>
										<MenuItem value="name">Nome</MenuItem>
									</Select>
								</FormControl>
							</Box>
						)}

						{/* Lista de Resultados */}
						{filteredResults.length === 0 ? (
							<Card>
								<CardContent
									sx={{ textAlign: 'center', py: 8 }}
								>
									<SearchIcon
										sx={{
											fontSize: 64,
											color: 'text.secondary',
											mb: 2,
										}}
									/>
									<Typography
										variant="h6"
										color="text.secondary"
										gutterBottom
									>
										Nenhum resultado encontrado
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										Tente ajustar seus filtros ou termos de
										busca
									</Typography>
								</CardContent>
							</Card>
						) : (
							<Stack spacing={2}>
								{paginatedResults.map((researcher) => (
									<Card
										key={researcher.id}
										sx={{
											transition: 'all 0.3s ease',
											'&:hover': {
												transform: 'translateY(-2px)',
												boxShadow: 4,
											},
										}}
									>
										<CardContent>
											<Box
												sx={{ display: 'flex', gap: 3 }}
											>
												{/* Avatar */}
												<Avatar
													sx={{
														width: 80,
														height: 80,
														bgcolor: 'primary.main',
														fontSize: '1.5rem',
														fontWeight: 'bold',
													}}
												>
													{researcher.photo}
												</Avatar>

												{/* Informações Principais */}
												<Box sx={{ flex: 1 }}>
													<Box
														sx={{
															display: 'flex',
															justifyContent:
																'space-between',
															alignItems:
																'flex-start',
															mb: 2,
														}}
													>
														<Box>
															<Typography
																variant="h6"
																sx={{
																	fontWeight:
																		'bold',
																	mb: 1,
																}}
															>
																{
																	researcher.name
																}
															</Typography>
															<Box
																sx={{
																	display:
																		'flex',
																	alignItems:
																		'center',
																	gap: 1,
																	mb: 1,
																}}
															>
																<School
																	sx={{
																		fontSize: 16,
																		color: 'text.secondary',
																	}}
																/>
																<Typography
																	variant="body2"
																	color="text.secondary"
																>
																	{
																		researcher.institution
																	}
																</Typography>
															</Box>
															<Box
																sx={{
																	display:
																		'flex',
																	alignItems:
																		'center',
																	gap: 1,
																	mb: 1,
																}}
															>
																<LocationOn
																	sx={{
																		fontSize: 16,
																		color: 'text.secondary',
																	}}
																/>
																<Typography
																	variant="body2"
																	color="text.secondary"
																>
																	{
																		researcher.city
																	}
																	,{' '}
																	{
																		researcher.state
																	}
																</Typography>
															</Box>
														</Box>

														{/* Ações */}
														<Box
															sx={{
																display: 'flex',
																gap: 1,
															}}
														>
															<Tooltip
																title={
																	bookmarkedIds.has(
																		researcher.id
																	)
																		? 'Remover dos favoritos'
																		: 'Adicionar aos favoritos'
																}
															>
																<IconButton
																	onClick={() =>
																		toggleBookmark(
																			researcher.id
																		)
																	}
																	color={
																		bookmarkedIds.has(
																			researcher.id
																		)
																			? 'primary'
																			: 'default'
																	}
																	aria-label={
																		bookmarkedIds.has(
																			researcher.id
																		)
																			? `Remover ${researcher.name} dos favoritos`
																			: `Adicionar ${researcher.name} aos favoritos`
																	}
																>
																	{bookmarkedIds.has(
																		researcher.id
																	) ? (
																		<Bookmark />
																	) : (
																		<BookmarkBorder />
																	)}
																</IconButton>
															</Tooltip>
															<Tooltip title="Ver currículo completo">
																<IconButton
																	onClick={() =>
																		navigate(
																			`/curriculo/${researcher.id}`
																		)
																	}
																	color="primary"
																	aria-label={`Ver currículo completo de ${researcher.name}`}
																>
																	<Visibility />
																</IconButton>
															</Tooltip>
															<Tooltip title="Enviar email">
																<IconButton
																	onClick={() =>
																		window.open(
																			`mailto:${researcher.email}`
																		)
																	}
																	color="primary"
																	aria-label={`Enviar email para ${researcher.name}`}
																>
																	<Email />
																</IconButton>
															</Tooltip>
															<Tooltip title="Ver Lattes">
																<IconButton
																	onClick={() =>
																		window.open(
																			researcher.lattes,
																			'_blank'
																		)
																	}
																	color="primary"
																	aria-label={`Ver currículo Lattes de ${researcher.name} em nova aba`}
																>
																	<LinkIcon />
																</IconButton>
															</Tooltip>
														</Box>
													</Box>

													{/* Área e Especialização */}
													<Box sx={{ mb: 2 }}>
														<Chip
															label={
																researcher.area
															}
															color="primary"
															size="small"
															sx={{
																mr: 1,
																mb: 1,
															}}
														/>
														<Chip
															label={
																researcher.subarea
															}
															variant="outlined"
															size="small"
															sx={{
																mr: 1,
																mb: 1,
															}}
														/>
													</Box>

													{/* Palavras-chave */}
													<Box sx={{ mb: 2 }}>
														<Typography
															variant="caption"
															color="text.secondary"
															sx={{
																display:
																	'block',
																mb: 1,
															}}
														>
															Palavras-chave:
														</Typography>
														<Box
															sx={{
																display: 'flex',
																flexWrap:
																	'wrap',
																gap: 0.5,
															}}
														>
															{researcher.keywords
																.slice(0, 4)
																.map(
																	(
																		keyword,
																		index
																	) => (
																		<Chip
																			key={
																				index
																			}
																			label={
																				keyword
																			}
																			size="small"
																			variant="outlined"
																			sx={{
																				fontSize:
																					'0.75rem',
																			}}
																		/>
																	)
																)}
														</Box>
													</Box>

													{/* Métricas */}
													<Box
														sx={{
															display: 'grid',
															gridTemplateColumns:
																'repeat(auto-fit, minmax(120px, 1fr))',
															gap: 2,
															mt: 2,
															pt: 2,
															borderTop: 1,
															borderColor:
																'divider',
														}}
													>
														<Box
															sx={{
																textAlign:
																	'center',
															}}
														>
															<Typography
																variant="h6"
																sx={{
																	fontWeight:
																		'bold',
																	color: 'primary.main',
																}}
															>
																{
																	researcher.publications
																}
															</Typography>
															<Typography
																variant="caption"
																color="text.secondary"
															>
																Publicações
															</Typography>
														</Box>
														<Box
															sx={{
																textAlign:
																	'center',
															}}
														>
															<Typography
																variant="h6"
																sx={{
																	fontWeight:
																		'bold',
																	color: 'secondary.main',
																}}
															>
																{researcher.citations.toLocaleString()}
															</Typography>
															<Typography
																variant="caption"
																color="text.secondary"
															>
																Citações
															</Typography>
														</Box>
														<Box
															sx={{
																textAlign:
																	'center',
															}}
														>
															<Typography
																variant="h6"
																sx={{
																	fontWeight:
																		'bold',
																	color: 'success.main',
																}}
															>
																{
																	researcher.hIndex
																}
															</Typography>
															<Typography
																variant="caption"
																color="text.secondary"
															>
																Índice H
															</Typography>
														</Box>
														<Box
															sx={{
																textAlign:
																	'center',
															}}
														>
															<Typography
																variant="h6"
																sx={{
																	fontWeight:
																		'bold',
																	color: 'warning.main',
																}}
															>
																{
																	researcher.yearsExperience
																}
															</Typography>
															<Typography
																variant="caption"
																color="text.secondary"
															>
																Anos Exp.
															</Typography>
														</Box>
														<Box
															sx={{
																textAlign:
																	'center',
															}}
														>
															<Typography
																variant="h6"
																sx={{
																	fontWeight:
																		'bold',
																	color: 'info.main',
																}}
															>
																{
																	researcher.projects
																}
															</Typography>
															<Typography
																variant="caption"
																color="text.secondary"
															>
																Projetos
															</Typography>
														</Box>
														<Box
															sx={{
																textAlign:
																	'center',
															}}
														>
															<Typography
																variant="h6"
																sx={{
																	fontWeight:
																		'bold',
																	color: 'error.main',
																}}
															>
																{
																	researcher.orientations
																}
															</Typography>
															<Typography
																variant="caption"
																color="text.secondary"
															>
																Orientações
															</Typography>
														</Box>
													</Box>
												</Box>
											</Box>
										</CardContent>
									</Card>
								))}
							</Stack>
						)}

						{/* Paginação */}
						{totalPages > 1 && (
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									mt: 4,
								}}
							>
								<Pagination
									count={totalPages}
									page={currentPage}
									onChange={(_, page) => setCurrentPage(page)}
									color="primary"
									size="large"
								/>
							</Box>
						)}
					</Box>
				)}

				{/* Dicas de Busca */}
				{!hasSearched && (
					<Card
						sx={{
							maxWidth: '800px',
							mx: 'auto',
							width: '100%',
							mt: 4,
						}}
					>
						<CardContent>
							<Typography
								variant="h6"
								sx={{ fontWeight: 'bold', mb: 2 }}
							>
								💡 Dicas de Busca
							</Typography>
							<Stack spacing={1}>
								<Typography variant="body2">
									• <strong>Busca por nome:</strong> Digite o
									nome completo ou parcial do pesquisador
								</Typography>
								<Typography variant="body2">
									• <strong>Busca por área:</strong> Use
									termos como "Ciência da Computação",
									"Medicina", "Engenharia"
								</Typography>
								<Typography variant="body2">
									• <strong>Busca por instituição:</strong>{' '}
									Digite o nome da universidade ou instituto
								</Typography>
								<Typography variant="body2">
									• <strong>Busca por palavras-chave:</strong>{' '}
									Termos específicos como "Machine Learning",
									"Biotecnologia"
								</Typography>
								<Typography variant="body2">
									• <strong>Use filtros avançados:</strong>{' '}
									Refine sua busca por localização,
									experiência e métricas
								</Typography>
							</Stack>
						</CardContent>
					</Card>
				)}
			</Container>
		</>
	);
}
