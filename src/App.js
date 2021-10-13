import React, { useEffect, useState } from 'react';

import { fetchRandomQuote, fetchAuthorQuotes } from './api/quote.api';

import RandomButton from './components/random-button/random-button.component';
import QuoteBox from './components/quote-box/quote-box.component';
import QuoteList from './components/quote-list/quote-list.component';
import QuoteButton from './components/quote-button/quote-button.component';
import PageFooter from './components/page-footer/page-footer.component';
import Spinner from './components/spinner/spinner.component';

import './App.css';


const App = () => {
  const [quotes, setQuotes] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const quoteData = await fetchRandomQuote();

      setQuotes(quoteData);
    }

    fetchData();
  }, []);

  const handleRandomQuote = async () => {
    setIsFetching(true);
    const quoteData = await fetchRandomQuote();
    setQuotes(quoteData);
    setIsFetching(false);
  }

  const handleAuthorQuotes = async () => {
    const quotesData = await fetchAuthorQuotes(quotes)

    setQuotes(quotesData);
  }

  if (!quotes) {
    return (
      <div className="App">
        <RandomButton handleRandomQuote={handleRandomQuote} isFetching={isFetching} />
        <Spinner />
        <PageFooter name='Mr. President' />
      </div>
    );
  }

  if (quotes.length > 1) {
    const quote = quotes[0];

    return (
      <div className="App">
        <RandomButton handleRandomQuote={handleRandomQuote} isFetching={isFetching} />
        <QuoteList author={quote.quoteAuthor} quotes={quotes} />
        <PageFooter name='Mr. President' />
      </div>
    );
  } else {
    const quote = quotes[0];

    return (
      <div className="App">
        <RandomButton handleRandomQuote={handleRandomQuote} isFetching={isFetching} />
        <QuoteBox quote={quote.quoteText} />
        <QuoteButton
          author={quote.quoteAuthor}
          genre={quote.quoteGenre}
          handleAuthorQuotes={handleAuthorQuotes}
        />
        <PageFooter name='Mr. President' />
      </div>
    );
  }
}


export default App;