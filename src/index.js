import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Gen from './Gen';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import  { CssBaseline, createMuiTheme } from '@material-ui/core';

function App() {
    const theme = createMuiTheme({
        palette: {
          type: 'dark',
        },
    });
  
    return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
        <Gen />
      </ThemeProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
