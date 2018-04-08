import * as React from 'react';
import Header from './Header';
import Registration from '../../Registration/components/Registration';

class AppContainer extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Registration/>
      </>
    );
  }
}

export default AppContainer;
