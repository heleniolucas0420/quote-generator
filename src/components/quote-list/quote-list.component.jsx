import React from 'react';

import QuoteBox from '../quote-box/quote-box.component';

import './quote-list.styles.scss';


const QuoteList = ({ author, quotes }) => (
  <div className='quote-list__container'>
    <h1 className='quote-list__author'>{author}</h1>
    <div className='quote-list'>
      {
        quotes.map((quote, index) => (
          index === 6 ? (
            <QuoteBox key={quote._id} quote={quote.quoteText} quoteList last />  
           ) : (
            <QuoteBox key={quote._id} quote={quote.quoteText} quoteList />
          )
        ))
      }
    </div>
  </div>
);


export default QuoteList;