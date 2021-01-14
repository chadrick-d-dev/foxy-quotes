import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SavedContainer from './SavedContainer';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('SavedContainer', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SavedContainer/>
      </MemoryRouter>
    )
  })
  it.skip('should render', () => {
    // setup

    // assertions

    //expectation

  })
})