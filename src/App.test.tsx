import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import App from './App';

test('renders main title and subtitle', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Minipic/i);
  const paragraphElement = screen.getByTestId('subtitle');
  expect(titleElement).toBeInTheDocument();
  expect(paragraphElement).toHaveTextContent('Image compression tool');
});
