import { render, screen } from '@testing-library/react';
import { Card } from '../components/Card';

const mockUser = {
  avatar_url: 'https://example.com/avatar.png',
  login: 'testuser',
  html_url: 'https://example.com/testuser',
  id: 123,
  isChecked: false,
};

describe('Card', () => {
  it('renders card details correctly', () => {
    render(<Card {...mockUser} />);

    const avatarImage = screen.getByAltText('avatar')
    const idElement = screen.getByText(/123/i);
    const loginElement = screen.getByText(/testuser/i);
    const profilButton = screen.getByText(/profil/i);

    expect(avatarImage).toBeInTheDocument();
    expect(idElement).toBeInTheDocument();
    expect(loginElement).toBeInTheDocument();
    expect(profilButton).toBeInTheDocument();
  });
});
