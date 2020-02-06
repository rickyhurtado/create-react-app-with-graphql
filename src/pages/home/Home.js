import React from 'react';

import Typography from '@material-ui/core/Typography';

import Page from '../../containers/page/Page';

function Home() {
  return (
    <Page title="Home">
      <Typography component="p" variant="body1">
        This is a prototype app for <strong>GraphQL</strong> using Create React App as frontend and Rails as backend.
      </Typography>
    </Page>
  );
}

export default Home;
