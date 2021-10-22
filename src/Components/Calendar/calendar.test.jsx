import React from 'react';
// eslint-disable-next-line import/no-unresolved
import '@testing-library/jest-dom';
import {
  render, describe, test,
} from '@testing-library/react';

import App from '../../App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});
