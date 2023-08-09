import { render, screen } from '@testing-library/react';
import { Gallery } from '../components/Gallery';

const mockItems = [
    {
      login: 'user1',
      id: 1,
      node_id: 'node_id_1',
      avatar_url: 'https://example.com/avatar1.png',
      gravatar_id: 'gravatar_id_1',
      url: 'https://example.com/user1',
      html_url: 'https://example.com/user1',
      followers_url: 'https://example.com/user1/followers',
      following_url: 'https://example.com/user1/following',
      gists_url: 'https://example.com/user1/gists',
      starred_url: 'https://example.com/user1/starred',
      subscriptions_url: 'https://example.com/user1/subscriptions',
      organizations_url: 'https://example.com/user1/orgs',
      repos_url: 'https://example.com/user1/repos',
      events_url: 'https://example.com/user1/events',
      received_events_url: 'https://example.com/user1/received_events',
      type: 'User',
      site_admin: false,
      score: 0.9,
      isChecked: false,
    },
    {
      login: 'user2',
      id: 2,
      node_id: 'node_id_2',
      avatar_url: 'https://example.com/avatar2.png',
      gravatar_id: 'gravatar_id_2',
      url: 'https://example.com/user2',
      html_url: 'https://example.com/user2',
      followers_url: 'https://example.com/user2/followers',
      following_url: 'https://example.com/user2/following',
      gists_url: 'https://example.com/user2/gists',
      starred_url: 'https://example.com/user2/starred',
      subscriptions_url: 'https://example.com/user2/subscriptions',
      organizations_url: 'https://example.com/user2/orgs',
      repos_url: 'https://example.com/user2/repos',
      events_url: 'https://example.com/user2/events',
      received_events_url: 'https://example.com/user2/received_events',
      type: 'User',
      site_admin: true,
      score: 0.8,
      isChecked: true,
    },
  ];

describe('Gallery', () => {
  it('renders gallery items correctly', () => {
    render(<Gallery items={mockItems} />);

    const userCards = screen.getAllByAltText('avatar');
    const loginElements = screen.getAllByText(/user/i);
    const profilButtons = screen.getAllByText(/profil/i);

    expect(userCards).toHaveLength(mockItems.length);
    expect(loginElements).toHaveLength(mockItems.length);
    expect(profilButtons).toHaveLength(mockItems.length);
  });

  it('renders empty message when no items', () => {
    render(<Gallery items={[]} isEmptyMessage="No items found" />);
    const emptyMessage = screen.getByText(/no items found/i);
    expect(emptyMessage).toBeInTheDocument();
  });
});
