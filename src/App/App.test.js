import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { getFoxPhoto, getQuote } from '../apiCalls';
jest.mock('../apiCalls.js');

describe('App', () => {
  beforeEach(() => {
    getFoxPhoto.mockResolvedValueOnce(
      {
        "image": "https://randomfox.ca/images/74.jpg",
        "link": "https://randomfox.ca/?i=74"
      }
    )
    getQuote.mockResolvedValueOnce(
      {
        "_id": "ncgMsMKJiBiN",
        "tags": [
            "famous-quotes",
            "inspirational"
        ],
        "content": "If you aren't going all the way, why go at all?",
        "author": "Joe Namath",
        "length": 47
      }
    )  
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
  })
  it('should render NaviBar', () => {
    const quoterTab = screen.getByText('Foxy Quoter')
    const stashTab = screen.getByText('Foxy Stash')
    expect(quoterTab).toBeInTheDocument()
    expect(stashTab).toBeInTheDocument()
  })

  it('should render GeneratorContainer on load', () => {
    const loadInstructions = screen.getByText(/please click on the 'foxy me aquote button' to create a foxy quote/i)
    const foxyQuoteButton = screen.getByText('Foxy Me A Quote!')
    expect(loadInstructions).toBeInTheDocument()
    expect(foxyQuoteButton).toBeInTheDocument()
  })

  it('should render SavedContainer when Foxy Stash tab is clicked', async () => {
    const stashTab = screen.getByText('Foxy Stash')
    userEvent.click(stashTab)
    const noQuotesMessage = screen.getByText('You haven\'t stashed any Foxy Quotes yet!')
    await waitFor(() => expect(noQuotesMessage).toBeInTheDocument())
  })

  it('should display new foxy quote when Foxy Me A Quote button is clicked', async () => {
    const foxyQuoteButton = screen.getByText('Foxy Me A Quote!')
    userEvent.click(foxyQuoteButton)
    const quote = await waitFor(() => screen.getByText('If you aren\'t going all the way, why go at all?'))
    expect(quote).toBeInTheDocument()
  })

  it('should display new saved Foxy Quote in Foxy Stash when Foxy Quote is saved', async () => {
    const foxyQuoteButton = screen.getByText('Foxy Me A Quote!')
    userEvent.click(foxyQuoteButton)
    const stashButton = await waitFor(() => screen.getByText('Stash This Trickster!'))
    userEvent.click(stashButton)
    const stashTab = screen.getByText('Foxy Stash')
    userEvent.click(stashTab)
    const quote = await waitFor(() => screen.getByText('If you aren\'t going all the way, why go at all?'))
    expect(quote).toBeInTheDocument()
  })

  it('should display new foxy quote when Foxy Me Another button is clicked', async () => {
    const foxyQuoteButton = screen.getByText('Foxy Me A Quote!')
    userEvent.click(foxyQuoteButton)
    const quote = await waitFor(() => screen.getByText('If you aren\'t going all the way, why go at all?'))
    expect(quote).toBeInTheDocument()
    getFoxPhoto.mockResolvedValue(
      {
        "image": "https://randomfox.ca/images/46.jpg",
        "link": "https://randomfox.ca/?i=46"
      }
    )
    getQuote.mockResolvedValue(
      {
        "_id": "E5RobFpin",
        "tags": [
            "inspirational"
        ],
        "content": "Start where you are. Use what you have. Do what you can.",
        "author": "Arthur Ashe",
        "length": 56
      }
    )
    const anotherButton = await waitFor(() => screen.getByText('Foxy Me Another!'))
    userEvent.click(anotherButton)
    const newQuote = await waitFor(() => screen.getByText('Start where you are. Use what you have. Do what you can.'))
    expect(newQuote).toBeInTheDocument()
  })

  it('should delete saved Foxy Quote when its delete button is clicked', async () => {
    const foxyQuoteButton = screen.getByText('Foxy Me A Quote!')
    userEvent.click(foxyQuoteButton)
    const stashButton = await waitFor(() => screen.getByText('Stash This Trickster!'))
    userEvent.click(stashButton)
    const stashTab = screen.getByText('Foxy Stash')
    userEvent.click(stashTab)
    const quote = await waitFor(() => screen.getByText('If you aren\'t going all the way, why go at all?'))
    expect(quote).toBeInTheDocument()
    const deleteButton = screen.getByText('Unstash This Trickster!')
    userEvent.click(deleteButton)
    expect(quote).not.toBeInTheDocument()
  })
})
