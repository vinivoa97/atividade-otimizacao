import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import AppRoutes from './AppRoutes';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<AppRoutes />
		</StyledEngineProvider>
	</React.StrictMode>
);
