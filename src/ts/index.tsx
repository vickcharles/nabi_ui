import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppContainer from './main/components/AppContainer';
import registerServiceWorker from '../registerServiceWorker';
import '../assets/css/index.css';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import { MuiThemeProvider } from 'material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: '\'Montserrat\', sans-serif !important'
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AppContainer />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
