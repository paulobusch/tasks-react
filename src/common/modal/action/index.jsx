import './action.css';

import React from 'react';

export default function Action(props) {
  return (
    <button type="button" 
      onClick={ props.onClick } 
      disabled={ props.loading }
      className={ `btn-with-spinner btn btn-${ props.style ? props.style  : 'secondary' }` }>
      { props.loading && <><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;</> }
      { props.text }
    </button>
  );
}
