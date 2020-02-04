import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Container maxWidth="lg">
          <Typography component="h1" variant="h5">Create React App</Typography>
        </Container>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
