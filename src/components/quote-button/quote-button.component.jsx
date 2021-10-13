import React from 'react';

import { ReactComponent as ArrowSVG } from '../../assets/arrow_right_alt_white_24dp.svg'

import './quote-button.styles.scss';


const QuoteButton = ({ author, genre, handleAuthorQuotes }) => (
  <button className='quote-button__container' onClick={() => handleAuthorQuotes()}>
    <div className='quote-button__info'>
      <span className='quote-button__author'>{author}</span>
      <span className='quote-button__genre'>{genre}</span>
    </div>
    <ArrowSVG className='quote-button__arrow-icon'/>
  </button>
);


export default QuoteButton;