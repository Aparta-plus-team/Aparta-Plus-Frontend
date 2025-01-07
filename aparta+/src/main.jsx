import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '+/index.css';
import '+/static/fonts/poppins.scss';
import App from '@/app/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);