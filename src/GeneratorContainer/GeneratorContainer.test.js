import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GeneratorContainer from './GeneratorContainer';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('GeneratorContainer', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <GeneratorContainer/>
      </MemoryRouter>
    )
  })
  it.skip('should render', () => {
    // setup

    // assertions

    //expectation

  })
})