import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to My Simple Web App/i);
  expect(linkElement).toBeInTheDocument();
});