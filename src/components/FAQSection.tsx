import React, { useState } from 'react';
import {
	Box,
	Card,
	CardContent,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Chip,
	Stack,
	TextField,
	InputAdornment,
	Button,
} from '@mui/material';
import {
	ExpandMore,
	Search,
	Help,
	ContactSupport,
	WhatsApp,
	Email,
	Phone,
} from '@mui/icons-material';

const faqData = [
	{
		id: 1,
		category: 'Geral',
		question: 'Como posso criar meu currículo na plataforma?',
		answer: 'É muito simples! Basta clicar no botão "Criar Currículo" na página inicial, fazer seu cadastro e seguir o passo a passo. Nossa interface é intuitiva e você pode importar dados diretamente do Lattes.',
		tags: ['currículo', 'cadastro', 'lattes'],
	},
	{
		id: 2,
		category: 'Integração',
		question: 'A plataforma se integra com o sistema Lattes?',
		answer: 'Sim! Temos integração completa com a Plataforma Lattes. Você pode importar automaticamente seus dados, sincronizar atualizações e manter tudo sempre em dia.',
		tags: ['lattes', 'integração', 'sincronização'],
	},
	{
		id: 3,
		category: 'Busca',
		question: 'Como encontrar pesquisadores na minha área?',
		answer: 'Use nossa ferramenta de busca avançada! Você pode filtrar por área de conhecimento, instituição, tipo de pesquisa e muito mais. Também temos sugestões baseadas em seus interesses.',
		tags: ['busca', 'pesquisadores', 'filtros'],
	},
	{
		id: 4,
		category: 'Colaboração',
		question:
			'Posso colaborar com outros pesquisadores através da plataforma?',
		answer: 'Absolutamente! Nossa plataforma facilita a colaboração através de grupos de pesquisa, projetos compartilhados e sistema de mensagens diretas entre pesquisadores.',
		tags: ['colaboração', 'grupos', 'projetos'],
	},
	{
		id: 5,
		category: 'Dados',
		question: 'Meus dados estão seguros na plataforma?',
		answer: 'Sim, levamos a segurança muito a sério! Usamos criptografia de ponta a ponta, servidores seguros e seguimos todas as regulamentações da LGPD. Você tem controle total sobre seus dados.',
		tags: ['segurança', 'privacidade', 'lgpd'],
	},
	{
		id: 6,
		category: 'Publicações',
		question: 'Como adiciono minhas publicações?',
		answer: 'Você pode adicionar publicações manualmente ou importar diretamente do Lattes. Também integramos com bases como PubMed, Scopus e outras para facilitar o processo.',
		tags: ['publicações', 'importação', 'bases'],
	},
	{
		id: 7,
		category: 'Instituições',
		question: 'Como minha instituição pode aderir à plataforma?',
		answer: 'Oferecemos planos institucionais com recursos avançados de gestão, relatórios personalizados e suporte dedicado. Entre em contato conosco para uma demonstração.',
		tags: ['instituição', 'planos', 'gestão'],
	},
	{
		id: 8,
		category: 'Suporte',
		question: 'Onde posso obter ajuda técnica?',
		answer: 'Temos diversos canais de suporte: chat online, email, telefone e uma base de conhecimento completa. Nossa equipe responde em até 24h.',
		tags: ['suporte', 'ajuda', 'contato'],
	},
];

const categories = [
	'Todos',
	'Geral',
	'Integração',
	'Busca',
	'Colaboração',
	'Dados',
	'Publicações',
	'Instituições',
	'Suporte',
];

const contactOptions = [
	{
		icon: <WhatsApp />,
		label: 'WhatsApp',
		value: '(11) 99999-9999',
		color: '#25d366',
		action: 'whatsapp',
	},
	{
		icon: <Email />,
		label: 'Email',
		value: 'suporte@cnpq-platform.br',
		color: '#1976d2',
		action: 'email',
	},
	{
		icon: <Phone />,
		label: 'Telefone',
		value: '(11) 3333-4444',
		color: '#ff9800',
		action: 'phone',
	},
];

