export const fetchRandomQuote = async () => {
  const response = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random');
  const dataRes = await response.json();
  const quotes = dataRes.data;

  return quotes;
}

export const fetchAuthorQuotes = async (quotes) => {
  const { quoteAuthor } = quotes[0];
  const response = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/?author=${quoteAuthor}&limit=5`);
  const dataRes = await response.json();
  const quotesData = dataRes.data;

  return quotesData
}