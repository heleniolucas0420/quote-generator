import React from 'react';

import './quote-box.styles.scss';


const QuoteBox = ({ quote, quoteList, last }) => (
  <div className={`
    quote-box__container 
    ${quoteList ? 'quote-box__quote-list' : ''} 
    ${last ? 'last' : ''}
  `}>
    <span className='quote-box__text'>{`"${quote}"`}</span>
  </div>
);


export default QuoteBox;