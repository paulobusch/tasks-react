import './submit-button.css';

import React from 'react';

export default function SubmitButton(props) {
  return (    
    <button type="submit" 
      onClick={ props.onClick } 
      disabled={ props.loading }
      className="btn-with-spinner btn btn-primary">
      { props.loading && <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;</> }
      { props.text ?? props.children }
    </button>
  );
}
