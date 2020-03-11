import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Gen from './Components/Gen';
import './assets/sass/index.sass';
import { ThemeProvider } from '@material-ui/core/styles';
import  { CssBaseline } from '@material-ui/core';
import { theme } from './Components/Theme';

function App() {
    return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
        <Gen />
      </ThemeProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
