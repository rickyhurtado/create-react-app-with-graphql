import React from 'react';
import { Route } from 'react-router-dom';

import Pages from '../../pages';

function AppRoutes() {
  return(
    <>
      <Route exact path="/" component={Pages.Home} />
      <Route exact path="/posts" component={Pages.Posts} />
      <Route exact path="/users" component={Pages.Users} />
    </>
  );
}

export default AppRoutes;
