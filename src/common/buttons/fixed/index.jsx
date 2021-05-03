import './fixed-button.css';

import React from 'react';

export default function FixedButton(props) {
  return (
    <i className={ `fixed-button ${props.icon}` } 
      title={ props.title } onClick={ props.onClick } 
      style={ { backgroundColor: props.color ?? 'var(--primary)' } }
    >
    </i>
  );
}
