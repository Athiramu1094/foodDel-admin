// index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import  store  from './app/store'; // Import your Redux store
import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Wrap with Provider */}
    <Router>
      <App />
    </Router>
  </Provider>
);
