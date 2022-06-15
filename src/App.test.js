import { render, screen } from '@testing-library/react';
import App from './App';

test('renders placeholder', () => {
  render(<App />);
  const placeholderText = screen.getByPlaceholderText("Enter the city whose weather you want to know...");
  expect(placeholderText).toBeInTheDocument();
});