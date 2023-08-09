import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Input } from '../components/Input';

describe('Input', () => {
  it('renders input with placeholder', () => {
    const mockPlaceholder = 'Enter something';
    render(<Input placeholder={mockPlaceholder} onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText(mockPlaceholder);
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChange function with throttled value', async () => {
    const mockOnChange = jest.fn();
    const mockDelay = 1000;

    render(<Input delay={mockDelay} onChange={mockOnChange} />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    // Wait for the throttle delay
    await waitFor(() => expect(mockOnChange).toHaveBeenCalledWith('test'));
  });

  it('renders success, error, and extra messages', () => {
    const mockSuccessMessage = 'Success!';
    const mockErrorMessage = 'Error!';
    const mockExtraMessage = 'Extra info';
    
    render(
      <Input
        successMessage={mockSuccessMessage}
        errorMessage={mockErrorMessage}
        extraInformation={mockExtraMessage}
        onChange={() => {}}
      />
    );

    const successMessage = screen.getByText(mockSuccessMessage);
    const errorMessage = screen.getByText(mockErrorMessage);
    const extraMessage = screen.getByText(mockExtraMessage);

    expect(successMessage).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
    expect(extraMessage).toBeInTheDocument();
  });
});
