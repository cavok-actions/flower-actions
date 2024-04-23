import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Flower Flower Flower link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Flower Flower Flower/i);
  expect(linkElement).toBeInTheDocument();
});
