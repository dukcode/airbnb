import React from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/DefaultStyle';
import GlobalStyle from 'styles/GlobalStyle';
import App from 'App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
