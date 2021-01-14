import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NaviBar from './NaviBar';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('NaviBar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NaviBar/>
      </MemoryRouter>
    )
  })
  it.skip('should render', () => {
    // setup

    // assertions

    //expectation

  })
})