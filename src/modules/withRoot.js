import React from 'react';
import theme from './theme';

import { CssBaseline, ThemeProvider } from '@mui/material';

export default function withRoot(Component) {
  function WithRoot(props) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  }

  return WithRoot;
}
