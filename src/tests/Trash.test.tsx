import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Trash } from '../components/Trash';

describe('Trash', () => {
  it('renders trash icon', () => {
    const mockOnClick = jest.fn();
    render(<Trash onClick={mockOnClick} />);
    const trashIcon = screen.getByLabelText(/delete/i);
    expect(trashIcon).toBeInTheDocument();
  });

  it('calls onClick when trash icon is clicked', () => {
    const mockOnClick = jest.fn();
    render(<Trash onClick={mockOnClick} />);
    const trashIcon = screen.getByLabelText(/delete/i);
    userEvent.click(trashIcon);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
