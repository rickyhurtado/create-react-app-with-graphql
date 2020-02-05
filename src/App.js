import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppHeader from './components/app-header/AppHeader.js';
import Pages from './pages';

import './pages/Pages.css';

const theme = createMuiTheme({});

function AppRouter() {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <AppHeader />
          <main className="main-container">
            <Route exact path="/" component={Pages.Home} />
            <Route exact path="/users" component={Pages.Users} />
          </main>
        </MuiThemeProvider>
      </Switch>
    </BrowserRouter>
  )
};

export default AppRouter;
