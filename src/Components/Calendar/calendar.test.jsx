import React from 'react';
// import '@testing-library/jest-dom';
import {
  render, describe, test, cleanup, afterEach,
} from '@testing-library/react';

import App from '../../App';

describe('App', () => {
  afterEach(cleanup);

  test('renders App component', () => {
    render(<App />);
  });
});
