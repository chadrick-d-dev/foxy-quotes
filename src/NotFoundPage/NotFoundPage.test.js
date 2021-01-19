import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFoundPage from './NotFoundPage';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from "history";

describe('NotFoundPage', () => {
  it('should render NotFoundPage with logo', () => {
    render(
      <MemoryRouter>
        <NotFoundPage/>
      </MemoryRouter>
    )
    const logo = screen.queryByAltText('Foxy Quotes Logo')
    expect(logo).toBeInTheDocument()
  })

  it('should render NotFoundPage with a pondering fox image', () => {
    render(
      <MemoryRouter>
        <NotFoundPage/>
      </MemoryRouter>
    )
    const ponderFox = screen.queryByAltText('Questioning Fox')
    expect(ponderFox).toBeInTheDocument()
  })

  it('should render NotFoundPage with text', () => {
    render(
      <MemoryRouter>
        <NotFoundPage/>
      </MemoryRouter>
    )
    const text = screen.getByText(/the 2 dimensional fox ponders\.\.\. are you lost\?/i)
    expect(text).toBeInTheDocument()
  })

  it('should render NotFoundPage with a button directing back to foxy quoter', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <NotFoundPage/>
      </Router>
    )
    const backButton = screen.queryByText('Go back to Foxy Quotes')
    expect(backButton).toBeInTheDocument()
    userEvent.click(backButton)
    expect(history.location.pathname).toBe('/foxy-quoter')
  })
})