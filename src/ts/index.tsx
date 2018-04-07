import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppContainer from './main/components/AppContainer';
import registerServiceWorker from '../registerServiceWorker';
import '../assets/css/index.css';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import { MuiThemeProvider } from 'material-ui/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      raised: {
        backgroundColor: '#06c3e1 !important',
        borderRadius: '3px',
        boxShadow: 'inset 0 -3px 0 rgba(0,0,0,.1)',
        fontWeight: 600,
        padding: '18px 40px'
      }
    },
    MuiDivider: {
      root: {
        height: '2px',
        backgroundColor: '#ebeef1'
      }
    },
    MuiFormLabel : {
      root: {
        color: '#717a8a',
        fontSize: '14px',
        fontWeight: 500
      },
      focused: {
        marginTop: '0px !important',
        color: '#06c3e1'
      }
    },
    MuiInput: {
      focused: {
        border: '2px solid #06c3e1 !important',
        borderRadius: '5px',
      },
      input : {
        '&::placeholder': {
          color: '#717a8a !important'
        },
        background: '#f3f6f9',
        color: '#717a8a !important',
        borderRadius: '5px',
        padding: '17px 40px'
      },
      root: {
        border: '2px solid #ebeef1 !important',
        borderRadius: '5px'
      },
      underline: {
        '&:after': {
          backgroundColor: 'transparent !important'
        },
        '&:before': {
          backgroundColor: 'transparent !important'
        },
        backgroundColor: 'transparent !important'
      }
    },
    MuiInputLabel: {
      root: {
        zIndex: 10,
        marginLeft: '20px',
        marginTop: '12px'
      },
      shrink: {
        marginTop: '0px'
      }
    },
    MuiRadio: {
      checked: {
        color: '#06c3e1 !important'
      }
    },
    MuiTypography : {
      root: {
        color: '#717a8a !important'
      },
      title: {
        color: '#06c3e1 !important',
        fontSize: '24px !important',
        fontWeight: 500,
        marginTop: '20px !important',
        textAlign: 'center',
        textTransform: 'uppercase'
      }
    }
  },
  typography: {
    fontFamily: '\'Montserrat\', sans-serif !important',
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AppContainer />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
