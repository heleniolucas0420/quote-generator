import React from 'react';

import './page-footer.styles.scss';


const PageFooter = ({ name }) => (
  <div className='page-footer__container'>
    <div className='page-footer__credits'>
      created by <span className='page-footer__user-name'>{name}</span> - devChallenges.io
    </div>
  </div>
);


export default PageFooter;