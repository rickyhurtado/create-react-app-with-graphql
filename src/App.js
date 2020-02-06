import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppHeader from './components/app-header/AppHeader.js';
import AppRoutes from './components/app-routes/AppRoutes.js';

const theme = createMuiTheme({});

function App() {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <AppHeader />
          <main className="main-container">
            <AppRoutes />
          </main>
        </MuiThemeProvider>
      </Switch>
    </BrowserRouter>
  )
};

export default App;
