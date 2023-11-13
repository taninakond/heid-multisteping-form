import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/css/index.css';
import HmsfProvider from './context/hmsfProvider.jsx';

ReactDOM.createRoot(document.getElementById('hmf-root')).render(
    <React.StrictMode>
        <HmsfProvider>
            <App />
        </HmsfProvider>
    </React.StrictMode>
);
