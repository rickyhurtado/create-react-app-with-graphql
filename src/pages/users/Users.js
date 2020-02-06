import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import UsersList from '../../components/users-list/UsersList';

import './Users.css';

function Users() {
  return (
    <Container maxWidth="lg">
      <Typography className="page-title" component="h1" variant="h5">Users</Typography>

      <UsersList />
    </Container>
  );
}

export default Users;
