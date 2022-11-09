import { createRoot } from 'react-dom/client';
import { Header } from './Header';

const container = document.getElementById('app');
const root = createRoot(container as HTMLElement);

root.render(<Header text="shared_ui" />);
