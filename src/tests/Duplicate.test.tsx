import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Duplicate } from '../components/Duplicate';

describe('Duplicate', () => {
  it('renders duplicate icon', () => {
    const mockOnClick = jest.fn();

    render(<Duplicate onClick={mockOnClick} />);

    const duplicateIcon = screen.getByLabelText(/duplicate/i);

    expect(duplicateIcon).toBeInTheDocument();
  });

  it('calls onClick function when icon is clicked', () => {
    const mockOnClick = jest.fn();

    render(<Duplicate onClick={mockOnClick} />);

    const duplicateIcon = screen.getByLabelText(/duplicate/i);

    userEvent.click(duplicateIcon);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
