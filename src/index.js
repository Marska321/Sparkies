// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { ModalProvider } from './contexts/ModalContext'; // Import the ModalProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider> {/* Wrap App with ModalProvider */}
        <App />
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>
);
