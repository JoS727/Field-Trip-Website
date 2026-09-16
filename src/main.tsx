import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { App } from './App';
import { Merch } from './Merch';

// The site is a multi-page static deploy where each page is its own HTML file
// served by the same bundle. Route on the path so merch.html gets the store
// and every other page gets the main site.
const isMerch = window.location.pathname.endsWith('/merch.html') || window.location.pathname.endsWith('/merch');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isMerch ? <Merch /> : <App />}
  </React.StrictMode>,
);
