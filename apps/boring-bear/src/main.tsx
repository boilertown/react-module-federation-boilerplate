import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RootRouter } from 'router';

const container = document.getElementById('app');
const root = createRoot(container as HTMLElement);

root.render(
	<BrowserRouter>
		<StrictMode>
			<RootRouter />
		</StrictMode>
	</BrowserRouter>,
);
