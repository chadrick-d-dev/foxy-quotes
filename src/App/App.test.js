import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
  })
  it.skip('should render', () => {
    // setup

    // assertions

    //expectation

  })
})
