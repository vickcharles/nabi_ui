import * as React from 'react';
import RequestForm from './RequestForm';

import { PageTitle } from '../../main';

export class Request extends React.Component {
  public render (): JSX.Element {
    return (
      <div className="nabi-container">
       <PageTitle pageTitle="REQUEST INSTRUCTOR" />
      <div className="nabi-background-white nabi-section">
        <RequestForm />
      </div>
      </div>
    );
  }

}
