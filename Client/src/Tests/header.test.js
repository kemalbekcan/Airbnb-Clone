import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Components/Header';

test('debug', () => {
  const { debug } = render(<Header />);
  debug();
});
