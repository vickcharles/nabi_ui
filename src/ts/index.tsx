import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppContainer from './main/components/AppContainer';
import registerServiceWorker from '../registerServiceWorker';
import '../assets/css/index.css';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter, Route } from 'react-router-dom';
import { getStore } from './store';
import { Provider } from 'react-redux';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      disabled: {
        color: '#c6c9d0'
      },
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
        backgroundColor: '#ebeef1',
        height: '2px'
      }
    },
    MuiFormLabel : {
      root: {
        color: '#717a8a',
        fontSize: '14px',
        fontWeight: 500
      },
      focused: {
        color: '#06c3e1',
        marginTop: '0px !important'
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
        borderRadius: '5px',
        color: '#717a8a !important',
        padding: '17px 40px'
      },
      multiline: {
        padding: '0px'
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
        marginLeft: '20px',
        marginTop: '12px',
        zIndex: 10
      },
      shrink: {
        marginTop: '0px'
      }
    },
    MuiLinearProgress : { 
      barColorPrimary: {
        backgroundColor: '#06c3e1'
      },
      colorPrimary: { 
        backgroundColor: 'rgba(6, 195, 225, 0.25)'
      }
    },
    MuiMobileStepper: {
      root: {
        background: '#fff'
      }
    },
    MuiRadio: {
      checked: {
        color: '#06c3e1 !important'
      }
    },
    MuiStepIcon: {
      root: {
        color: '#c6c9d0 !important'
      },
      active: {
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

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Route path="/" render={() => <AppContainer />} />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
