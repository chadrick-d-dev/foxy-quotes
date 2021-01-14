import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GeneratorCard from './GeneratorCard';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('GeneratorCard', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <GeneratorCard/>
      </MemoryRouter>
    )
  })
  it.skip('should render', () => {
    // setup

    // assertions

    //expectation

  })
})