export const FAQSection: React.FC = () => {
	const [selectedCategory, setSelectedCategory] = useState('Todos');
	const [searchTerm, setSearchTerm] = useState('');
	const [expandedPanel, setExpandedPanel] = useState<string | false>(false);

	const handlePanelChange =
		(panel: string) =>
		(_event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpandedPanel(isExpanded ? panel : false);
		};

	const filteredFAQs = faqData.filter((faq) => {
		const matchesCategory =
			selectedCategory === 'Todos' || faq.category === selectedCategory;
		const matchesSearch =
			searchTerm === '' ||
			faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
			faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
			faq.tags.some((tag) =>
				tag.toLowerCase().includes(searchTerm.toLowerCase())
			);

		return matchesCategory && matchesSearch;
	});

	const handleContactAction = (action: string, value: string) => {
		switch (action) {
			case 'whatsapp':
				window.open(
					`https://wa.me/${value.replace(/\D/g, '')}`,
					'_blank'
				);
				break;
			case 'email':
				window.open(`mailto:${value}`, '_blank');
				break;
			case 'phone':
				window.open(`tel:${value}`, '_blank');
				break;
		}
	};

	return (
		<Box>
			<Typography
				variant="h4"
				component="h2"
				gutterBottom
				sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}
			>
				Perguntas Frequentes
			</Typography>
			<Typography
				variant="body1"
				color="text.secondary"
				paragraph
				sx={{ textAlign: 'center', mb: 6 }}
			>
				Encontre respostas para as dúvidas mais comuns sobre nossa
				plataforma
			</Typography>

			{/* Seção de busca e filtros */}
			<Box sx={{ mb: 4 }}>
				<TextField
					fullWidth
					placeholder="Buscar perguntas..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<Search />
							</InputAdornment>
						),
					}}
					sx={{ mb: 3 }}
				/>

				<Stack
					direction="row"
					spacing={1}
					sx={{ flexWrap: 'wrap', gap: 1 }}
				>
					{categories.map((category) => (
						<Chip
							key={category}
							label={category}
							onClick={() => setSelectedCategory(category)}
							color={
								selectedCategory === category
									? 'primary'
									: 'default'
							}
							variant={
								selectedCategory === category
									? 'filled'
									: 'outlined'
							}
							clickable
						/>
					))}
				</Stack>
			</Box>

			{/* Lista de FAQs */}
			<Box sx={{ mb: 6 }}>
				{filteredFAQs.length === 0 ? (
					<Card>
						<CardContent sx={{ textAlign: 'center', py: 6 }}>
							<Help
								sx={{
									fontSize: 48,
									color: 'text.secondary',
									mb: 2,
								}}
							/>
							<Typography variant="h6" color="text.secondary">
								Nenhuma pergunta encontrada
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Tente ajustar sua busca ou categoria
							</Typography>
						</CardContent>
					</Card>
				) : (
					<Stack spacing={2}>
						{filteredFAQs.map((faq) => (
							<Accordion
								key={faq.id}
								expanded={expandedPanel === `panel${faq.id}`}
								onChange={handlePanelChange(`panel${faq.id}`)}
								sx={{
									'&:before': {
										display: 'none',
									},
									boxShadow: 1,
									borderRadius: 2,
								}}
							>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									sx={{
										'& .MuiAccordionSummary-content': {
											alignItems: 'center',
											gap: 2,
										},
									}}
								>
									<Chip
										label={faq.category}
										size="small"
										color="primary"
										variant="outlined"
									/>
									<Typography
										variant="h6"
										sx={{ fontWeight: 'medium' }}
									>
										{faq.question}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography
										variant="body1"
										sx={{ mb: 2, lineHeight: 1.7 }}
									>
										{faq.answer}
									</Typography>
									<Stack
										direction="row"
										spacing={1}
										sx={{ flexWrap: 'wrap', gap: 1 }}
									>
										{faq.tags.map((tag) => (
											<Chip
												key={tag}
												label={tag}
												size="small"
												variant="outlined"
												sx={{ fontSize: '0.75rem' }}
											/>
										))}
									</Stack>
								</AccordionDetails>
							</Accordion>
						))}
					</Stack>
				)}
			</Box>

			{/* Seção de contato */}
			<Card sx={{ bgcolor: 'background.paper' }}>
				<CardContent sx={{ p: 4 }}>
					<Box sx={{ textAlign: 'center', mb: 4 }}>
						<ContactSupport
							sx={{ fontSize: 48, color: 'primary.main', mb: 2 }}
						/>
						<Typography
							variant="h5"
							sx={{ fontWeight: 'bold', mb: 1 }}
						>
							Não encontrou sua resposta?
						</Typography>
						<Typography variant="body1" color="text.secondary">
							Entre em contato conosco! Nossa equipe está pronta
							para ajudar você.
						</Typography>
					</Box>

					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: {
								xs: '1fr',
								md: 'repeat(3, 1fr)',
							},
							gap: 3,
							mb: 4,
						}}
					>
						{contactOptions.map((option) => (
							<Card
								key={option.label}
								sx={{
									cursor: 'pointer',
									transition: 'all 0.3s ease',
									'&:hover': {
										transform: 'translateY(-4px)',
										boxShadow: 4,
									},
								}}
								onClick={() =>
									handleContactAction(
										option.action,
										option.value
									)
								}
							>
								<CardContent sx={{ textAlign: 'center' }}>
									<Box
										sx={{
											width: 56,
											height: 56,
											borderRadius: '50%',
											bgcolor: option.color,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											mx: 'auto',
											mb: 2,
											color: 'white',
										}}
									>
										{option.icon}
									</Box>
									<Typography
										variant="h6"
										sx={{ fontWeight: 'bold', mb: 1 }}
									>
										{option.label}
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										{option.value}
									</Typography>
								</CardContent>
							</Card>
						))}
					</Box>

					<Box sx={{ textAlign: 'center' }}>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ mb: 2 }}
						>
							Horário de atendimento: Segunda a Sexta, 8h às 18h
						</Typography>
						<Button
							variant="contained"
							size="large"
							startIcon={<ContactSupport />}
							sx={{
								background:
									'linear-gradient(45deg, #1976d2 30%, #1565c0 90%)',
								'&:hover': {
									background:
										'linear-gradient(45deg, #1565c0 30%, #0d47a1 90%)',
								},
							}}
						>
							Abrir Chamado de Suporte
						</Button>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
};
