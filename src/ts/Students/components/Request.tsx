import * as React from 'react';
import RequestForm from './RequestForm';

import { PageTitle } from '../../main';

export class Request extends React.Component {
  public render (): JSX.Element {
    return (
      <div className="nabi-container">
      <div className="nabi-background-white nabi-section">
        <PageTitle pageTitle="REQUEST INSTRUCTOR" />
        <RequestForm />
      </div>
      </div>
    );
  }

}
