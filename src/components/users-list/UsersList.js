import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress'
import Alert from '@material-ui/lab/Alert';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import './UsersList.css';

const GET_USERS = gql`
  {
    users {
      id
      name
      email
    }
  }
`

function UsersList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) {
    return (
      <div className="spinner">
        <CircularProgress color="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert severity="error">
        GraphQl error encountered. Please check the GraphQL schema documentation.
      </Alert>
    );
  }

  return (
    <List className="users-list-component">
      <Divider component="li" />
      {data.users.map(user => (
        <React.Fragment key={user.id}>
          <ListItem>
            <ListItemText
              primary={user.name}
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {user.email}
                </Typography>
              }
            />
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}

export default UsersList;
