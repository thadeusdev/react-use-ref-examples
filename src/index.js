import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ticker from './Ticker'
import Box from './Box'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Ticker />
    <Box />
  </div>
);
