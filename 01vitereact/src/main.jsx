import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
const AnotherUser =" aaja phir chai peya"
const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'click me to visit google',
  AnotherUser
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {reactElement}
  </StrictMode>
);
