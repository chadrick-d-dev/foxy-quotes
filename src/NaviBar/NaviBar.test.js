import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NaviBar from './NaviBar';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from "history";

describe('NaviBar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NaviBar/>
      </MemoryRouter>
    )
  })
  it('should render NaviBar with foxy quoter and foxy stash tabs', () => {
    const quoterTab = screen.getByText('Foxy Quoter')
    const stashTab = screen.getByText('Foxy Stash')
    expect(quoterTab).toBeInTheDocument()
    expect(stashTab).toBeInTheDocument()
  })

  it('should render NaviBar with a logo', () => {
    const logo = screen.queryByAltText('Foxy Quotes Logo')
    expect(logo).toBeInTheDocument()
  })
})

describe('NaviBar with history', () => {
  it('should route user to Foxy Quoter page when Foxy Quoter tab is clicked', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <NaviBar/>
      </Router>
    )
    const quoterTab = screen.getByText('Foxy Quoter')
    userEvent.click(quoterTab)
    expect(history.location.pathname).toBe('/foxy-quoter')
  })

  it('should route user to Foxy Stash page when Foxy Stash tab is clicked', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <NaviBar/>
      </Router>
    )
    const stashTab = screen.getByText('Foxy Stash')
    userEvent.click(stashTab)
    expect(history.location.pathname).toBe('/foxy-stash')
  })
})