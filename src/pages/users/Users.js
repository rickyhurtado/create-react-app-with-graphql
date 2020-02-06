import React from 'react';

import Page from '../../containers/page/Page';
import UsersList from '../../components/users-list/UsersList';

function Users() {
  return (
    <Page title="Users">
      <UsersList />
    </Page>
  );
}

export default Users;
