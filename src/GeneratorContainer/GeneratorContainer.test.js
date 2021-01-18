import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GeneratorContainer from './GeneratorContainer';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('GeneratorContainer Load View', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
         <GeneratorContainer
          createFoxyQuote={jest.fn()}
          foxyQuote = {null}
          saveFoxyQuote = {jest.fn()}
        />
      </MemoryRouter>
    )
  })
  it('should render the Foxy Quotes Logo', () => {
    const logo = screen.getByAltText('Foxy Quotes Logo')
    expect(logo).toBeInTheDocument()
  })
  
  it('should render text instructions for Foxy Me A Quote button', () => {
    const loadInstructions = screen.getByText(/please click on the 'foxy me aquote button' to create a foxy quote/i)
    expect(loadInstructions).toBeInTheDocument()
  })

  it('should not render text instructions for Stash This Trickster and Foxy Me Another buttons', () => {
    const quoteInstructions = screen.queryByText(/to save a foxy quote, click the 'stash this trickster' button\.to create a new foxy quote, clickthe 'foxy me another!' button\./i)
    expect(quoteInstructions).not.toBeInTheDocument()
  })

  it('should render the Foxy Me A Quote button', () => {
    const foxyQuoteButton = screen.getByText('Foxy Me A Quote!')
    expect(foxyQuoteButton).toBeInTheDocument()
  })
})

describe('GeneratorContainer Load View button calls', () => {
  it('should call createFoxyQuote when Foxy Me A Quote button is clicked', () => {
    const mockCreateFoxyQuote = jest.fn()
    const mockSaveFoxyQuote = jest.fn()
    render(
      <MemoryRouter>
         <GeneratorContainer
          createFoxyQuote={mockCreateFoxyQuote}
          foxyQuote = {null}
          saveFoxyQuote = {mockSaveFoxyQuote}
        />
      </MemoryRouter>
    )
    const foxyQuoteButton = screen.getByText('Foxy Me A Quote!')
    userEvent.click(foxyQuoteButton)
    expect(mockCreateFoxyQuote).toHaveBeenCalled()
  })
  
  it('should not call saveFoxyQuote when Foxy Me A Quote button is clicked', () => {
    const mockCreateFoxyQuote = jest.fn()
    const mockSaveFoxyQuote = jest.fn()
    render(
      <MemoryRouter>
         <GeneratorContainer
          createFoxyQuote={mockCreateFoxyQuote}
          foxyQuote = {null}
          saveFoxyQuote = {mockSaveFoxyQuote}
        />
      </MemoryRouter>
    )
    const foxyQuoteButton = screen.getByText('Foxy Me A Quote!')
    userEvent.click(foxyQuoteButton)
    expect(mockSaveFoxyQuote).not.toHaveBeenCalled()
  })
})

describe('GeneratorContainer Quote View', () => {
  beforeEach(() => {
    const mockFoxyQuote = {
      id: 1610997080221,
      image: "https://randomfox.ca/images/25.jpg",
      quote: "I can, therefore I am.",
      author: "Simone Weil"  
    }
    render(
      <MemoryRouter>
         <GeneratorContainer
          createFoxyQuote={jest.fn()}
          foxyQuote = {mockFoxyQuote}
          saveFoxyQuote = {jest.fn()}
        />
      </MemoryRouter>
    )
  })

  it('should not render the Foxy Quotes Logo', () => {
    const logo = screen.queryByAltText('Foxy Quotes Logo')
    expect(logo).not.toBeInTheDocument()
  })

  it('should render text instructions for Stash This Trickster and Foxy Me Another buttons', () => {
    const quoteInstructions = screen.getByText(/to save a foxy quote, click the 'stash this trickster' button\.to create a new foxy quote, clickthe 'foxy me another!' button\./i)
    expect(quoteInstructions).toBeInTheDocument()
  })

  it('should not render text instructions for Foxy Me A Quote button', () => {
    const loadInstructions = screen.queryByText(/please click on the 'foxy me aquote button' to create a foxy quote/i)
    expect(loadInstructions).not.toBeInTheDocument()
  })

  it('should not render Foxy Me A Quote Button when foxyQuote has an object value', () => {
    const foxyQuoteButton = screen.queryByText('Foxy Me A Quote!')
    expect(foxyQuoteButton).not.toBeInTheDocument()
  })

  it('should render a picture of a fox when foxyQuote has an object value', () => {
    const foxImage = screen.getByRole('img', { name: /fox/i })
    expect(foxImage).toBeInTheDocument()
  })

  it('should render a quote and its author when foxyQuote has an object value', () => {
    const quote = screen.getByText('I can, therefore I am.')
    const author = screen.getByText('Simone Weil')
    expect(quote).toBeInTheDocument()
    expect(author).toBeInTheDocument()
  })

  it('should render Stash This Trickster button when foxyQuote has an object value', () => {
    const stashButton = screen.getByText('Stash This Trickster!')
    expect(stashButton).toBeInTheDocument()
  })

  it('should render Foxy Me Another button when foxyQuote has an object value', () => {
    const anotherButton = screen.getByText('Foxy Me Another!')
    expect(anotherButton).toBeInTheDocument()
  })
})

describe('GeneratorContainer Quote View button calls', () => {
  it('should call saveFoxyQuote when Stash This Trickster button is clicked', () => {
    const mockCreateFoxyQuote = jest.fn()
    const mockSaveFoxyQuote = jest.fn()
    const mockFoxyQuote = {
      id: 1610997080221,
      image: "https://randomfox.ca/images/25.jpg",
      quote: "I can, therefore I am.",
      author: "Simone Weil"  
    }
    render(
      <MemoryRouter>
         <GeneratorContainer
          createFoxyQuote={mockCreateFoxyQuote}
          foxyQuote = {mockFoxyQuote}
          saveFoxyQuote = {mockSaveFoxyQuote}
        />
      </MemoryRouter>
    )
    const stashButton = screen.getByText('Stash This Trickster!')
    userEvent.click(stashButton)
    expect(mockSaveFoxyQuote).toHaveBeenCalled()
  })
  
  it('should call createFoxyQuote when Foxy Me Another button is clicked', () => {
    const mockCreateFoxyQuote = jest.fn()
    const mockSaveFoxyQuote = jest.fn()
    const mockFoxyQuote = {
      id: 1610997080221,
      image: "https://randomfox.ca/images/25.jpg",
      quote: "I can, therefore I am.",
      author: "Simone Weil"  
    }
    render(
      <MemoryRouter>
         <GeneratorContainer
          createFoxyQuote={mockCreateFoxyQuote}
          foxyQuote = {mockFoxyQuote}
          saveFoxyQuote = {mockSaveFoxyQuote}
        />
      </MemoryRouter>
    )
    const anotherButton = screen.getByText('Foxy Me Another!')
    userEvent.click(anotherButton)
    expect(mockCreateFoxyQuote).toHaveBeenCalled()
  })
})