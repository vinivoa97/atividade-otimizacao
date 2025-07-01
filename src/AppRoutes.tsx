import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';
import Blog from './Blog';
import Search from './Search';
import LattesPage from './components/LattesPage';

interface AppRoutesProps {
	disableCustomTheme?: boolean;
}

const AppRoutes: React.FC<AppRoutesProps> = (props) => {
	return (
		<AppTheme {...props}>
			<CssBaseline enableColorScheme />
			<Router>
				<AppAppBar />
				<Routes>
					<Route path="/" element={<Blog />} />
					<Route path="/busca" element={<Search />} />
					<Route path="/curriculo/:id" element={<LattesPage />} />
					<Route path="/curriculo" element={<LattesPage />} />
				</Routes>
				<Footer />
			</Router>
		</AppTheme>
	);
};

export default AppRoutes;
