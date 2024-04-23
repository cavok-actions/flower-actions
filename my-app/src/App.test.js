import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ✨Flower✨ link', () => {
  render(<App />);
  const linkElement = screen.getByText(/✨Flower✨/i);
  expect(linkElement).toBeInTheDocument();
});
