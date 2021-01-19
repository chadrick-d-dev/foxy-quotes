import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SavedContainer from './SavedContainer';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('SavedContainer with no quotes', () => {
  beforeEach(() => {
    const mockSavedQuotes = []
    const mockDeleteQuote = jest.fn()
    render(
      <MemoryRouter>
        <SavedContainer
          savedFoxyQuotes={mockSavedQuotes}
          deleteFoxyQuote={mockDeleteQuote}
        />
      </MemoryRouter>
    )
  })
  it('should render the Foxy Quotes logo', () => {
    const logo = screen.getByAltText('Foxy Quotes Logo')
    expect(logo).toBeInTheDocument()
  })

  it('should render text that informs user there are no saved quotes', () => {
    const noQuotesMessage = screen.getByText('You haven\'t stashed any Foxy Quotes yet!')
    expect(noQuotesMessage).toBeInTheDocument()
  })

  it('should not render a quote', () => {
    const authorLabel = screen.queryByText('author')
    expect(authorLabel).not.toBeInTheDocument()
  })
})

describe('SavedContainer with quotes', () => {
  beforeEach(() => {
    const mockSavedQuotes = [
      {
        id: 1611008876527,
        img: "https://randomfox.ca/images/18.jpg",
        quote: "I will prepare and some day my chance will come.",
        author: "Abraham Lincoln"
      },
      {
        id: 1611008881335,
        img: "https://randomfox.ca/images/66.jpg",
        quote: "Knowing is not enough; we must apply!",
        author: "Johann Wolfgang von Goethe"
      }
    ]
    const mockDeleteQuote = jest.fn()
    render(
      <MemoryRouter>
        <SavedContainer
          savedFoxyQuotes={mockSavedQuotes}
          deleteFoxyQuote={mockDeleteQuote}
        />
      </MemoryRouter>
    )
  })

  it('should render text instructions for Unstash This Trickster button', () => {
    const quotesInstructions = screen.getByText('To delete a Foxy Quote, click the\'Unstash This Trickster!\' button withinthe Foxy Quote you\'d like to delete.')
    expect(quotesInstructions).toBeInTheDocument()
  })

  it('should not render Foxy Quotes logo', () => {
    const logo = screen.queryByText('Foxy Quotes Logo')
    expect(logo).not.toBeInTheDocument()
  })

  it('should not render text that informs user there are no saved quotes', () => {
    const noQuotesMessage = screen.queryByText('You haven\'t stashed any Foxy Quotes yet!')
    expect(noQuotesMessage).not.toBeInTheDocument()
  })

  it('should render all saved Foxy Quotes', () => {
    const foxOneQuote = screen.getByText('I will prepare and some day my chance will come.')
    const foxTwoQuote = screen.getByText('Knowing is not enough; we must apply!')
    expect(foxOneQuote).toBeInTheDocument()
    expect(foxTwoQuote).toBeInTheDocument()
  })

  it('should render a delete button with each FoxyQuote', () => {
    const foxOneDeleteButton = screen.getByTestId(1611008876527)
    const foxTwoDeleteButton = screen.getByTestId(1611008881335)
    expect(foxOneDeleteButton).toBeInTheDocument()
    expect(foxTwoDeleteButton).toBeInTheDocument()
  })
})

describe('SavedContainer with quotes', () => {
  it('should call deleteFoxyQuote when Unstash This Trickster button is clicked', () => {
    const mockSavedQuotes = [
      {
        id: 1611008876527,
        img: "https://randomfox.ca/images/18.jpg",
        quote: "I will prepare and some day my chance will come.",
        author: "Abraham Lincoln"
      },
      {
        id: 1611008881335,
        img: "https://randomfox.ca/images/66.jpg",
        quote: "Knowing is not enough; we must apply!",
        author: "Johann Wolfgang von Goethe"
      }
    ]
    const mockDeleteQuote = jest.fn()
    render(
      <MemoryRouter>
        <SavedContainer
          savedFoxyQuotes={mockSavedQuotes}
          deleteFoxyQuote={mockDeleteQuote}
        />
      </MemoryRouter>
    )
    const foxDeleteButton = screen.getByTestId(1611008876527)
    userEvent.click(foxDeleteButton)
    expect(mockDeleteQuote).toHaveBeenCalled()
  })
})