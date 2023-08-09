import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../components/Checkbox';

describe('Checkbox', () => {
  it('renders checkbox with label', () => {
    const mockLabel = 'Check me';
    const mockOnChange = jest.fn();

    render(<Checkbox label={mockLabel} isChecked={false} onChange={mockOnChange} />);

    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText(mockLabel);

    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('calls onChange function when checkbox is clicked', () => {
    const mockOnChange = jest.fn();

    render(<Checkbox isChecked={false} onChange={mockOnChange} />);

    const checkbox = screen.getByRole('checkbox');

    userEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
