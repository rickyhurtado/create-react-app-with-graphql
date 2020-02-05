import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

import './AppHeader.css';

const ButtonLink = ({title, to}) => {
  return (
    <MuiLink color="inherit" variant="button" component={Link} to={to} title={title}>{title}</MuiLink>
  );
}

function AppHeader() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">
          GraphQL: React and Rails
        </Typography>

        <nav className="app-header-nav">
          <ButtonLink title="Home" to="/" />
          <ButtonLink title="Users" to="/users" />
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
