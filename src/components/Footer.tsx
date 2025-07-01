import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import SitemarkIcon from './SitemarkIcon';

function Copyright() {
	return (
		<Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
			{'Copyright © '}
			<Link color="text.secondary" href="http://lattes.cnpq.br/">
				Plataforma Lattes - CNPq
			</Link>
			&nbsp;
			{new Date().getFullYear()}
		</Typography>
	);
}

export default function Footer() {
	return (
		<React.Fragment>
			<Divider />
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: { xs: 4, sm: 8 },
					py: { xs: 8, sm: 10 },
					textAlign: { sm: 'center', md: 'left' },
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						width: '100%',
						justifyContent: 'space-between',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 4,
							minWidth: { xs: '100%', sm: '60%' },
						}}
					>
						<Box sx={{ width: { xs: '100%', sm: '60%' } }}>
							<SitemarkIcon />
							<Typography
								variant="body2"
								gutterBottom
								sx={{ fontWeight: 600, mt: 2 }}
							>
								Receba atualizações da Plataforma
							</Typography>
							<Typography
								variant="body2"
								sx={{ color: 'text.secondary', mb: 2 }}
							>
								Cadastre-se para receber notificações sobre
								novas funcionalidades e atualizações.
							</Typography>
							<InputLabel htmlFor="email-newsletter">
								E-mail
							</InputLabel>
							<Stack direction="row" spacing={1} useFlexGap>
								<TextField
									id="email-newsletter"
									hiddenLabel
									size="small"
									variant="outlined"
									fullWidth
									aria-label="Digite seu endereço de e-mail"
									placeholder="Seu endereço de e-mail"
									slotProps={{
										htmlInput: {
											autoComplete: 'off',
											'aria-label':
												'Digite seu endereço de e-mail',
										},
									}}
									sx={{ width: '250px' }}
								/>
								<Button
									variant="contained"
									color="primary"
									size="small"
									sx={{ flexShrink: 0 }}
								>
									Cadastrar
								</Button>
							</Stack>
						</Box>
					</Box>
					<Box
						sx={{
							display: { xs: 'none', sm: 'flex' },
							flexDirection: 'column',
							gap: 1,
						}}
					>
						<Typography
							variant="body2"
							sx={{ fontWeight: 'medium' }}
						>
							Plataforma
						</Typography>
						<Link color="text.secondary" variant="body2" href="/">
							Página Inicial
						</Link>
						<Link
							color="text.secondary"
							variant="body2"
							href="/busca"
						>
							Buscar Currículos
						</Link>
						<Link
							color="text.secondary"
							variant="body2"
							href="/blog"
						>
							Blog
						</Link>
						<Link
							color="text.secondary"
							variant="body2"
							href="#dashboard"
						>
							Estatísticas
						</Link>
						<Link
							color="text.secondary"
							variant="body2"
							href="#faq"
						>
							Perguntas Frequentes
						</Link>
					</Box>
					<Box
						sx={{
							display: { xs: 'none', sm: 'flex' },
							flexDirection: 'column',
							gap: 1,
						}}
					>
						<Typography
							variant="body2"
							sx={{ fontWeight: 'medium' }}
						>
							CNPq
						</Typography>
						<Link
							color="text.secondary"
							variant="body2"
							href="http://cnpq.br/sobre"
						>
							Sobre o CNPq
						</Link>
						<Link
							color="text.secondary"
							variant="body2"
							href="http://cnpq.br/missao"
						>
							Missão e Visão
						</Link>
						<Link
							color="text.secondary"
							variant="body2"
							href="http://cnpq.br/noticias"
						>
							Notícias
						</Link>
					</Box>
					<Box
						sx={{
							display: { xs: 'none', sm: 'flex' },
							flexDirection: 'column',
							gap: 1,
						}}
					>
						<Typography
							variant="body2"
							sx={{ fontWeight: 'medium' }}
						>
							Ajuda e Suporte
						</Typography>
						<Link
							color="text.secondary"
							variant="body2"
							href="http://lattes.cnpq.br/web/dgp/manual"
						>
							Manual do Usuário
						</Link>
						<Link
							color="text.secondary"
							variant="body2"
							href="http://lattes.cnpq.br/web/dgp/politica-privacidade"
						>
							Política de Privacidade
						</Link>
						<Link
							color="text.secondary"
							variant="body2"
							href="http://lattes.cnpq.br/web/dgp/contato"
						>
							Contato
						</Link>
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						pt: { xs: 4, sm: 8 },
						width: '100%',
						borderTop: '1px solid',
						borderColor: 'divider',
					}}
				>
					<div>
						<Link
							color="text.secondary"
							variant="body2"
							href="http://lattes.cnpq.br/web/dgp/politica-privacidade"
						>
							Política de Privacidade
						</Link>
						<Typography
							sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}
						>
							&nbsp;•&nbsp;
						</Typography>
						<Link
							color="text.secondary"
							variant="body2"
							href="http://lattes.cnpq.br/web/dgp/termos-uso"
						>
							Termos de Uso
						</Link>
						<Copyright />
					</div>
					<Stack
						direction="row"
						spacing={1}
						useFlexGap
						sx={{ justifyContent: 'left', color: 'text.secondary' }}
					>
						<IconButton
							color="inherit"
							size="small"
							href="http://github.com/cnpq"
							aria-label="GitHub do CNPq"
							sx={{ alignSelf: 'center' }}
						>
							<GitHubIcon />
						</IconButton>
						<IconButton
							color="inherit"
							size="small"
							href="https://twitter.com/cnpq_oficial"
							aria-label="Twitter do CNPq"
							sx={{ alignSelf: 'center' }}
						>
							<TwitterIcon />
						</IconButton>
						<IconButton
							color="inherit"
							size="small"
							href="https://www.linkedin.com/company/cnpq-brasil/"
							aria-label="LinkedIn do CNPq"
							sx={{ alignSelf: 'center' }}
						>
							<LinkedInIcon />
						</IconButton>
					</Stack>
				</Box>
			</Container>
		</React.Fragment>
	);
}
