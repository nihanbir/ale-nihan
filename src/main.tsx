import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import React from 'react';

createRoot(document.getElementById("root")!).render(<App />);
// createRoot(document.getElementById('root') as HTMLElement).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );