import React from 'react';
import { render, screen } from '@testing-library/react';
import { ItemsAction } from '../components/ItemsAction';


describe('ItemsAction', () => {
    it('renders checkbox, duplicate button, and delete button', () => {
    render(<ItemsAction withCheckbox withDuplicate withDelete />);

    expect(screen.getByLabelText('0 element(s) selected')).toBeInTheDocument();
    expect(screen.getByLabelText('Duplicate')).toBeInTheDocument();
    expect(screen.getByLabelText('Delete')).toBeInTheDocument();
  });
});
