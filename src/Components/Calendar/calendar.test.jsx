import React from 'react';
import '@testing-library/jest-dom';
import {
  render, describe, test,
} from '@testing-library/react';

import { ContextObj } from './ContextObj';
import App from '../../App';

describe('App', () => {
  test('renders App component', () => {
    render(<ContextObj.Provider><App /></ContextObj.Provider>);
  });
});
