import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppContainer from '../components/AppContainer';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><AppContainer /></MemoryRouter>, div);
});
