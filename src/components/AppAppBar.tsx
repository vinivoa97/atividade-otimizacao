import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '.././theme/ColorModeIconDropdown';
import Sitemark from './SitemarkIcon';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flexShrink: 0,
	backdropFilter: 'blur(24px)',
	borderColor: (theme.vars || theme).palette.divider,
	padding: '8px 12px',
	height: 102,
}));

export default function AppAppBar() {
	const [open, setOpen] = React.useState(false);
	const navigate = useNavigate();

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const handleNavigation = (path: string) => {
		navigate(path);
		setOpen(false);
	};

	return (
		<AppBar
			position="relative"
			enableColorOnDark
			sx={{
				boxShadow: 0,
				backgroundColor: 'background.default',
				backgroundImage: 'none',
			}}
		>
			<Container maxWidth="lg">
				<StyledToolbar variant="dense" disableGutters>
					<Box
						sx={{
							flexGrow: 1,
							display: 'flex',
							alignItems: 'center',
							px: 0,
						}}
					>
						<Button
							variant="text"
							color="info"
							size="medium"
							onClick={() => handleNavigation('/')}
							aria-label="Ir para página inicial"
							sx={{
								minWidth: 'auto',
								p: 1,
								'&:hover': {
									backgroundColor: 'transparent',
								},
							}}
						>
							<Sitemark />
						</Button>
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<Button
								variant="text"
								color="info"
								size="medium"
								onClick={() => handleNavigation('/busca')}
								aria-label="Ir para página de busca de pesquisadores"
							>
								Buscar
							</Button>
							<Button
								variant="text"
								color="info"
								size="medium"
								onClick={() => handleNavigation('/curriculo')}
								aria-label="Ir para página do currículo Lattes"
							>
								Currículo Lattes
							</Button>
							<Button
								variant="text"
								color="info"
								size="medium"
								aria-label="Acessar página de instituições"
							>
								Instituições
							</Button>
							<Button
								variant="text"
								color="info"
								size="medium"
								aria-label="Acessar página de grupos de pesquisa"
							>
								Grupos de Pesquisa
							</Button>
							<Button
								variant="text"
								color="info"
								size="medium"
								aria-label="Acessar painel Lattes"
							>
								Painel Lattes
							</Button>
							<Button
								variant="text"
								color="info"
								size="medium"
								aria-label="Acessar LattesData"
							>
								LattesData
							</Button>
							<Button
								variant="text"
								color="info"
								size="medium"
								aria-label="Acessar página de ajuda"
							>
								Ajuda
							</Button>
						</Box>
					</Box>
					<Box
						sx={{
							display: { xs: 'none', md: 'flex' },
							gap: 1,
							alignItems: 'center',
						}}
					>
						<ColorModeIconDropdown />
						<Button
							color="primary"
							variant="contained"
							size="small"
							aria-label="Entrar na plataforma usando gov.com"
						>
							Entrar com gov.com
						</Button>
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
						<ColorModeIconDropdown size="medium" />
						<IconButton
							aria-label="Menu button"
							onClick={toggleDrawer(true)}
						>
							<MenuIcon />
						</IconButton>
						<Drawer
							anchor="top"
							open={open}
							onClose={toggleDrawer(false)}
							PaperProps={{
								sx: {
									top: 'var(--template-frame-height, 0px)',
								},
							}}
						>
							<Box
								sx={{
									p: 2,
									backgroundColor: 'background.default',
								}}
							>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-end',
									}}
								>
									<IconButton
										onClick={toggleDrawer(false)}
										aria-label="Fechar menu"
									>
										<CloseRoundedIcon />
									</IconButton>
								</Box>
								<MenuItem onClick={() => handleNavigation('/')}>
									Início
								</MenuItem>
								<MenuItem
									onClick={() => handleNavigation('/busca')}
								>
									Buscar
								</MenuItem>
								<MenuItem
									onClick={() =>
										handleNavigation('/curriculo')
									}
								>
									Currículo Lattes
								</MenuItem>
								<MenuItem>Instituições</MenuItem>
								<MenuItem>Grupos de Pesquisa</MenuItem>
								<MenuItem>Painel Lattes</MenuItem>
								<MenuItem>LattesData</MenuItem>
								<MenuItem>Ajuda</MenuItem>
								<Divider sx={{ my: 3 }} />
								<MenuItem>
									<Button
										color="primary"
										variant="contained"
										fullWidth
									>
										Entrar com gov.com
									</Button>
								</MenuItem>
							</Box>
						</Drawer>
					</Box>
				</StyledToolbar>
			</Container>
		</AppBar>
	);
}
