import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import UserProvider from '../context/UserContext';
import App from '../App';

jest.mock('../utils/api', () => ({
  getUsers: jest.fn(() => Promise.resolve({ items: [], total_count: 0 })),
}));

describe('App Component', () => {
  it('renders header and input', () => {
    render(
        <UserProvider>
          <App />
        </UserProvider>
    );

    expect(screen.getByText('Github Search')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search input')).toBeInTheDocument();
  });

  it('displays loading message while fetching data', async () => {
    render(
        <UserProvider>
          <App />
        </UserProvider>
    );

    fireEvent.change(screen.getByPlaceholderText('Search input'), { target: { value: 'some search' } });
    expect(screen.getByText('Wait a bit, the results are coming')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('Your search did not yield any results')).toBeInTheDocument();
    });
  });

  it('displays error message on API error', async () => {
    jest.spyOn(require('../utils/api'), 'getUsers').mockImplementation(() => Promise.reject('API Error'));

    render(
        <UserProvider>
          <App />
        </UserProvider>
    );

    fireEvent.change(screen.getByPlaceholderText('Search input'), { target: { value: 'some search' } });
    await waitFor(() => {
      expect(screen.getByText('API Error')).toBeInTheDocument();
    });
  });
});
