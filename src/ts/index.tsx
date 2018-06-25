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
      flatPrimary: {
        color: '#06c3e1'
      },
      raised: {
        borderRadius: '3px',
        boxShadow: 'inset 0 -3px 0 rgba(0,0,0,.1)',
        fontWeight: 500
      },
      raisedPrimary: {
        backgroundColor: '#06c3e1 !important',
      },
      raisedSecondary: {
        color: '#06c3e1 !important',
        backgroundColor: '#fff !important'
      },
      root: {
        color: '#717a8a',
        padding: '17px 25px',
        textTransform: 'none'
      }
    },
    MuiDialogActions: {
      root: {
        padding: '0px 20px 20px'
      }
    },
    MuiDialogContent: {
      root: {
        padding: '24px 40px 24px 40px'
      }
    },
    MuiDialogTitle: {
      root: {
        padding: '6px 24px 19px 24px',
        background: '#eef1f4'
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
    MuiGridListTileBar: {
      root: {
        background: '#c6c9d0',
        borderRadius: '3px'
      }
    },
    MuiIconButton: {
      root: {
        '&:hover': {
          background: 'rgba(6,195,225, 0.2)'
        },
        color: '#06c3e1 !important',
        borderRadius: '3px',
        height: '28px',
        width: '30px'
      }
    },
    MuiInput: {
      focused: {
        border: '2px solid #06c3e1 !important',
        borderRadius: '5px',
      },
      fullWidth: {
        width: 'auto'
      },
      input : {
        '&::placeholder': {
          color: '#717a8a !important'
        },
        background: '#f3f6f9',
        borderRadius: '5px',
        color: '#717a8a !important',
        padding: '17px 18px'
      },
      multiline: {
        padding: '20px'
      },
      root: {
        border: '2px solid #ebeef1 !important',
        borderRadius: '5px'
      },
      underline: {
        '&:after': {
          backgroundColor: '#f3f6f9 !important'
        },
        '&:before': {
          backgroundColor: '#f3f6f9 !important'
        },
        backgroundColor: '#f3f6f9 !important'
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
        backgroundColor: '#c6c9d0'
      }
    },
    MuiMenuItem: {
      root: {
        color: '#717a8a'
      }
    },
    MuiMobileStepper: {
      root: {
        background: '#fff'
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: '3px'
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
    MuiSvgIcon: {
      colorPrimary: {
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
