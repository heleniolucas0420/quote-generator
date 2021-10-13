import React from 'react';

import { ReactComponent as RenewIconSVG } from '../../assets/autorenew_black_18dp.svg';

import './random-button.styles.scss';


const RandomButton = ({ handleRandomQuote, isFetching }) => (
  <button className='random-button' onClick={() => handleRandomQuote()}>
    <span className='random-button__text'>random</span>
    <RenewIconSVG 
      className={`${isFetching ? 'spin' : 'random-button__icon'}`} 
    />
  </button>
);


export default RandomButton;