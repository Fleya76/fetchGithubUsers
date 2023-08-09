import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

describe('Header', () => {
  it('renders header with correct text', () => {
    const mockText = 'My Header';
    render(<Header text={mockText} />);
    const headerElement = screen.getByRole('heading', { name: /my header/i });
    expect(headerElement).toBeInTheDocument();
  });
});
