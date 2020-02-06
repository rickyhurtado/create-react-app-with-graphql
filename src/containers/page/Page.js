import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './Page.css';

function Page(props) {
  return (
    <Container maxWidth="lg">
      <Typography className="page-title" component="h1" variant="h5">{props.title}</Typography>

      {props.children}
    </Container>
  );
}

export default Page;
